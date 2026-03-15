import PageSection from "@/components/PageSection";
import Link from "next/link";

export const metadata = {
  title: "Mapa de sedes | Sedes Educativas - IE Sierra Nevada",
  description: "Mapa y listado de las 11 sedes de la IE Sierra Nevada.",
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
        La Institución Etnoeducativa Sierra Nevada está conformada por 11 sedes educativas
        dispersas en el territorio del distrito de Riohacha, en las estribaciones de la Sierra
        Nevada de Santa Marta. Atienden a estudiantes de comunidades campesinas e indígenas de la
        región.
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
      <p className="text-stone-500 text-sm mt-6">
        En esta sección se puede incorporar un mapa interactivo con la ubicación de las sedes cuando
        se disponga de la información geográfica y los permisos correspondientes.
      </p>
    </PageSection>
  );
}
