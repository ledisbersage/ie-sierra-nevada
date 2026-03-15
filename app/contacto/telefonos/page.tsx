import PageSection from "@/components/PageSection";
import { RECTOR, INSTITUCION } from "@/lib/institucion";

export const metadata = {
  title: "Teléfonos | Contacto - IE Sierra Nevada",
  description: "Teléfonos de contacto de la IE Sierra Nevada.",
};

export default function TelefonosPage() {
  return (
    <PageSection
      title="Teléfonos"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Contacto", href: "/contacto/ubicacion" },
        { label: "Teléfonos" },
      ]}
    >
      <p>
        A continuación se indican los canales de contacto telefónico de la {INSTITUCION.nombre}. Se recomienda utilizar
        estos números en horario institucional para consultas sobre matrícula, sedes, documentación y temas generales.
      </p>
      <h2>Contacto institucional</h2>
      <p>
        <strong>Representante legal (Rectora)</strong><br />
        {RECTOR.nombre}<br />
        Teléfono celular: <a href={`tel:${RECTOR.telefono.replace(/-/g, "")}`} className="text-institucional-azul hover:underline font-medium">{RECTOR.telefono}</a>
      </p>
      <p>
        La institución está ubicada en los corregimientos de Juan y Medio y Las Palmas. Las sedes pueden contar con
        canales adicionales; para consultas específicas por sede puede utilizar el{" "}
        <a href="/contacto/formulario" className="text-institucional-azul hover:underline">formulario de contacto</a>.
      </p>
    </PageSection>
  );
}
