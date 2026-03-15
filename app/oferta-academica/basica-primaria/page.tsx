import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Básica Primaria | Oferta Académica - IE Sierra Nevada",
  description: "Educación Básica Primaria en la IE Sierra Nevada.",
};

export default function BasicaPrimariaPage() {
  return (
    <PageSection
      title="Básica Primaria"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Oferta Académica", href: "/oferta-academica/prejardin" },
        { label: "Básica Primaria" },
      ]}
    >
      <p>
        La Educación Básica Primaria en la Institución Etnoeducativa Sierra Nevada comprende los
        grados primero a quinto. Se orienta al desarrollo de competencias básicas en las áreas
        establecidas por el Ministerio de Educación, integradas al enfoque etnoeducativo.
      </p>
      <h2>Enfoque del nivel</h2>
      <p>
        Además del currículo oficial, se fortalecen la identidad cultural, los saberes del
        territorio, el cuidado del ambiente y la convivencia. El trabajo con la comunidad y las
        familias es parte fundamental del proceso formativo.
      </p>
      <h2>Cobertura</h2>
      <p>
        Básica Primaria se ofrece en varias de las 13 sedes de la institución. Para conocer en qué
        sedes está disponible y los requisitos de matrícula, consulte Sedes Educativas o
        contacte a la institución.
      </p>
    </PageSection>
  );
}
