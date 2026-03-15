import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Padres de familia | Comunidad Educativa - IE Sierra Nevada",
  description: "Información para padres de familia de la IE Sierra Nevada.",
};

export default function PadresPage() {
  return (
    <PageSection
      title="Padres de familia"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Comunidad Educativa", href: "/comunidad-educativa/estudiantes" },
        { label: "Padres de familia" },
      ]}
    >
      <p>
        Los padres y las madres de familia son parte fundamental de la comunidad educativa de la
        Institución Etnoeducativa Sierra Nevada. Su participación favorece el acompañamiento a los
        estudiantes y el vínculo entre la escuela y el territorio.
      </p>
      <h2>Participación y acompañamiento</h2>
      <p>
        La institución promueve la participación de las familias en el gobierno escolar, en las
        actividades institucionales y en la construcción del Proyecto Educativo Comunitario (PEC).
        El manual de convivencia y los canales oficiales de comunicación están a disposición para
        consultas y seguimiento.
      </p>
      <h2>Información de interés</h2>
      <p>
        En esta web pueden consultar la oferta académica, las sedes, el calendario escolar, la
        gestión institucional y los documentos de transparencia. Para temas específicos puede usar
        el formulario de contacto o los teléfonos institucionales.
      </p>
    </PageSection>
  );
}
