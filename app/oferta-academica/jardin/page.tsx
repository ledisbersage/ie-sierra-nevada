import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Jardín | Oferta Académica - IE Sierra Nevada",
  description: "Nivel Jardín en la IE Sierra Nevada.",
};

export default function JardinPage() {
  return (
    <PageSection
      title="Jardín"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Oferta Académica", href: "/oferta-academica/prejardin" },
        { label: "Jardín" },
      ]}
    >
      <p>
        El nivel de Jardín en la Institución Etnoeducativa Sierra Nevada continúa el proceso de
        formación inicial, potenciando el juego, la expresión y la relación con el territorio y la
        cultura.
      </p>
      <h2>Enfoque del nivel</h2>
      <p>
        Se trabajan competencias y experiencias propias de la educación inicial, en sintonía con el
        Proyecto Educativo Comunitario (PEC). Se fortalece la identidad, el respeto por la
        diversidad y el vínculo con la naturaleza y las tradiciones de la comunidad.
      </p>
      <h2>Cobertura</h2>
      <p>
        El nivel de Jardín se ofrece en las sedes definidas por la institución. Para detalles de
        sedes y requisitos de matrícula, consulte Sedes Educativas o contacte a la institución.
      </p>
    </PageSection>
  );
}
