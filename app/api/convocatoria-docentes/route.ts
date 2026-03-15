import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import crypto from "crypto";

const COOKIE_NAME = "iesn_master";
const MAX_AGE_SECONDS = 60 * 60 * 4;
const API_BASE = process.env.API_BASE_URL ?? "https://wirelesslink.com.co/api/iesn";
const API_TOKEN = process.env.API_TOKEN ?? "";

type Registro = {
  id: string;
  createdAt: string;
  tipoDocumento?: string;
  nombres: string;
  cedula: string;
  expedida: string;
  cargo: string;
  area: string;
  sede: string;
  tiempoServicio: string;
  email: string;
  telefono: string;
  propuesta: string;
  declaracionNombre: string;
  declaracionDocumento: string;
  observaciones?: {
    a?: boolean;
    b?: boolean;
    c?: boolean;
    d?: boolean;
    e?: boolean;
    f?: boolean;
  };
  observacionesTexto?: string;
  estado?: "pendiente" | "aprobado" | "rechazado";
  revisadoAt?: string;
  revisadoPor?: string;
};

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

async function apiFetch(path: string, options: RequestInit = {}) {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(options.headers ?? {}),
  };
  if (API_TOKEN) {
    headers.Authorization = `Bearer ${API_TOKEN}`;
  }
  const res = await fetch(`${API_BASE}${path}`, { ...options, headers, cache: "no-store" });
  const data = await res.json().catch(() => ({}));
  return { res, data };
}

function requireAuth() {
  const env = getEnv();
  if (!env.user || !env.pass) return false;
  const token = cookies().get(COOKIE_NAME)?.value ?? "";
  return token ? isValidToken(token, env.user, env.pass) : false;
}

export async function GET() {
  if (!requireAuth()) return NextResponse.json({ ok: false }, { status: 401 });
  const { res, data } = await apiFetch("/convocatoria-docentes", { method: "GET" });
  return NextResponse.json({ ok: res.ok, data }, { status: res.status });
}

export async function POST(req: Request) {
  const body = await req.json();
  const payload: Registro = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    tipoDocumento: body.tipoDocumento ?? "",
    nombres: body.nombres ?? "",
    cedula: body.cedula ?? "",
    expedida: body.expedida ?? "",
    cargo: body.cargo ?? "",
    area: body.area ?? "",
    sede: body.sede ?? "",
    tiempoServicio: body.tiempoServicio ?? "",
    email: body.email ?? "",
    telefono: body.telefono ?? "",
    propuesta: body.propuesta ?? "",
    declaracionNombre: body.declaracionNombre ?? "",
    declaracionDocumento: body.declaracionDocumento ?? "",
    estado: "pendiente",
  };
  const { res, data } = await apiFetch("/convocatoria-docentes", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return NextResponse.json({ ok: res.ok, data }, { status: res.status });
}
