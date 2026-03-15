import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Prejardín | Oferta Académica - IE Sierra Nevada",
  description: "Nivel Prejardín en la IE Sierra Nevada.",
};

export default function PrejardinPage() {
  return (
    <PageSection
      title="Prejardín"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Oferta Académica", href: "/oferta-academica/prejardin" },
        { label: "Prejardín" },
      ]}
    >
      <p>
        El nivel de Prejardín en la Institución Etnoeducativa Sierra Nevada ofrece a los más
        pequeños un espacio de acogida, juego y exploración, en el que se inician en la vida
        escolar desde un enfoque etnoeducativo.
      </p>
      <h2>Enfoque del nivel</h2>
      <p>
        Se promueve el desarrollo integral a través de experiencias que respetan los ritmos de
        cada niño y niña, integran el entorno familiar y comunitario, y acercan a los saberes
        propios del territorio. El trabajo se realiza en articulación con las familias y con el
        contexto cultural de las comunidades.
      </p>
      <h2>Cobertura</h2>
      <p>
        La oferta de Prejardín está disponible en las sedes que cuentan con este nivel según la
        organización institucional. Para información sobre sedes y matrícula, consulte la sección
        Sedes Educativas o acuda a la institución.
      </p>
    </PageSection>
  );
}
