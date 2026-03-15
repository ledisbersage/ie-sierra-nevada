import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Estudiantes | Comunidad Educativa - IE Sierra Nevada",
  description: "Información para estudiantes de la IE Sierra Nevada.",
};

export default function EstudiantesPage() {
  return (
    <PageSection
      title="Estudiantes"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Comunidad Educativa", href: "/comunidad-educativa/estudiantes" },
        { label: "Estudiantes" },
      ]}
    >
      <p>
        Los y las estudiantes son el centro de la acción educativa de la Institución Etnoeducativa
        Sierra Nevada. Provienen en su mayoría de comunidades rurales de las estribaciones de la
        Sierra Nevada de Santa Marta, en el distrito de Riohacha, La Guajira.
      </p>
      <h2>Formación integral</h2>
      <p>
        La institución promueve una formación integral que combina el currículo oficial con el
        enfoque etnoeducativo: identidad cultural, saberes tradicionales, relación con el
        territorio y respeto por la diversidad. Además se desarrollan programas de bienestar
        estudiantil y proyectos pedagógicos que favorecen la permanencia y la calidad.
      </p>
      <h2>Participación</h2>
      <p>
        Los estudiantes participan en el gobierno escolar y en las actividades que define la
        institución (actos cívicos, proyectos, eventos). Para información sobre calendario,
        actividades y documentos de interés, consulte Noticias y Eventos y Gestión Institucional.
      </p>
    </PageSection>
  );
}
