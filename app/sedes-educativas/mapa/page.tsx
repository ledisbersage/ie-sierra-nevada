import PageSection from "@/components/PageSection";
import Link from "next/link";
import SedesDiagram from "@/components/SedesDiagram";

export const metadata = {
  title: "Mapa de sedes | Sedes Educativas - IE Sierra Nevada",
  description: "Mapa y listado de las 13 sedes de la IE Sierra Nevada.",
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
        La Institución Etnoeducativa Sierra Nevada está conformada por 13 sedes educativas
        dispersas en el territorio del distrito de Riohacha, en las estribaciones de la Sierra
        Nevada de Santa Marta. Atienden a estudiantes de comunidades afrocolombianas, indígenas y
        mestizas de la región.
      </p>
      <h2>Corregimientos y presencia</h2>
      <p>
        Las sedes se ubican principalmente en los corregimientos de <strong>Juan y Medio</strong> y{" "}
        <strong>Las Palmas</strong>, además de otras zonas rurales. Cada sede se adapta al contexto
        de su comunidad y ofrece los niveles educativos según la organización institucional.
      </p>
      <h2>Enlaces por sede</h2>
      <ul>
        <li>
          <Link href="/sedes-educativas/juan-y-medio" className="text-institucional-azul hover:underline">
            Sedes en Juan y Medio
          </Link>
        </li>
        <li>
          <Link href="/sedes-educativas/las-palmas" className="text-institucional-azul hover:underline">
            Sedes en Las Palmas
          </Link>
        </li>
        <li>
          <Link href="/sedes-educativas/otras-sedes" className="text-institucional-azul hover:underline">
            Otras sedes
          </Link>
        </li>
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
      <h2>Listado de sedes (PEC)</h2>
      <ul>
        <li>Juan y Medio (Sede principal)</li>
        <li>El Carmen</li>
        <li>Los Moreneros</li>
        <li>Cascajalito (Bachillerato)</li>
        <li>Las Colonias</li>
        <li>La Guillermina</li>
        <li>Las Palmas</li>
        <li>Puerto Colombia</li>
        <li>Las Casitas</li>
        <li>Contadero</li>
        <li>El Limón</li>
        <li>Las Balsas</li>
        <li>Los Monos</li>
      </ul>
    </PageSection>
  );
}
