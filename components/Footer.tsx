import Link from "next/link";
import IconLink from "@/components/ui/IconLink";
import { INSTITUCION, RECTOR } from "@/lib/institucion";
import { routeIcons } from "@/lib/icons";

const footerLinks = [
  { label: "La Institución", href: "/la-institucion/historia", icon: routeIcons.institucion },
  { label: "Oferta Académica", href: "/oferta-academica/prejardin", icon: routeIcons.oferta },
  { label: "Calendario académico", href: "/noticias-eventos/calendario", icon: routeIcons.noticias },
  { label: "Sedes", href: "/sedes-educativas/mapa", icon: routeIcons.sedes },
  { label: "Transparencia", href: "/transparencia/documentos", icon: routeIcons.transparencia },
  { label: "Contacto", href: "/contacto/ubicacion", icon: routeIcons.contacto },
];

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
            <ul className="space-y-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <IconLink
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
                    className="flex items-center gap-2 text-white/90 hover:text-institucional-amarilloClaro transition"
                    iconClassName="text-white/90"
                    labelClassName="inline-flex text-sm font-semibold"
                    tooltipClassName="bg-white/95 text-stone-900 border border-white/30"
                    tooltipTailClassName="border-t-white/90 border-l-transparent border-r-transparent border-b-transparent"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-institucional-amarilloClaro text-lg mb-3">Contacto</h3>
            <p className="text-sm">
              {RECTOR.nombre}
              <br />
              {RECTOR.cargo}
              <br />
              Tel:{" "}
              <a
                href={`tel:${RECTOR.telefono.replace(/-/g, "")}`}
                className="text-institucional-amarilloClaro hover:underline"
              >
                {RECTOR.telefono}
              </a>
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
            (c) {new Date().getFullYear()} {INSTITUCION.nombre}. Código DANE {INSTITUCION.codigoDane}. Todos los
            derechos reservados.
          </p>
          <p className="text-white/80">
            La Institución Etnoeducativa Sierra Nevada trata los datos personales conforme a la Ley 1581 de 2012.
            Puedes consultar nuestra{" "}
            <Link href="/transparencia/documentos" className="text-institucional-amarilloClaro hover:underline">
              Política de Tratamiento de Datos Personales
            </Link>{" "}
            en este sitio web.
          </p>
        </div>
      </div>
    </footer>
  );
}
