import PageSection from "@/components/PageSection";
import Link from "next/link";

export const metadata = {
  title: "Convocatoria Docentes | Noticias y Eventos - IE Sierra Nevada",
  description:
    "Convocatoria a elecciones del representante de los docentes al Consejo Directivo de la IE Sierra Nevada.",
};

export default function ConvocatoriaDocentesPage() {
  return (
    <PageSection
      title="Convocatoria a Elecciones"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Noticias y Eventos", href: "/noticias-eventos/noticias" },
        { label: "Convocatoria Docentes" },
      ]}
    >
      <p className="text-sm text-stone-500">
        Convocatoria No. 001 — <strong>Fecha:</strong> 10 de marzo de 2026
      </p>
      <h2>Representante de los Docentes al Consejo Directivo</h2>
      <p>
        La Rectoría de la Institución Etnoeducativa Sierra Nevada, en cumplimiento de las disposiciones sobre
        Gobierno Escolar establecidas en la Ley 115 de 1994 y el Decreto 1860 de 1994, convoca a todos los docentes
        vinculados a la institución a participar en el proceso de elección del <strong>Representante de los Docentes
        al Consejo Directivo</strong>.
      </p>
      <h2>Requisitos para ser candidato</h2>
      <ul>
        <li>Ser docente vinculado a la institución.</li>
        <li>Fotocopia de la cédula de ciudadanía ampliada.</li>
        <li>Certificado de docente.</li>
        <li>Presentar el formato de inscripción como candidato dentro del plazo establecido.</li>
        <li>Certificado de antecedentes judiciales.</li>
        <li>Certificado de antecedentes fiscales.</li>
        <li>Certificado de antecedentes disciplinarios.</li>
      </ul>
      <div className="mt-6">
        <Link
          href="/convocatorias/docentes"
          className="inline-flex items-center gap-2 rounded-lg bg-institucional-azul px-4 py-2 text-white font-semibold hover:bg-institucional-azulClaro transition"
        >
          Ir al formulario de inscripción →
        </Link>
        <Link
          href="/convocatorias/docentes/consulta"
          className="ml-3 inline-flex items-center gap-2 rounded-lg border border-institucional-azul px-4 py-2 text-institucional-azul font-semibold hover:bg-institucional-azul/10 transition"
        >
          Consultar estado →
        </Link>
      </div>
      <p className="mt-6">
        <strong>Ledis Beatriz Sarmiento Guerra</strong>
        <br />
        C.C. 40.923.130 de Riohacha
        <br />
        Representante Legal — Institución Etnoeducativa Sierra Nevada
      </p>
    </PageSection>
  );
}
