import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Juan y Medio | Sedes Educativas - IE Sierra Nevada",
  description: "Sedes de la IE Sierra Nevada en el corregimiento Juan y Medio.",
};

export default function JuanYMedioPage() {
  return (
    <PageSection
      title="Juan y Medio"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Sedes Educativas", href: "/sedes-educativas/mapa" },
        { label: "Juan y Medio" },
      ]}
    >
      <p>
        El corregimiento de Juan y Medio es una de las zonas de mayor presencia de la Institución
        Etnoeducativa Sierra Nevada. Aquí la institución cuenta con una o varias sedes que atienden
        a la población escolar de las comunidades rurales del sector.
      </p>
      <h2>Sedes en el entorno de Juan y Medio</h2>
      <p>Según el PEC, las sedes vinculadas a esta zona son:</p>
      <ul>
        <li>Juan y Medio</li>
        <li>El Carmen</li>
        <li>Los Moreneros</li>
        <li>Cascajalito</li>
        <li>Las Colonias</li>
        <li>La Guillermina</li>
        <li>Puerto Colombia</li>
        <li>Las Casitas</li>
        <li>Contadero</li>
        <li>El Limón</li>
        <li>Las Balsas</li>
        <li>Los Monos</li>
      </ul>
      <h2>Oferta educativa en la zona</h2>
      <p>
        Las sedes en Juan y Medio ofrecen los niveles que la institución tiene definidos para esta
        zona (prejardín, jardín, transición, básica primaria, básica secundaria y/o media,
        según corresponda). El enfoque etnoeducativo se desarrolla en sintonía con el contexto
        local y el Proyecto Educativo Comunitario (PEC).
      </p>
      <h2>Información de contacto</h2>
      <p>
        Para consultas sobre matrícula, horarios o ubicación exacta de las sedes en Juan y Medio,
        puede utilizar el formulario de contacto o los teléfonos institucionales publicados en la
        sección Contacto.
      </p>
    </PageSection>
  );
}
