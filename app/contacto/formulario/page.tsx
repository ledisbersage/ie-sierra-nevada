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
      <p className="text-stone-500 text-sm mt-6">
        Nota: este formulario es de ejemplo. Para que los mensajes lleguen a la institución debe
        conectarse a un servicio de correo o a una base de datos según la infraestructura
        disponible.
      </p>
    </PageSection>
  );
}
