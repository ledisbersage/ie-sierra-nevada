import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Otras sedes | Sedes Educativas - IE Sierra Nevada",
  description: "Otras sedes de la IE Sierra Nevada en el distrito de Riohacha.",
};

export default function OtrasSedesPage() {
  return (
    <PageSection
      title="Otras sedes"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Sedes Educativas", href: "/sedes-educativas/mapa" },
        { label: "Otras sedes" },
      ]}
    >
      <p>
        Además de las sedes ubicadas en los corregimientos de Juan y Medio y Las Palmas, la
        Institución Etnoeducativa Sierra Nevada cuenta con otras sedes en el distrito de Riohacha,
        en zonas rurales de las estribaciones de la Sierra Nevada de Santa Marta.
      </p>
      <h2>Cobertura territorial</h2>
      <p>
        En total la institución está conformada por 13 sedes educativas. Cada una atiende a la
        población de su zona y ofrece los niveles que tiene asignados según la organización
        institucional. Todas comparten el mismo Proyecto Educativo Comunitario (PEC) y el enfoque
        etnoeducativo.
      </p>
      <h2>Listado de sedes</h2>
      <ul>
        <li>Juan y Medio</li>
        <li>El Carmen</li>
        <li>Los Moreneros</li>
        <li>Cascajalito</li>
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
      <h2>Información específica por sede</h2>
      <p>
        Para conocer el listado completo de sedes, niveles que ofrecen y datos de contacto, puede
        dirigirse a la sede principal, consultar los documentos institucionales en la sección
        Transparencia o utilizar el formulario de Contacto.
      </p>
    </PageSection>
  );
}
