import PageSection from "@/components/PageSection";
import Link from "next/link";
import Image from "next/image";

const NOTICIAS_EXTERNAS = [
  {
    title: "Colegios de La Guajira dejan de ser invisibles tras geolocalizacion",
    excerpt:
      "Estrategia de geolocalizacion identifico 993 sedes educativas en La Guajira para orientar la gestion territorial.",
    href: "https://www.mineducacion.gov.co/portal/salaprensa/Comunicados/427630:Colegios-de-La-Guajira-dejan-de-ser-invisibles-tras-estrategia-de-geolocalizacion-que-identifico-993-sedes-educativas",
    image: "/fotos/IMG-20231123-WA0034.jpg",
  },
  {
    title: "Inversion nacional en infraestructura para educacion superior publica",
    excerpt:
      "Anuncio de inversion para fortalecer infraestructura de instituciones de educacion superior publica.",
    href: "https://www.mineducacion.gov.co/portal/salaprensa/Comunicados/427632:Gobierno-del-cambio-invertira-566-mil-millones-en-infraestructura-para-la-educacion-superior-publica",
    image: "/fotos/IMG_20240319_124229.jpg",
  },
  {
    title: "Jovenes estudiantes impulsan propuestas para la educacion superior",
    excerpt:
      "Participacion estudiantil en la construccion de politica publica para educacion superior.",
    href: "https://www.mineducacion.gov.co/portal/salaprensa/Comunicados/427625:Jovenes-estudiantes-impulsan-propuestas-de-politica-publica-para-la-educacion-superior",
    image: "/fotos/IMG-20231120-WA0043.jpg",
  },
] as const;


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
      <h2>Noticias nacionales y locales</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {NOTICIAS_EXTERNAS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-stone-200 bg-white p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="relative h-40 rounded-xl overflow-hidden mb-3">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <h3 className="font-semibold text-institucional-azul group-hover:underline">{item.title}</h3>
            <p className="text-sm text-stone-600 mt-2">{item.excerpt}</p>
            <span className="inline-flex mt-3 text-sm font-semibold text-institucional-azul">Ver noticia</span>
          </Link>
        ))}
      </div>
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
