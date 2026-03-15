import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Informes | Transparencia - IE Sierra Nevada",
  description: "Informes de gestión de la IE Sierra Nevada.",
};

export default function InformesPage() {
  return (
    <PageSection
      title="Informes"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Transparencia", href: "/transparencia/contratacion" },
        { label: "Informes" },
      ]}
    >
      <p>
        La Institución Etnoeducativa Sierra Nevada divulga informes de gestión y resultados en
        el marco de la transparencia y la rendición de cuentas ante la comunidad educativa y la
        ciudadanía.
      </p>
      <h2>Tipos de informes</h2>
      <p>
        Se pueden incluir informes de gestión académica, administrativa y comunitaria, así como
        reportes requeridos por las autoridades educativas. Su publicación se realiza según la
        normativa y la disponibilidad institucional.
      </p>
      <h2>Consulta</h2>
      <p>
        Para acceder a informes publicados puede revisar la sección Documentos institucionales
        o contactar a la institución para solicitar la información de su interés.
      </p>
    </PageSection>
  );
}
