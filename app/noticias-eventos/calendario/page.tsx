import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Calendario escolar | Noticias y Eventos - IE Sierra Nevada",
  description: "Calendario escolar de la IE Sierra Nevada.",
};

export default function CalendarioPage() {
  return (
    <PageSection
      title="Calendario escolar"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Noticias y Eventos", href: "/noticias-eventos/noticias" },
        { label: "Calendario escolar" },
      ]}
    >
      <p>
        El calendario escolar de la Institución Etnoeducativa Sierra Nevada define las fechas de
        inicio y fin del año lectivo, períodos académicos, recesos, días festivos y eventos
        institucionales, según lo establecido por la Secretaría de Educación y la normativa
        vigente.
      </p>
      <h2>Consulta del calendario</h2>
      <p>
        El calendario oficial se publica al inicio de cada año escolar. Para conocer las fechas
        actuales puede solicitarlo en la sede principal, consultar los documentos institucionales
        en la sección Transparencia o contactar a la institución por los canales oficiales.
      </p>
      <p>
        Las fechas de matrícula, entrega de informes y actividades especiales se comunican además
        por los medios que la institución disponga para la comunidad educativa.
      </p>
    </PageSection>
  );
}
