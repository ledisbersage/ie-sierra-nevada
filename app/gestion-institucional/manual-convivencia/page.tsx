import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Manual de convivencia | Gestión Institucional - IE Sierra Nevada",
  description: "Manual de convivencia de la IE Sierra Nevada.",
};

export default function ManualConvivenciaPage() {
  return (
    <PageSection
      title="Manual de convivencia"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Gestión Institucional", href: "/gestion-institucional/pec" },
        { label: "Manual de convivencia" },
      ]}
    >
      <p>
        El manual de convivencia de la Institución Etnoeducativa Sierra Nevada establece las
        normas, los derechos, los deberes y los procedimientos que rigen la convivencia en las
        sedes de la institución. Es un instrumento de formación ciudadana y de garantía de un
        ambiente escolar respetuoso e inclusivo.
      </p>
      <h2>Contenido y alcance</h2>
      <p>
        El manual aplica a estudiantes, padres de familia, docentes y personal administrativo. Incluye
        aspectos como asistencia, uso de instalaciones, resolución de conflictos y rutas de
        atención, en el marco de la normativa vigente y del Proyecto Educativo Comunitario (PEC).
      </p>
      <h2>Consulta del documento</h2>
      <p>
        Para consultar el manual de convivencia actualizado puede solicitarlo en la sede principal
        o revisar la sección Transparencia / Documentos institucionales, donde la institución
        publica los documentos de interés para la comunidad.
      </p>
    </PageSection>
  );
}
