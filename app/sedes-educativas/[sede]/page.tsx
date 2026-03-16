import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageSection from "@/components/PageSection";
import { getSedeBySlug, sedes } from "@/data/sedes";

type Props = {
  params: { sede: string };
};

export function generateStaticParams() {
  return sedes.map((sede) => ({ sede: sede.slug }));
}

export function generateMetadata({ params }: Props) {
  const sede = getSedeBySlug(params.sede);
  if (!sede) {
    return {
      title: "Sede no encontrada | IE Sierra Nevada",
    };
  }
  return {
    title: `${sede.nombre} | Sedes Educativas - IE Sierra Nevada`,
    description: `Información de la sede ${sede.nombre} de la IE Sierra Nevada en Riohacha.`,
  };
}

export default function SedePage({ params }: Props) {
  const sede = getSedeBySlug(params.sede);
  if (!sede) {
    notFound();
  }

  const mapsUrl = sede.coords
    ? `https://www.google.com/maps?q=${sede.coords.lat},${sede.coords.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sede.mapsQuery)}`;

  return (
    <PageSection
      title={sede.nombre}
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Sedes Educativas", href: "/sedes-educativas/mapa" },
        { label: sede.nombre },
      ]}
    >
      <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-8 items-start">
        <div className="space-y-4">
          <p>{sede.descripcion}</p>
          <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
            <p className="text-sm text-stone-500 uppercase tracking-wide mb-1">Código DANE</p>
            <p className="text-lg font-semibold text-institucional-azul">{sede.codigoDane}</p>
            <p className="text-sm text-stone-500 uppercase tracking-wide mt-4 mb-1">Jornadas</p>
            <div className="flex flex-wrap gap-2">
              {sede.jornadas.map((jornada) => (
                <span
                  key={jornada}
                  className="px-3 py-1 rounded-full border border-stone-200 text-sm text-stone-600"
                >
                  {jornada}
                </span>
              ))}
            </div>
            <p className="text-sm text-stone-500 uppercase tracking-wide mt-4 mb-1">Ubicación</p>
            <p className="text-stone-700">{sede.ubicacion}</p>
            <Link
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-institucional-azul hover:underline"
            >
              Ver en Google Maps →
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative h-60 rounded-3xl overflow-hidden shadow-lg">
            <Image src={sede.imagenes[0]} alt={`Sede ${sede.nombre}`} fill className="object-cover" />
          </div>
          {sede.imagenes.length > 1 && (
            <div className="grid grid-cols-2 gap-3">
              {sede.imagenes.slice(1, 3).map((img, index) => (
                <div key={`${sede.slug}-${index}`} className="relative h-28 rounded-2xl overflow-hidden shadow-md">
                  <Image src={img} alt={`Sede ${sede.nombre}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageSection>
  );
}
