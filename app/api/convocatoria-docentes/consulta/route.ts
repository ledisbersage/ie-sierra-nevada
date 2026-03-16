import { NextResponse } from "next/server";

const API_BASE = process.env.API_BASE_URL ?? "https://wirelesslink.com.co/api/iesn";
const API_TOKEN = process.env.API_TOKEN ?? "";

async function apiFetch(path: string) {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (API_TOKEN) headers["Authorization"] = `Bearer ${API_TOKEN}`;
  const res = await fetch(`${API_BASE}${path}`, { headers, cache: "no-store" });
  const data = await res.json().catch(() => ({}));
  return { res, data };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const docType = searchParams.get("docType") ?? "";
  const docNumber = searchParams.get("docNumber") ?? "";
  if (!docType || !docNumber) {
    return NextResponse.json({ ok: false, error: "MISSING_PARAMS" }, { status: 400 });
  }
  const { res, data } = await apiFetch(`/convocatoria-docentes/lookup?docType=${encodeURIComponent(docType)}&docNumber=${encodeURIComponent(docNumber)}`);
  return NextResponse.json({ ok: res.ok, data }, { status: res.status });
}
