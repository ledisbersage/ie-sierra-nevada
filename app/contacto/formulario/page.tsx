import PageSection from "@/components/PageSection";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Formulario | Contacto - IE Sierra Nevada",
  description: "Formulario de contacto de la IE Sierra Nevada.",
};

export default function FormularioPage() {
  return (
    <PageSection
      title="Formulario de contacto"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Contacto", href: "/contacto/ubicacion" },
        { label: "Formulario" },
      ]}
    >
      <p className="mb-6">
        Utilice este formulario para enviar consultas, solicitudes o sugerencias a la
        Institución Etnoeducativa Sierra Nevada. Los datos serán utilizados únicamente para
        responder su mensaje.
      </p>
      <ContactForm />
    </PageSection>
  );
}
