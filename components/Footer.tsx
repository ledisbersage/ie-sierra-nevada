import Link from "next/link";
import { INSTITUCION, RECTOR } from "@/lib/institucion";

export default function Footer() {
  return (
    <footer className="bg-institucional-azul text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-semibold text-institucional-amarilloClaro text-lg mb-3">
              {INSTITUCION.nombre}
            </h3>
            <p className="text-sm text-white/90">
              {INSTITUCION.ubicacion}. Educación preescolar, básica, media y para jóvenes y adultos.
              Modelo Etnoeducativo e Intercultural — Tejiendo Saberes en Contexto.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-institucional-amarilloClaro text-lg mb-3">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/la-institucion/historia" className="hover:text-institucional-amarilloClaro transition">
                  La Institución
                </Link>
              </li>
              <li>
                <Link href="/oferta-academica/prejardin" className="hover:text-institucional-amarilloClaro transition">
                  Oferta Académica
                </Link>
              </li>
              <li>
                <Link href="/noticias-eventos/calendario" className="hover:text-institucional-amarilloClaro transition">
                  Calendario académico
                </Link>
              </li>
              <li>
                <Link href="/sedes-educativas/mapa" className="hover:text-institucional-amarilloClaro transition">
                  Sedes
                </Link>
              </li>
              <li>
                <Link href="/transparencia/documentos" className="hover:text-institucional-amarilloClaro transition">
                  Transparencia
                </Link>
              </li>
              <li>
                <Link href="/contacto/ubicacion" className="hover:text-institucional-amarilloClaro transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-institucional-amarilloClaro text-lg mb-3">Contacto</h3>
            <p className="text-sm">
              {RECTOR.nombre}<br />
              {RECTOR.cargo}<br />
              Tel: <a href={`tel:${RECTOR.telefono.replace(/-/g, "")}`} className="text-institucional-amarilloClaro hover:underline">{RECTOR.telefono}</a>
            </p>
            <Link
              href="/contacto/formulario"
              className="inline-block mt-2 text-institucional-amarilloClaro hover:underline text-sm"
            >
              Atención al ciudadano
            </Link>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/80 space-y-3">
          <p>
            (c) {new Date().getFullYear()} {INSTITUCION.nombre}. Codigo DANE {INSTITUCION.codigoDane}. Todos los derechos reservados.
          </p>
          <p className="text-white/80">
            La Institucion Etnoeducativa Sierra Nevada trata los datos personales conforme a la Ley 1581 de 2012.
            Puedes consultar nuestra{" "}
            <Link href="/transparencia/documentos" className="text-institucional-amarilloClaro hover:underline">
              Politica de Tratamiento de Datos Personales
            </Link>{" "}
            en este sitio web.
          </p>
        </div>
      </div>
    </footer>
  );
}
