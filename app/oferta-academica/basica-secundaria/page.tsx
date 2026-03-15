import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Básica Secundaria | Oferta Académica - IE Sierra Nevada",
  description: "Educación Básica Secundaria en la IE Sierra Nevada.",
};

export default function BasicaSecundariaPage() {
  return (
    <PageSection
      title="Básica Secundaria"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Oferta Académica", href: "/oferta-academica/prejardin" },
        { label: "Básica Secundaria" },
      ]}
    >
      <p>
        La Educación Básica Secundaria en la Institución Etnoeducativa Sierra Nevada comprende los
        grados sexto a noveno. Profundiza las áreas del conocimiento y promueve el pensamiento
        crítico y la participación, en diálogo con el enfoque etnoeducativo.
      </p>
      <h2>Enfoque del nivel</h2>
      <p>
        Se mantiene la integración de los saberes tradicionales y el territorio en el currículo,
        junto con proyectos pedagógicos y de bienestar que favorecen la permanencia y el
        desarrollo integral de los y las adolescentes de las comunidades rurales.
      </p>
      <h2>Cobertura</h2>
      <p>
        Básica Secundaria se ofrece en las sedes que cuentan con este nivel. Consulte el Mapa de
        sedes o contacte a la institución para información de matrícula y sedes.
      </p>
    </PageSection>
  );
}
