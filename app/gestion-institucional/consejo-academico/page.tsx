import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Consejo Académico | Gestión Institucional - IE Sierra Nevada",
  description: "Consejo Académico de la IE Sierra Nevada.",
};

export default function ConsejoAcademicoPage() {
  return (
    <PageSection
      title="Consejo Académico"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Gestión Institucional", href: "/gestion-institucional/pec" },
        { label: "Consejo Académico" },
      ]}
    >
      <p>
        El Consejo Académico es la instancia que orienta la gestión académica de la Institución
        Etnoeducativa Sierra Nevada. Está integrado por los y las docentes y presidido por el
        rector o rectora.
      </p>
      <h2>Funciones</h2>
      <p>
        Entre sus funciones están estudiar el currículo y proponer su mejoramiento, organizar el
        plan de estudios, evaluar el rendimiento académico y promover la investigación y las
        innovaciones pedagógicas, en el marco del Proyecto Educativo Comunitario (PEC) y del
        enfoque etnoeducativo.
      </p>
      <h2>Articulación con las sedes</h2>
      <p>
        El Consejo Académico articula el trabajo pedagógico de las 11 sedes y vela por la
        coherencia entre el PEC, el currículo y las prácticas en el aula.
      </p>
    </PageSection>
  );
}
