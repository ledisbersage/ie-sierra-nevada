import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Consejo Directivo | Gestión Institucional - IE Sierra Nevada",
  description: "Consejo Directivo de la IE Sierra Nevada.",
};

export default function ConsejoDirectivoPage() {
  return (
    <PageSection
      title="Consejo Directivo"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Gestión Institucional", href: "/gestion-institucional/pec" },
        { label: "Consejo Directivo" },
      ]}
    >
      <p>
        El Consejo Directivo es la instancia de gobierno escolar que participa en la orientación
        pedagógica y administrativa de la Institución Etnoeducativa Sierra Nevada, según lo
        establecido en la ley y el reglamento interno.
      </p>
      <h2>Composición y funciones</h2>
      <p>
        Está integrado por el rector o rectora, representantes de los docentes, de los padres de
        familia, de los estudiantes, del sector productivo y de los exalumnos, cuando corresponda.
        Entre sus funciones están aprobar el plan anual, el presupuesto y las decisiones que la
        normativa le asigna.
      </p>
      <h2>Información actualizada</h2>
      <p>
        La composición y las actas del Consejo Directivo se rigen por la normativa vigente. Para
        consultas sobre integrantes o temas tratados puede dirigirse a la sede principal o a los
        canales oficiales de la institución.
      </p>
    </PageSection>
  );
}
