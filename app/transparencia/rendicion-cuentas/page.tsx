import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Rendición de cuentas | Transparencia - IE Sierra Nevada",
  description: "Rendición de cuentas de la IE Sierra Nevada.",
};

export default function RendicionCuentasPage() {
  return (
    <PageSection
      title="Rendición de cuentas"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Transparencia", href: "/transparencia/contratacion" },
        { label: "Rendición de cuentas" },
      ]}
    >
      <p>
        La rendición de cuentas es el mecanismo mediante el cual la Institución Etnoeducativa
        Sierra Nevada informa a la comunidad educativa y a la ciudadanía sobre el uso de los
        recursos, el cumplimiento de objetivos y las decisiones de gestión.
      </p>
      <h2>Compromiso con la transparencia</h2>
      <p>
        La institución se compromete con la transparencia en la gestión académica, administrativa
        y comunitaria. Los informes, las memorias y los documentos que den cuenta de la gestión
        se publican o se ponen a disposición según lo establecido por la normativa.
      </p>
      <h2>Canales</h2>
      <p>
        La información de rendición de cuentas puede encontrarse en esta web (secciones Informes
        y Documentos institucionales), en las sedes o a través de los canales oficiales de
        contacto.
      </p>
    </PageSection>
  );
}
