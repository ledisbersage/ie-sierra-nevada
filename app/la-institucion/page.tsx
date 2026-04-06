import PageSection from "@/components/PageSection";
import AuthSection from "@/components/auth/AuthSection";

export default function InstitucionHomePage() {
  return (
    <>
      <PageSection
        title="La Institución Etnoeducativa Sierra Nevada"
        breadcrumb={[{ label: "Inicio", href: "/" }, { label: "La Institución" }]}
        imageSrc="/fotos/IMG-20231109-WA0106.jpg"
        imageAlt="Institución Etnoeducativa Sierra Nevada"
      >
        <p>
          La Institución Etnoeducativa Sierra Nevada es un espacio dedicado a la formación de
          estudiantes y familias de la región, basado en principios de identidad cultural,
          participación ciudadana y educación de calidad.
        </p>
        <p>
          Aquí podrás acceder a información relevante sobre nuestra misión, visión y el trabajo que
          realizamos para fortalecer el tejido comunitario en Riohacha y el Departamento de La Guajira.
        </p>
      </PageSection>
      <AuthSection />
    </>
  );
}
