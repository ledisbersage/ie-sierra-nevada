import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Gobierno escolar | Gestión Institucional - IE Sierra Nevada",
  description: "Gobierno escolar de la IE Sierra Nevada.",
};

export default function GobiernoEscolarPage() {
  return (
    <PageSection
      title="Gobierno escolar"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Gestión Institucional", href: "/gestion-institucional/pec" },
        { label: "Gobierno escolar" },
      ]}
    >
      <p>
        El gobierno escolar de la Institución Etnoeducativa Sierra Nevada es el conjunto de
        instancias de participación que, según la ley, permiten a la comunidad educativa tomar
        parte en las decisiones que afectan la vida institucional.
      </p>
      <h2>Instancias</h2>
      <p>
        Entre las instancias del gobierno escolar se encuentran el Consejo Directivo, el Consejo
        Académico, el personero o personera estudiantil, el consejo de estudiantes y el comité
        de convivencia, entre otras que defina la normativa y el manual de convivencia.
      </p>
      <h2>Participación</h2>
      <p>
        Estudiantes, padres de familia, docentes y directivos participan en estas instancias según
        lo establecido. Para más detalle sobre el Consejo Directivo y el Consejo Académico puede
        consultar las secciones correspondientes en esta misma web.
      </p>
    </PageSection>
  );
}
