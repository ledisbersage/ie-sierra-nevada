import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const COOKIE_NAME = "iesn_master";
const MAX_AGE_SECONDS = 60 * 60 * 4; // 4 hours

export const runtime = "edge";

function getEnv() {
  return {
    user: process.env.MASTER_USER ?? "",
    pass: process.env.MASTER_PASSWORD ?? "",
  };
}

function constantTimeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

async function sha256Hex(input: string) {
  const data = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function signToken(user: string, ts: string, secret: string) {
  return sha256Hex(`${user}:${ts}:${secret}`);
}

async function isValidToken(token: string, user: string, secret: string) {
  const parts = token.split(":");
  if (parts.length !== 3) return false;
  const [tUser, ts, sig] = parts;
  if (!tUser || !ts || !sig) return false;
  if (tUser !== user) return false;
  const expected = await signToken(tUser, ts, secret);
  if (!constantTimeEqual(sig, expected)) return false;
  const tsNum = Number(ts);
  if (!Number.isFinite(tsNum)) return false;
  const age = Date.now() - tsNum;
  return age >= 0 && age <= MAX_AGE_SECONDS * 1000;
}

export async function POST(req: Request) {
  const { user, pass } = await req.json();
  const env = getEnv();
  if (!env.user || !env.pass) {
    return NextResponse.json({ ok: false, error: "CONFIG_MISSING" }, { status: 500 });
  }

  if (user !== env.user || pass !== env.pass) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const ts = Date.now().toString();
  const token = `${env.user}:${ts}:${await signToken(env.user, ts, env.pass)}`;
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: MAX_AGE_SECONDS,
    path: "/",
  });
  return res;
}

export async function GET() {
  const env = getEnv();
  if (!env.user || !env.pass) {
    return NextResponse.json({ ok: false, error: "CONFIG_MISSING" }, { status: 500 });
  }

  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value ?? "";
  const ok = token ? await isValidToken(token, env.user, env.pass) : false;
  return NextResponse.json({ ok });
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, "", { maxAge: 0, path: "/" });
  return res;
}
