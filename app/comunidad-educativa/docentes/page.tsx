import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Docentes | Comunidad Educativa - IE Sierra Nevada",
  description: "Información para docentes de la IE Sierra Nevada.",
};

export default function DocentesPage() {
  return (
    <PageSection
      title="Docentes"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Comunidad Educativa", href: "/comunidad-educativa/estudiantes" },
        { label: "Docentes" },
      ]}
    >
      <p>
        Los y las docentes de la Institución Etnoeducativa Sierra Nevada, junto con los directivos
        docentes, lideran el quehacer pedagógico en las 11 sedes. Su labor se enmarca en el
        Proyecto Educativo Comunitario (PEC) y en el enfoque etnoeducativo.
      </p>
      <h2>Rol en la institución</h2>
      <p>
        Los docentes desarrollan la gestión académica, los proyectos pedagógicos y el acompañamiento
        a los estudiantes en articulación con las familias y los líderes comunitarios. La relación
        con el territorio y los saberes tradicionales es parte del quehacer en el aula y en la
        comunidad.
      </p>
      <h2>Espacios de participación</h2>
      <p>
        Los docentes participan en el Consejo Académico y en los demás espacios del gobierno
        escolar definidos por la normativa. La información interna se canaliza por los canales
        oficiales de la institución.
      </p>
    </PageSection>
  );
}
