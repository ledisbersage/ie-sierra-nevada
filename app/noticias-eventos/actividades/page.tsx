import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Actividades | Noticias y Eventos - IE Sierra Nevada",
  description: "Actividades de la IE Sierra Nevada.",
};

export default function ActividadesPage() {
  return (
    <PageSection
      title="Actividades"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Noticias y Eventos", href: "/noticias-eventos/noticias" },
        { label: "Actividades" },
      ]}
    >
      <p>
        La Institución Etnoeducativa Sierra Nevada desarrolla diversas actividades en sus sedes:
        actos cívicos, proyectos pedagógicos, encuentros comunitarios, celebraciones y eventos
        que involucran a estudiantes, familias, docentes y líderes.
      </p>
      <h2>Tipos de actividades</h2>
      <p>
        Se realizan actividades académicas, culturales, deportivas y de convivencia, en el marco
        del Proyecto Educativo Comunitario (PEC) y del enfoque etnoeducativo. Las fechas y
        detalles se comunican por los canales oficiales y pueden reflejarse en el calendario
        escolar.
      </p>
      <h2>Calendario</h2>
      <p>
        Para consultar las fechas del año escolar y los eventos programados, visite la sección{" "}
        <strong>Calendario escolar</strong> en Noticias y Eventos.
      </p>
    </PageSection>
  );
}
