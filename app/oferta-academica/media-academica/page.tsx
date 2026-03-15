import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Media Académica | Oferta Académica - IE Sierra Nevada",
  description: "Educación Media Académica en la IE Sierra Nevada.",
};

export default function MediaAcademicaPage() {
  return (
    <PageSection
      title="Media Académica"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Oferta Académica", href: "/oferta-academica/prejardin" },
        { label: "Media Académica" },
      ]}
    >
      <p>
        La Educación Media Académica en la Institución Etnoeducativa Sierra Nevada comprende los
        grados décimo y undécimo. Prepara a los estudiantes para la educación superior o para el
        mundo del trabajo, sin dejar de lado la identidad cultural y el vínculo con el territorio.
      </p>
      <h2>Enfoque del nivel</h2>
      <p>
        Se desarrollan las áreas y competencias propias de la media, con posibilidad de
        profundización según la oferta institucional. El Proyecto Educativo Comunitario (PEC) y los
        principios etnoeducativos siguen siendo ejes transversales que acompañan la formación de
        los jóvenes como ciudadanos y como parte de sus comunidades.
      </p>
      <h2>Cobertura</h2>
      <p>
        La Media Académica se ofrece en las sedes que tienen este nivel. Para información sobre
        sedes, requisitos y matrícula, consulte Sedes Educativas o contacte a la institución.
      </p>
    </PageSection>
  );
}
