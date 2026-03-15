"use client";

import PageSection from "@/components/PageSection";
import { useState } from "react";

export default function ConsultaDocentesPage() {
  const [docType, setDocType] = useState("");
  const [docNumber, setDocNumber] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    const res = await fetch(
      `/api/convocatoria-docentes/consulta?docType=${encodeURIComponent(docType)}&docNumber=${encodeURIComponent(
        docNumber
      )}`
    );
    const data = await res.json();
    if (!res.ok || !data.ok) {
      setError("No se encontró un registro con los datos ingresados.");
    } else {
      setResult(data.data);
    }
    setLoading(false);
  }

  return (
    <PageSection
      title="Consulta de inscripción"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Convocatorias", href: "/noticias-eventos/noticias" },
        { label: "Consulta" },
      ]}
    >
      <form onSubmit={onSubmit} className="max-w-xl space-y-4">
        <div>
          <label className="text-sm font-medium text-stone-700">Tipo de documento</label>
          <select
            value={docType}
            onChange={(e) => setDocType(e.target.value)}
            required
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
          >
            <option value="">Seleccione</option>
            <option value="CC">Cédula de ciudadanía</option>
            <option value="CE">Cédula de extranjería</option>
            <option value="TI">Tarjeta de identidad</option>
            <option value="PA">Pasaporte</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-stone-700">Número de documento</label>
          <input
            value={docNumber}
            onChange={(e) => setDocNumber(e.target.value)}
            required
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2.5 rounded-lg bg-institucional-azul text-white font-semibold hover:bg-institucional-azulClaro transition disabled:opacity-60"
        >
          {loading ? "Consultando..." : "Consultar estado"}
        </button>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </form>

      {result && (
        <div className="mt-6 rounded-xl border border-stone-200 bg-white p-4 shadow-sm max-w-xl">
          <p className="text-sm text-stone-500">Estado actual</p>
          <p className="text-lg font-semibold text-institucional-azul capitalize">{result.estado ?? "pendiente"}</p>
          <p className="text-sm text-stone-600 mt-2">
            Última revisión: {result.revisadoAt ? new Date(result.revisadoAt).toLocaleString("es-CO") : "Sin revisar"}
          </p>
          {result.observacionesTexto && (
            <p className="text-sm text-stone-700 mt-3">Observaciones: {result.observacionesTexto}</p>
          )}
        </div>
      )}
    </PageSection>
  );
}
