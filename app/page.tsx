import Link from "next/link";
import Image from "next/image";
import HeroLogo from "@/components/HeroLogo";
import { INSTITUCION } from "@/lib/institucion";
import { sedesCount } from "@/data/sedes";
import NewsSlider from "@/components/NewsSlider";

const DESTACADOS = [
  {
    title: "Gestión educativa",
    desc: "Seguimiento al aprendizaje, bienestar estudiantil y participación familiar.",
    href: "/noticias-eventos/noticias",
    image: "/demo-slide-2.svg",
  },
  {
    title: "Proyecto pedagógico",
    desc: "Aulas vivas, lectura, arte y desarrollo de habilidades socioemocionales.",
    href: "/oferta-academica/prejardin",
    image: "/demo-slide-3.svg",
  },
  {
    title: "Comunidad activa",
    desc: "Encuentros culturales, trabajo comunitario y liderazgo juvenil.",
    href: "/sedes-educativas/mapa",
    image: "/demo-slide-1.svg",
  },
] as const;

const GALERIA = ["/demo-slide-1.svg", "/demo-slide-2.svg", "/demo-slide-3.svg", "/demo-slide-2.svg"] as const;

const NOTICIAS = [
  {
    title: "Jornada de lectura y escritura en las sedes rurales",
    excerpt:
      "Espacios de lectura en aula y biblioteca para fortalecer comprensión, creatividad y pensamiento crítico.",
    href: "/noticias-eventos/noticias",
    image: "/demo-slide-1.svg",
  },
  {
    title: "Bienestar escolar y ambientes protectores",
    excerpt:
      "Estrategias de convivencia, salud mental y prevención de riesgos con participación de familias y docentes.",
    href: "/noticias-eventos/noticias",
    image: "/demo-slide-2.svg",
  },
  {
    title: "Fortalecimiento de la educación rural",
    excerpt:
      "Acciones para mejorar permanencia, recursos pedagógicos y participación comunitaria en las sedes.",
    href: "/noticias-eventos/noticias",
    image: "/demo-slide-3.svg",
  },
] as const;

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <Image src="/demo-slide-1.svg" alt="Banner institucional" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-institucional-azul/95 via-institucional-azul/70 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.35),_transparent_55%)]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-10 md:py-16">
          <div className="grid lg:grid-cols-[1.2fr,360px] gap-8 items-start">
            <div className="space-y-6 animate-fade-up">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                <HeroLogo />
                <div>
                  <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2 text-institucional-amarilloClaro">
                    {INSTITUCION.nombre}
                  </h1>
                  <p className="text-lg text-white/90 mb-1">{INSTITUCION.modelo}</p>
                  <p className="text-white/80">{INSTITUCION.ubicacion}</p>
                </div>
              </div>

              <p className="text-white/85 max-w-xl">
                Educación con identidad cultural, territorio y comunidad. Formamos estudiantes con
                liderazgo, cuidado del entorno y proyección social.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Inscripciones 2026", "Sedes rurales", "Programas culturales"].map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs uppercase tracking-wide"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/la-institucion/historia"
                  className="px-5 py-2.5 bg-institucional-amarillo text-institucional-oscuro font-semibold rounded-lg hover:bg-institucional-amarilloClaro transition"
                >
                  Conocer la institución
                </Link>
                <Link
                  href="/oferta-academica/prejardin"
                  className="px-5 py-2.5 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 transition"
                >
                  Oferta académica
                </Link>
              </div>

              <div className="glass-card rounded-2xl p-4 md:p-5 text-institucional-oscuro animate-fade-right">
                <p className="text-sm text-stone-600 mb-2">Buscar en la institución</p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Noticias, sedes, procesos..."
                    className="flex-1 px-3 py-2 rounded-lg border border-stone-200 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-institucional-azulClaro/50"
                  />
                  <button className="px-4 py-2 rounded-lg bg-institucional-verde text-white text-sm font-medium hover:bg-institucional-verdeClaro transition">
                    Buscar
                  </button>
                </div>
              </div>
            </div>

            <aside className="space-y-4 animate-fade-left">
              <NewsSlider items={NOTICIAS} />
              <div className="glass-card rounded-2xl p-4">
                <p className="font-semibold text-institucional-azul text-sm mb-1">
                  ¿Eres estudiante nuevo?
                </p>
                <p className="text-stone-600 text-sm mb-3">
                  Bienvenidos a la IE Sierra Nevada. Consulta oferta académica, sedes y matrícula.
                </p>
                <Link
                  href="/oferta-academica/prejardin"
                  className="inline-block text-institucional-azul font-semibold text-sm hover:underline"
                >
                  Oferta académica →
                </Link>
              </div>
              <div className="glass-card rounded-2xl p-4 border border-institucional-amarillo/30">
                <p className="text-xs uppercase tracking-wide text-institucional-verde font-semibold mb-2">
                  Convocatoria 2026
                </p>
                <p className="font-semibold text-institucional-azul text-sm mb-1">
                  Elecciones del representante de los docentes
                </p>
                <p className="text-stone-600 text-sm mb-3">
                  Consulta requisitos, fecha y el proceso de inscripción para el Consejo Directivo.
                </p>
                <Link
                  href="/noticias-eventos/convocatoria-docentes"
                  className="inline-flex items-center gap-2 text-institucional-azul font-semibold text-sm hover:underline"
                >
                  Ver convocatoria →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between gap-6 mb-8">
          <div>
            <p className="text-sm uppercase tracking-wide text-institucional-verde font-semibold">
              Destacados
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-institucional-azul">
              Una institución viva, visible y conectada
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            {["Transparencia", "Participa", "Atención al ciudadano"].map((label) => (
              <span
                key={label}
                className="px-3 py-1 rounded-full border border-stone-200 text-xs text-stone-600"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {DESTACADOS.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl overflow-hidden bg-white shadow-lg border border-stone-200 hover:shadow-2xl transition animate-fade-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative h-44">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-semibold text-institucional-azul">{item.title}</h3>
                <p className="text-sm text-stone-600">{item.desc}</p>
                <span className="text-sm font-semibold text-institucional-verde group-hover:underline">
                  Explorar →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-stone-50 to-institucional-cielo/20 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
          <div className="space-y-6 animate-fade-right">
            <div>
              <p className="text-sm uppercase tracking-wide text-institucional-azul font-semibold">
                Enfoque etnoeducativo
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-institucional-azul mb-3">
                Saberes tradicionales y educación integral
              </h2>
              <p className="text-stone-600">
                Integramos identidad cultural, lengua, territorio y comunidad para fortalecer el tejido
                social y la permanencia escolar.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Identidad cultural", desc: "Fortalecemos la identidad y los saberes comunitarios." },
                { title: "Territorio", desc: "Educación vinculada al entorno y al cuidado ambiental." },
                { title: "Diversidad", desc: "Respeto por la pluralidad étnica y cultural." },
                { title: "Proyección social", desc: "Participación comunitaria y liderazgo juvenil." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-institucional-azul mb-1">{item.title}</h3>
                  <p className="text-sm text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-left">
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-institucional-amarillo/30 animate-float" />
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl animate-fade-up">
              <Image src="/demo-slide-2.svg" alt="Comunidad educativa" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-4 right-6 px-4 py-2 rounded-full bg-institucional-verde text-white text-sm shadow-lg">
              Comunidad activa
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="relative h-44 rounded-3xl overflow-hidden shadow-lg mb-8 animate-fade-up">
          <Image src="/demo-slide-3.svg" alt="Vida escolar" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-institucional-azul/70 via-transparent to-transparent" />
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { label: "Sedes educativas", value: `${sedesCount}` },
            { label: "Enfoque", value: "Intercultural" },
            { label: "Énfasis", value: "Agropecuario" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white border border-stone-200 p-6 shadow-sm animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="font-display text-3xl text-institucional-azul">{stat.value}</p>
              <p className="text-sm text-stone-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-sm uppercase tracking-wide text-institucional-verde font-semibold">Galería</p>
            <h2 className="font-display text-2xl text-institucional-azul">Vida escolar en imágenes</h2>
          </div>
          <Link href="/noticias-eventos/noticias" className="text-sm text-institucional-azul font-semibold">
            Ver más →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALERIA.map((img, index) => (
            <div key={`${img}-${index}`} className="relative h-40 rounded-2xl overflow-hidden shadow-md">
              <Image src={img} alt="Galería institucional" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-100 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-display text-xl font-semibold text-institucional-azul mb-4">
                Niveles educativos
              </h2>
              <div className="relative h-36 rounded-2xl overflow-hidden shadow-md mb-4 animate-fade-up">
                <Image src="/demo-slide-1.svg" alt="Aula en la institución" fill className="object-cover" />
              </div>
              <ul className="space-y-2">
                {["Prejardín", "Jardín", "Transición", "Básica Primaria", "Básica Secundaria", "Media Académica"].map(
                  (nivel, i) => (
                    <li key={nivel}>
                      <Link
                        href={`/oferta-academica/${["prejardin", "jardin", "transicion", "basica-primaria", "basica-secundaria", "media-academica"][i]}`}
                        className="text-institucional-azul hover:underline font-medium"
                      >
                        {nivel}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-institucional-azul mb-4">
                Accesos rápidos
              </h2>
              <div className="relative h-36 rounded-2xl overflow-hidden shadow-md mb-4 animate-fade-up">
                <Image src="/demo-slide-2.svg" alt="Comunidad educativa" fill className="object-cover" />
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/sedes-educativas/mapa" className="text-institucional-azul hover:underline font-medium">
                    Mapa de sedes
                  </Link>
                </li>
                <li>
                  <Link href="/gestion-institucional/pec" className="text-institucional-azul hover:underline font-medium">
                    Proyecto Educativo Comunitario (PEC)
                  </Link>
                </li>
                <li>
                  <Link href="/noticias-eventos/noticias" className="text-institucional-azul hover:underline font-medium">
                    Noticias y eventos
                  </Link>
                </li>
                <li>
                  <Link href="/contacto/formulario" className="text-institucional-azul hover:underline font-medium">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
