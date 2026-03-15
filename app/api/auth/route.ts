import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import crypto from "crypto";

const COOKIE_NAME = "iesn_master";
const MAX_AGE_SECONDS = 60 * 60 * 4; // 4 hours

function getEnv() {
  return {
    user: process.env.MASTER_USER ?? "",
    pass: process.env.MASTER_PASSWORD ?? "",
  };
}

function signToken(user: string, ts: string, secret: string) {
  return crypto.createHash("sha256").update(`${user}:${ts}:${secret}`).digest("hex");
}

function isValidToken(token: string, user: string, secret: string) {
  const parts = token.split(":");
  if (parts.length !== 3) return false;
  const [tUser, ts, sig] = parts;
  if (!tUser || !ts || !sig) return false;
  if (tUser !== user) return false;
  const expected = signToken(tUser, ts, secret);
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;
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
  const token = `${env.user}:${ts}:${signToken(env.user, ts, env.pass)}`;
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

  const token = cookies().get(COOKIE_NAME)?.value ?? "";
  const ok = token ? isValidToken(token, env.user, env.pass) : false;
  return NextResponse.json({ ok });
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, "", { maxAge: 0, path: "/" });
  return res;
}
