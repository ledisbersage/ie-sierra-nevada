import PageSection from "@/components/PageSection";
import { INSTITUCION } from "@/lib/institucion";

export const metadata = {
  title: "Ubicación | Contacto - IE Sierra Nevada",
  description: "Ubicación de la IE Sierra Nevada, Riohacha, La Guajira.",
};

export default function UbicacionPage() {
  return (
    <PageSection
      title="Ubicación"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Contacto", href: "/contacto/ubicacion" },
        { label: "Ubicación" },
      ]}
    >
      <p>
        La {INSTITUCION.nombre} tiene su ámbito de acción en el {INSTITUCION.ubicacion}. Las 11 sedes
        educativas se encuentran en zonas rurales de las estribaciones de la Sierra Nevada de Santa Marta.
      </p>
      <h2>Corregimientos</h2>
      <p>
        La institución presta servicios educativos especialmente en los corregimientos de{" "}
        <strong>Juan y Medio</strong> y <strong>Las Palmas</strong>, además de otras sedes en el
        territorio distrital. Cada sede atiende a las comunidades de su zona.
      </p>
      <h2>Sede principal</h2>
      <p>
        Para conocer la dirección exacta de la sede principal y de cada sede, así como indicaciones
        de acceso, puede utilizar el formulario de contacto o los teléfonos institucionales
        publicados en esta web. En esta sección se puede incorporar un mapa cuando se disponga
        de la información.
      </p>
    </PageSection>
  );
}
