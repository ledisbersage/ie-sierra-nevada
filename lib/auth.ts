import { cookies } from "next/headers";

export const COOKIE_NAME = "iesn_master";
export const MAX_AGE_SECONDS = 60 * 60 * 4; // 4 hours

export function getAuthConfig() {
  // Allow using env variables for production, but fall back to a demo account
  // for local development / visual demos.
  return {
    user: process.env.MASTER_USER?.trim() || "admin",
    pass: process.env.MASTER_PASSWORD?.trim() || "admin",
  };
}

export function constantTimeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export async function sha256Hex(input: string) {
  const data = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function signToken(user: string, ts: string, secret: string) {
  return sha256Hex(`${user}:${ts}:${secret}`);
}

export async function createToken(user: string, secret: string) {
  const ts = Date.now().toString();
  const sig = await signToken(user, ts, secret);
  return `${user}:${ts}:${sig}`;
}

export async function isValidToken(token: string, user: string, secret: string) {
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

export function getCookieToken() {
  const cookieStore = cookies();
  return cookieStore.get(COOKIE_NAME)?.value ?? "";
}

export async function isSessionValid() {
  const { user, pass } = getAuthConfig();
  const token = getCookieToken();
  return token ? isValidToken(token, user, pass) : false;
}
