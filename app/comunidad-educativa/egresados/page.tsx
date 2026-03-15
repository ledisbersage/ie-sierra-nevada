import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Egresados | Comunidad Educativa - IE Sierra Nevada",
  description: "Egresados de la Institución Etnoeducativa Sierra Nevada.",
};

export default function EgresadosPage() {
  return (
    <PageSection
      title="Egresados"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Comunidad Educativa", href: "/comunidad-educativa/estudiantes" },
        { label: "Egresados" },
      ]}
    >
      <p>
        Los y las egresados de la Institución Etnoeducativa Sierra Nevada forman parte de la
        comunidad educativa y son testimonio del trabajo realizado en las zonas rurales de la Sierra
        Nevada de Santa Marta, en el distrito de Riohacha, La Guajira.
      </p>
      <h2>Vínculo con la institución</h2>
      <p>
        La institución valora el vínculo con sus egresados como parte del desarrollo social del
        territorio. Los espacios de encuentro, las noticias y los eventos pueden incluir
        actividades que convocan a quienes han pasado por las aulas de la IE Sierra Nevada.
      </p>
      <h2>Documentación</h2>
      <p>
        Para solicitudes de certificados, constancias o documentación como egresado, puede dirigirse
        a la sede principal o utilizar los canales de contacto oficiales indicados en la sección
        Contacto.
      </p>
    </PageSection>
  );
}
