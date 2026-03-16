"use client";

import PageSection from "@/components/PageSection";
import Link from "next/link";
import { useState } from "react";

export default function ConvocatoriaDocentesFormPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError(null);
    setSent(null);
    const form = event.currentTarget;
    try {
      const res = await fetch("/api/convocatoria-docentes", {
        method: "POST",
        body: new FormData(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error("No se pudo registrar la inscripción.");
      }
      setSent("Inscripción registrada correctamente.");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error al enviar.");
    } finally {
      setSending(false);
    }
  }

  return (
    <PageSection
      title="Inscripción de Candidatos"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Convocatorias", href: "/noticias-eventos/noticias" },
        { label: "Inscripción Docentes" },
      ]}
    >
      <p className="text-sm text-stone-500">
        ELECCIÓN DE LOS REPRESENTANTES DE LOS DOCENTES AL CONSEJO DIRECTIVO — Año lectivo 2026
      </p>
      <div className="mt-6">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-stone-700">Nombres y apellidos del aspirante</label>
              <input name="nombres" required className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-medium text-stone-700">Tipo de documento</label>
              <select name="tipoDocumento" required className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2">
                <option value="">Seleccione</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="TI">Tarjeta de identidad</option>
                <option value="PA">Pasaporte</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-stone-700">Número de documento</label>
              <input name="cedula" required className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-medium text-stone-700">Expedida en</label>
              <input name="expedida" required className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-medium text-stone-700">Cargo que desempeña</label>
              <input name="cargo" required className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-medium text-stone-700">Área o asignatura</label>
              <input name="area" required className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-medium text-stone-700">Sede</label>
              <input name="sede" required className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-medium text-stone-700">Tiempo de servicio</label>
              <input
                name="tiempoServicio"
                required
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-stone-700">Correo electrónico</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-stone-700">Teléfono de contacto</label>
              <input name="telefono" required className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-stone-700">Propuesta o plan de trabajo</label>
            <textarea
              name="propuesta"
              rows={6}
              required
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
            />
          </div>

          <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
            <p className="text-sm font-semibold text-stone-700 mb-3">Declaración del candidato</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-stone-700">Nombre</label>
                <input
                  name="declaracionNombre"
                  required
                  className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-stone-700">Documento de identidad No.</label>
                <input
                  name="declaracionDocumento"
                  required
                  className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
                />
              </div>
            </div>
            <p className="text-sm text-stone-600 mt-3">
              Declaro que cumplo los requisitos del Gobierno Escolar, me comprometo a representar de manera
              responsable al cuerpo docente y manifiesto ausencia de inhabilidades o conflicto de intereses.
            </p>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-4">
            <p className="text-sm font-semibold text-stone-700 mb-3">Anexos obligatorios (PDF)</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-stone-700">Fotocopia de cédula ampliada (PDF)</label>
                <input name="anexoCedula" type="file" accept="application/pdf" required className="mt-1 w-full" />
              </div>
              <div>
                <label className="text-sm font-medium text-stone-700">Certificado de docente (PDF)</label>
                <input name="anexoCertificadoDocente" type="file" accept="application/pdf" required className="mt-1 w-full" />
              </div>
              <div>
                <label className="text-sm font-medium text-stone-700">Antecedentes judiciales (PDF)</label>
                <input name="anexoJudiciales" type="file" accept="application/pdf" required className="mt-1 w-full" />
              </div>
              <div>
                <label className="text-sm font-medium text-stone-700">Antecedentes fiscales (PDF)</label>
                <input name="anexoFiscales" type="file" accept="application/pdf" required className="mt-1 w-full" />
              </div>
              <div>
                <label className="text-sm font-medium text-stone-700">Antecedentes disciplinarios (PDF)</label>
                <input name="anexoDisciplinarios" type="file" accept="application/pdf" required className="mt-1 w-full" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="px-5 py-2.5 rounded-lg bg-institucional-azul text-white font-semibold hover:bg-institucional-azulClaro transition disabled:opacity-60"
          >
            {sending ? "Enviando..." : "Enviar inscripción"}
          </button>
          {sent && <p className="text-sm text-institucional-verde font-medium">{sent}</p>}
          {error && <p className="text-sm text-red-600">{error}</p>}
          <p className="text-sm text-stone-500">
            ¿Ya te inscribiste? Consulta el estado en{" "}
            <Link className="text-institucional-azul hover:underline" href="/convocatorias/docentes/consulta">
              Consulta de inscripción
            </Link>
            .
          </p>
        </form>
      </div>
    </PageSection>
  );
}
