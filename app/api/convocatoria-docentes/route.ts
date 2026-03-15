import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { promises as fs } from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "convocatoria-docentes.json");
const COOKIE_NAME = "iesn_master";
const MAX_AGE_SECONDS = 60 * 60 * 4;

type Registro = {
  id: string;
  createdAt: string;
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

async function readData(): Promise<Registro[]> {
  try {
    const raw = await fs.readFile(DATA_PATH, "utf-8");
    return JSON.parse(raw) as Registro[];
  } catch {
    return [];
  }
}

async function writeData(data: Registro[]) {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}

function requireAuth() {
  const env = getEnv();
  if (!env.user || !env.pass) return false;
  const token = cookies().get(COOKIE_NAME)?.value ?? "";
  return token ? isValidToken(token, env.user, env.pass) : false;
}

export async function GET() {
  if (!requireAuth()) return NextResponse.json({ ok: false }, { status: 401 });
  const data = await readData();
  return NextResponse.json({ ok: true, data });
}

export async function POST(req: Request) {
  const body = await req.json();
  const data = await readData();
  const registro: Registro = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
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
  data.push(registro);
  await writeData(data);
  return NextResponse.json({ ok: true, id: registro.id });
}
