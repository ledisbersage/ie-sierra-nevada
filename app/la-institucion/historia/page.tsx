import PageSection from "@/components/PageSection";
import { INSTITUCION, ORIGEN_NOMBRE } from "@/lib/institucion";

export const metadata = {
  title: "Historia | La Institución - IE Sierra Nevada",
  description: "Historia de la Institución Etnoeducativa Sierra Nevada, Riohacha, La Guajira.",
};

export default function HistoriaPage() {
  return (
    <PageSection
      title="Historia"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "La Institución", href: "/la-institucion/historia" },
        { label: "Historia" },
      ]}
    >
      <p>
        La Institución Etnoeducativa Sierra Nevada fue creada mediante <strong>{INSTITUCION.creada}</strong>, modificada
        parcialmente por el <strong>{INSTITUCION.modificada}</strong>. Ofrece educación preescolar, básica primaria,
        básica secundaria y media académica en los corregimientos de Juan y Medio y Las Palmas del Distrito Turístico
        y Cultural de Riohacha, La Guajira.
      </p>
      <h2>Origen del nombre</h2>
      <p>{ORIGEN_NOMBRE}</p>
      <h2>Presencia en el territorio</h2>
      <p>
        La institución está conformada por 11 sedes educativas en la zona, con presencia en los corregimientos de Juan
        y Medio y Las Palmas, atendiendo a estudiantes de comunidades Afrocolombianas, Wiwa, Kogui, Wayuu, Arahuaco,
        mestizas y otras. El modelo institucional es el <strong>Modelo Etnoeducativo e Intercultural — Tejiendo Saberes
        en Contexto</strong>, en el marco del Proyecto Educativo Comunitario (PEC).
      </p>
      <p>
        Este recorrido refleja el compromiso con el acceso a la educación en zonas rurales, la inclusión educativa y el
        fortalecimiento cultural de las comunidades de la región.
      </p>
    </PageSection>
  );
}
