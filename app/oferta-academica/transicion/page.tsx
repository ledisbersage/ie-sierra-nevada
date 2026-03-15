import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Transición | Oferta Académica - IE Sierra Nevada",
  description: "Grado Transición en la IE Sierra Nevada.",
};

export default function TransicionPage() {
  return (
    <PageSection
      title="Transición"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Oferta Académica", href: "/oferta-academica/prejardin" },
        { label: "Transición" },
      ]}
    >
      <p>
        El grado Transición en la Institución Etnoeducativa Sierra Nevada cierra el ciclo de
        educación inicial y prepara a los niños y niñas para el ingreso a Básica Primaria, en un
        ambiente que valora la cultura y el territorio.
      </p>
      <h2>Enfoque del nivel</h2>
      <p>
        Se desarrollan las competencias propias del grado según el referente curricular, con
        énfasis en el enfoque etnoeducativo: identidad, saberes tradicionales, trabajo en equipo y
        relación con el entorno. La transición hacia la primaria se hace de forma gradual y
        acompañada.
      </p>
      <h2>Cobertura</h2>
      <p>
        Transición se ofrece en las sedes que cuentan con este grado. Consulte Sedes Educativas o
        contacte a la institución para información de matrícula y sedes.
      </p>
    </PageSection>
  );
}
