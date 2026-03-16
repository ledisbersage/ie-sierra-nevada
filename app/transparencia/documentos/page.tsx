import PageSection from "@/components/PageSection";
import Link from "next/link";
import { INSTITUCION } from "@/lib/institucion";
import { documentosInstitucionales } from "@/data/documentos";

export const metadata = {
  title: "Documentos institucionales | Transparencia - IE Sierra Nevada",
  description: "Documentos institucionales de la IE Sierra Nevada.",
};

export default function DocumentosPage() {
  return (
    <PageSection
      title="Documentos institucionales"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Transparencia", href: "/transparencia/contratacion" },
        { label: "Documentos institucionales" },
      ]}
    >
      <p>
        En esta sección se publican o se referencian los documentos institucionales de la {INSTITUCION.nombre}:
        Proyecto Educativo Comunitario (PEC), manual de convivencia, calendario escolar, informes y otros,
        en el marco de la transparencia.
      </p>
      <h2>Datos del establecimiento</h2>
      <ul>
        <li><strong>Código DANE:</strong> {INSTITUCION.codigoDane}</li>
        <li><strong>NIT:</strong> {INSTITUCION.nit}</li>
        <li><strong>Creada:</strong> {INSTITUCION.creada}</li>
      </ul>
      <h2>Documentos de referencia</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {documentosInstitucionales.map((doc) => (
          <div key={doc.id} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-stone-500">{doc.categoria}</p>
            <h3 className="font-semibold text-institucional-azul mt-1">{doc.titulo}</h3>
            <p className="text-sm text-stone-600 mt-2">{doc.descripcion}</p>
            <Link href={doc.archivo} className="inline-flex mt-3 text-sm font-semibold text-institucional-azul hover:underline">
              Descargar documento →
            </Link>
          </div>
        ))}
      </div>
      <p className="text-sm text-stone-500 mt-4">
        Suba los archivos PDF en la carpeta `public/documentos` con los nombres indicados en el listado.
      </p>
      <p>
        Los documentos se irán publicando según la disponibilidad y la normativa. Para solicitar
        un documento específico puede contactar a la institución a través del{" "}
        <Link href="/contacto/formulario" className="text-institucional-azul hover:underline">formulario</Link> o los
        teléfonos indicados en la sección <Link href="/contacto/telefonos" className="text-institucional-azul hover:underline">Contacto</Link>.
      </p>
    </PageSection>
  );
}
