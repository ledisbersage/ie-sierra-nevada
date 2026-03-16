import PageSection from "@/components/PageSection";
import Link from "next/link";
import Image from "next/image";
import SedesDiagram from "@/components/SedesDiagram";
import { sedes, sedesCount } from "@/data/sedes";

export const metadata = {
  title: "Mapa de sedes | Sedes Educativas - IE Sierra Nevada",
  description: "Mapa y organización de las sedes de la IE Sierra Nevada.",
};

export default function MapaSedesPage() {
  return (
    <PageSection
      title="Mapa de sedes"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Sedes Educativas", href: "/sedes-educativas/mapa" },
        { label: "Mapa de sedes" },
      ]}
    >
      <p>
        La Institución Etnoeducativa Sierra Nevada está conformada por {sedesCount} sedes educativas
        ubicadas en comunidades rurales y dispersas del distrito de Riohacha, en las estribaciones
        de la Sierra Nevada de Santa Marta. Atienden a estudiantes de comunidades afrocolombianas,
        indígenas y mestizas de la región.
      </p>
      <h2>Corregimientos y presencia</h2>
      <p>
        Las sedes se ubican principalmente en los corregimientos de <strong>Juan y Medio</strong> y{" "}
        <strong>Las Palmas</strong>, además de otras zonas rurales. Cada sede se adapta al contexto
        de su comunidad y ofrece los niveles educativos según la organización institucional.
      </p>
      <h2>Enlaces por sede</h2>
      <ul>
        {sedes.map((sede) => (
          <li key={sede.slug}>
            <Link href={`/sedes-educativas/${sede.slug}`} className="text-institucional-azul hover:underline">
              {sede.nombre}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Mapa institucional (referencial)</h2>
      <p>
        La sede principal es <strong>Juan y Medio</strong>. La sede de <strong>bachillerato</strong> es{" "}
        <strong>Cascajalito</strong>, donde se articulan los grados <strong>6° a 11°</strong>. Las demás sedes se
        conectan a la coordinación institucional y remiten su continuidad académica a la sede de bachillerato.
      </p>
      <div className="mt-5 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
        <SedesDiagram />
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-stone-500">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-10 rounded-full bg-institucional-azul" />
            Conexión administrativa a Juan y Medio
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-10 rounded-full bg-institucional-verde" />
            Articulación académica a Cascajalito (6°-11°)
          </span>
        </div>
      </div>
      <h2>Listado de sedes</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {sedes.map((sede) => (
          <Link
            key={sede.slug}
            href={`/sedes-educativas/${sede.slug}`}
            className="group rounded-2xl border border-stone-200 bg-white p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="relative h-32 rounded-xl overflow-hidden mb-3">
              <Image src={sede.imagenes[0]} alt={sede.nombre} fill className="object-cover" />
            </div>
            <h3 className="font-semibold text-institucional-azul group-hover:underline">{sede.nombre}</h3>
            <p className="text-sm text-stone-600">Código DANE: {sede.codigoDane}</p>
            <p className="text-sm text-stone-600">Jornadas: {sede.jornadas.join(", ")}</p>
          </Link>
        ))}
      </div>
    </PageSection>
  );
}
