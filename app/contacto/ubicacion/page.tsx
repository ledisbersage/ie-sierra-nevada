import PageSection from "@/components/PageSection";
import { INSTITUCION } from "@/lib/institucion";
import { sedesCount } from "@/data/sedes";

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
        La {INSTITUCION.nombre} tiene su ámbito de acción en el {INSTITUCION.ubicacion}. Las {sedesCount} sedes
        educativas se encuentran en zonas rurales de las estribaciones de la Sierra Nevada de Santa Marta.
      </p>
      <h2>Corregimientos</h2>
      <p>
        El PEC ubica a Juan y Medio como corregimiento del municipio de Riohacha, localizado al sur de la zona urbana,
        con límites al norte con Matitas, al sur con el municipio de Distracción y el corregimiento de Las Palmas, al
        oriente con Tomarrazón y al occidente con Las Palmas. La institución presta servicios educativos especialmente
        en <strong>Juan y Medio</strong> y <strong>Las Palmas</strong>, además de sedes en su entorno rural inmediato.
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
