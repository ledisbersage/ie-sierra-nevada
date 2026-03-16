import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const COOKIE_NAME = "iesn_master";
const MAX_AGE_SECONDS = 60 * 60 * 4;
const API_BASE = process.env.API_BASE_URL ?? "https://wirelesslink.com.co/api/iesn";
const API_TOKEN = process.env.API_TOKEN ?? "";

export const runtime = "edge";

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

async function apiFetch(path: string, options: RequestInit = {}) {
  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string> | undefined),
  };
  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }
  if (API_TOKEN) {
    headers["Authorization"] = `Bearer ${API_TOKEN}`;
  }
  const res = await fetch(`${API_BASE}${path}`, { ...options, headers, cache: "no-store" });
  const data = await res.json().catch(() => ({}));
  return { res, data };
}

async function requireAuth() {
  const env = getEnv();
  if (!env.user || !env.pass) return false;
  const token = cookies().get(COOKIE_NAME)?.value ?? "";
  return token ? await isValidToken(token, env.user, env.pass) : false;
}

export async function GET() {
  if (!(await requireAuth())) return NextResponse.json({ ok: false }, { status: 401 });
  const { res, data } = await apiFetch("/convocatoria-docentes", { method: "GET" });
  return NextResponse.json({ ok: res.ok, data }, { status: res.status });
}

export async function POST(req: Request) {
  const form = await req.formData();
  const payload: Registro = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    tipoDocumento: String(form.get("tipoDocumento") ?? ""),
    nombres: String(form.get("nombres") ?? ""),
    cedula: String(form.get("cedula") ?? ""),
    expedida: String(form.get("expedida") ?? ""),
    cargo: String(form.get("cargo") ?? ""),
    area: String(form.get("area") ?? ""),
    sede: String(form.get("sede") ?? ""),
    tiempoServicio: String(form.get("tiempoServicio") ?? ""),
    email: String(form.get("email") ?? ""),
    telefono: String(form.get("telefono") ?? ""),
    propuesta: String(form.get("propuesta") ?? ""),
    declaracionNombre: String(form.get("declaracionNombre") ?? ""),
    declaracionDocumento: String(form.get("declaracionDocumento") ?? ""),
    estado: "pendiente",
  };

  const outbound = new FormData();
  Object.entries(payload).forEach(([key, value]) => outbound.append(key, value as string));

  const fileFields = [
    "anexoCedula",
    "anexoCertificadoDocente",
    "anexoJudiciales",
    "anexoFiscales",
    "anexoDisciplinarios",
  ];
  for (const field of fileFields) {
    const file = form.get(field);
    if (file instanceof File) {
      outbound.append(field, file, file.name);
    }
  }

  const { res, data } = await apiFetch("/convocatoria-docentes", {
    method: "POST",
    body: outbound,
    headers: API_TOKEN ? { Authorization: `Bearer ${API_TOKEN}` } : undefined,
  });
  return NextResponse.json({ ok: res.ok, data }, { status: res.status });
}
