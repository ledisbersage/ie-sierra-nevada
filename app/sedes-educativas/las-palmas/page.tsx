import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Las Palmas | Sedes Educativas - IE Sierra Nevada",
  description: "Sedes de la IE Sierra Nevada en el corregimiento Las Palmas.",
};

export default function LasPalmasPage() {
  return (
    <PageSection
      title="Las Palmas"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Sedes Educativas", href: "/sedes-educativas/mapa" },
        { label: "Las Palmas" },
      ]}
    >
      <p>
        El corregimiento de Las Palmas es otra de las zonas donde la Institución Etnoeducativa
        Sierra Nevada tiene presencia. Las sedes en esta zona atienden a estudiantes de las
        comunidades rurales en las estribaciones de la Sierra Nevada de Santa Marta.
      </p>
      <h2>Oferta educativa en la zona</h2>
      <p>
        En Las Palmas la institución ofrece los niveles educativos definidos para las sedes del
        sector, con el mismo enfoque etnoeducativo y en el marco del Proyecto Educativo Comunitario
        (PEC). La relación con la comunidad y el territorio es parte central del quehacer
        pedagógico.
      </p>
      <h2>Información de contacto</h2>
      <p>
        Para información sobre matrícula, horarios o ubicación de las sedes en Las Palmas, consulte
        la sección Contacto (formulario y teléfonos).
      </p>
    </PageSection>
  );
}
