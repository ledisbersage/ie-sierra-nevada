import PageSection from "@/components/PageSection";
import Link from "next/link";

export const metadata = {
  title: "Noticias | Noticias y Eventos - IE Sierra Nevada",
  description: "Noticias de la Institución Etnoeducativa Sierra Nevada.",
};

export default function NoticiasPage() {
  return (
    <PageSection
      title="Noticias"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Noticias y Eventos", href: "/noticias-eventos/noticias" },
        { label: "Noticias" },
      ]}
    >
      <p>
        En esta sección se publican las noticias relevantes de la Institución Etnoeducativa Sierra
        Nevada: logros, actividades, convocatorias y comunicados dirigidos a la comunidad
        educativa y al público en general.
      </p>
      <h2>Convocatorias</h2>
      <ul>
        <li>
          <Link href="/noticias-eventos/convocatoria-docentes" className="text-institucional-azul hover:underline">
            Convocatoria a elecciones del representante de los docentes al Consejo Directivo (10 de marzo de 2026)
          </Link>
        </li>
        <li>
          <Link href="/convocatorias/docentes" className="text-institucional-azul hover:underline">
            Formulario de inscripción para docentes aspirantes
          </Link>
        </li>
      </ul>
      <h2>Próximamente</h2>
      <p>
        Las noticias se irán publicando según la disponibilidad del equipo institucional. Se
        recomienda visitar esta página con periodicidad o contactar a la institución para
        recibir información por los canales oficiales.
      </p>
      <p>
        Para eventos y fechas importantes consulte la sección <strong>Actividades</strong> y el{" "}
        <strong>Calendario escolar</strong> en el menú de Noticias y Eventos.
      </p>
    </PageSection>
  );
}
