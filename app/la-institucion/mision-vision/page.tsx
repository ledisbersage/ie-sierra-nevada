import PageSection from "@/components/PageSection";
import { MISION, VISION } from "@/lib/institucion";

export const metadata = {
  title: "Misión y Visión | La Institución - IE Sierra Nevada",
  description: "Misión y visión de la Institución Etnoeducativa Sierra Nevada.",
};

export default function MisionVisionPage() {
  return (
    <PageSection
      title="Misión y Visión"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "La Institución", href: "/la-institucion/historia" },
        { label: "Misión y Visión" },
      ]}
      imageSrc="/demo-slide-2.svg"
      imageAlt="Estudiantes y comunidad de la IE Sierra Nevada"
    >
      <h2>El camino (Misión)</h2>
      <p>{MISION}</p>
      <h2>El sueño (Visión)</h2>
      <p>{VISION}</p>
    </PageSection>
  );
}
