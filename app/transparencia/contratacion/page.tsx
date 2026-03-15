import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Contratación | Transparencia - IE Sierra Nevada",
  description: "Información de contratación de la IE Sierra Nevada.",
};

export default function ContratacionPage() {
  return (
    <PageSection
      title="Contratación"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Transparencia", href: "/transparencia/contratacion" },
        { label: "Contratación" },
      ]}
    >
      <p>
        En esta sección la Institución Etnoeducativa Sierra Nevada pone a disposición de la
        ciudadanía la información relacionada con los procesos de contratación que adelanta,
        en cumplimiento de los principios de transparencia y acceso a la información pública.
      </p>
      <h2>Procesos de contratación</h2>
      <p>
        Los procesos de contratación se rigen por la normativa vigente aplicable a las
        instituciones educativas oficiales del distrito de Riohacha. La información sobre
        convocatorias, pliegos y resultados se publica según los plazos y canales establecidos.
      </p>
      <h2>Consulta</h2>
      <p>
        Para consultar convocatorias abiertas, resultados de procesos o documentación asociada,
        puede dirigirse a la sede principal o revisar los documentos publicados en la sección
        Documentos institucionales cuando corresponda.
      </p>
    </PageSection>
  );
}
