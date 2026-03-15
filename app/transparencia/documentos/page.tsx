import PageSection from "@/components/PageSection";
import Link from "next/link";
import { INSTITUCION } from "@/lib/institucion";

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
        <li><strong>Modificada:</strong> {INSTITUCION.modificada}</li>
      </ul>
      <h2>Documentos de referencia</h2>
      <ul>
        <li>Proyecto Educativo Comunitario (PEC) — <Link href="/gestion-institucional/pec" className="text-institucional-azul hover:underline">Ver resumen</Link></li>
        <li>Manual de convivencia</li>
        <li>Calendario escolar vigente — <Link href="/noticias-eventos/calendario" className="text-institucional-azul hover:underline">Ver información</Link></li>
        <li>Informes de gestión</li>
        <li>Documentos de contratación (cuando aplique)</li>
      </ul>
      <p>
        Los documentos se irán publicando según la disponibilidad y la normativa. Para solicitar
        un documento específico puede contactar a la institución a través del{" "}
        <Link href="/contacto/formulario" className="text-institucional-azul hover:underline">formulario</Link> o los
        teléfonos indicados en la sección <Link href="/contacto/telefonos" className="text-institucional-azul hover:underline">Contacto</Link>.
      </p>
    </PageSection>
  );
}
