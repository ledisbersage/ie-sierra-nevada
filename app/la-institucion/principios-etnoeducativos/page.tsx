import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Principios Etnoeducativos | La Institución - IE Sierra Nevada",
  description: "Principios etnoeducativos de la IE Sierra Nevada.",
};

export default function PrincipiosEtnoeducativosPage() {
  return (
    <PageSection
      title="Principios Etnoeducativos"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "La Institución", href: "/la-institucion/historia" },
        { label: "Principios Etnoeducativos" },
      ]}
    >
      <p>
        El modelo etnoeducativo de la institución se fundamenta en principios que orientan la
        práctica pedagógica y la relación con la comunidad y el territorio.
      </p>
      <h2>Identidad y cultura</h2>
      <p>
        Reconocemos y valoramos la identidad cultural de las comunidades. La educación se construye
        desde y con los saberes, las lenguas y las prácticas propias del territorio.
      </p>
      <h2>Saberes tradicionales</h2>
      <p>
        Integramos los conocimientos ancestrales y tradicionales en el currículo, en diálogo con los
        saberes escolares, para una formación integral y contextualizada.
      </p>
      <h2>Territorio y ambiente</h2>
      <p>
        La relación con el territorio y el cuidado del ambiente son ejes transversales. La escuela
        se concibe como parte del territorio y al servicio de la comunidad.
      </p>
      <h2>Diversidad e inclusión</h2>
      <p>
        Promovemos el respeto por la diversidad cultural, étnica y social, y una educación
        inclusiva que garantice oportunidades para todos y todas.
      </p>
      <h2>Participación comunitaria</h2>
      <p>
        La comunidad educativa —estudiantes, familias, docentes, líderes— participa en la
        construcción del Proyecto Educativo Comunitario (PEC) y en las decisiones que afectan la
        vida institucional.
      </p>
    </PageSection>
  );
}
