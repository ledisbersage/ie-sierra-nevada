import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createToken, getAuthConfig, isValidToken, COOKIE_NAME, MAX_AGE_SECONDS } from "@/lib/auth";

export const runtime = "edge";

export async function POST(req: Request) {
  const { user, pass } = await req.json();
  const { user: expectedUser, pass: expectedPass } = getAuthConfig();

  if (user !== expectedUser || pass !== expectedPass) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const token = await createToken(expectedUser, expectedPass);
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
  const { user: expectedUser, pass: expectedPass } = getAuthConfig();
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value ?? "";
  const ok = token ? await isValidToken(token, expectedUser, expectedPass) : false;
  return NextResponse.json({ ok });
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, "", { maxAge: 0, path: "/" });
  return res;
}
