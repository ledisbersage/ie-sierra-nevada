import PageSection from "@/components/PageSection";
import Link from "next/link";
import { RECTOR, INSTITUCION } from "@/lib/institucion";

export const metadata = {
  title: "Equipo Directivo | La Institución - IE Sierra Nevada",
  description: "Equipo directivo de la Institución Etnoeducativa Sierra Nevada.",
};

export default function EquipoDirectivoPage() {
  return (
    <PageSection
      title="Equipo Directivo"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "La Institución", href: "/la-institucion/historia" },
        { label: "Equipo Directivo" },
      ]}
    >
      <p>
        El equipo directivo de la {INSTITUCION.nombre} lidera la gestión académica, administrativa y comunitaria, en
        coordinación con las sedes y con la comunidad educativa, en el marco del Proyecto Educativo Comunitario (PEC).
      </p>
      <h2>Representante legal</h2>
      <p>
        <strong>{RECTOR.nombre}</strong><br />
        {RECTOR.cargo}<br />
        Teléfono: <a href={`tel:${RECTOR.telefono.replace(/-/g, "")}`} className="text-institucional-azul hover:underline">{RECTOR.telefono}</a>
      </p>
      <p>
        La institución está bajo la supervisión de la {INSTITUCION.secretariaEducacion}.
      </p>
      <h2>Canales de comunicación</h2>
      <p>
        Para temas que requieran la atención del equipo directivo, utilice el{" "}
        <Link href="/contacto/formulario" className="text-institucional-azul hover:underline">formulario de contacto</Link> o
        los teléfonos indicados en la sección <Link href="/contacto/telefonos" className="text-institucional-azul hover:underline">Contacto</Link>.
      </p>
    </PageSection>
  );
}
