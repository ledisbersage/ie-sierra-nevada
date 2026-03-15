import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";
import { INSTITUCION } from "@/lib/institucion";

export default function HomePage() {
  return (
    <div>
      {/* Hero tipo banner institucional con sidebar derecho */}
      <div className="bg-institucional-azul text-white relative min-h-[320px] md:min-h-[380px]">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="grid md:grid-cols-[1fr,320px] gap-8 items-start">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
              <HeroLogo />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2 text-institucional-amarilloClaro">
                  {INSTITUCION.nombre}
                </h1>
                <p className="text-lg text-white/90 mb-1">{INSTITUCION.modelo}</p>
                <p className="text-white/80">
                  {INSTITUCION.ubicacion}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-5">
                  <Link
                    href="/la-institucion/historia"
                    className="px-4 py-2 bg-institucional-amarillo text-institucional-oscuro font-medium rounded-lg hover:bg-institucional-amarilloClaro transition text-sm"
                  >
                    Conocer la institución
                  </Link>
                  <Link
                    href="/oferta-academica/prejardin"
                    className="px-4 py-2 border-2 border-white/80 text-white font-medium rounded-lg hover:bg-white/10 transition text-sm"
                  >
                    Oferta académica
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar: Noticias / Eventos + Bienvenida (estilo referencia) */}
            <aside className="space-y-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex border-b border-stone-200">
                  <Link
                    href="/noticias-eventos/noticias"
                    className="flex-1 py-3 px-4 text-center text-sm font-medium bg-institucional-azul text-white"
                  >
                    Portal de Noticias
                  </Link>
                  <Link
                    href="/noticias-eventos/actividades"
                    className="flex-1 py-3 px-4 text-center text-sm font-medium text-stone-600 hover:bg-stone-50"
                  >
                    Eventos
                  </Link>
                </div>
                <div className="p-4">
                  <p className="text-sm text-stone-600 mb-2">
                    Conozca las noticias y actividades de la institución.
                  </p>
                  <Link
                    href="/noticias-eventos/noticias"
                    className="text-institucional-azul font-medium text-sm hover:underline"
                  >
                    Ver todas las noticias →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 border border-stone-100">
                <p className="font-semibold text-institucional-azul text-sm mb-1">
                  ¿Eres estudiante nuevo?
                </p>
                <p className="text-stone-600 text-sm mb-3">
                  Bienvenidos a la IE Sierra Nevada. Consulta oferta académica, sedes y matrícula.
                </p>
                <Link
                  href="/oferta-academica/prejardin"
                  className="inline-block text-institucional-azul font-medium text-sm hover:underline"
                >
                  Oferta académica →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Enfoque etnoeducativo */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold text-institucional-azul mb-6 text-center">
          Enfoque etnoeducativo
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Identidad cultural", desc: "Fortalecimiento de la identidad y los saberes de las comunidades." },
            { title: "Saberes tradicionales", desc: "Integración del conocimiento ancestral en el proceso educativo." },
            { title: "Territorio", desc: "Educación vinculada al territorio y al cuidado del entorno." },
            { title: "Diversidad", desc: "Respeto y valoración de la diversidad étnica y cultural." },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-institucional-azulClaro/50 transition"
            >
              <h3 className="font-semibold text-institucional-azul mb-2">{item.title}</h3>
              <p className="text-sm text-stone-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Niveles y accesos rápidos */}
      <div className="bg-stone-100 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-semibold text-institucional-azul mb-4">
                Niveles educativos
              </h2>
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
              <h2 className="text-xl font-semibold text-institucional-azul mb-4">
                Accesos rápidos
              </h2>
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
      </div>
    </div>
  );
}
