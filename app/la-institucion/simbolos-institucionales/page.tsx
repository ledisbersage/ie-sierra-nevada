import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Símbolos Institucionales | La Institución - IE Sierra Nevada",
  description: "Símbolos institucionales de la IE Sierra Nevada.",
};

export default function SimbolosInstitucionalesPage() {
  return (
    <PageSection
      title="Símbolos Institucionales"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "La Institución", href: "/la-institucion/historia" },
        { label: "Símbolos Institucionales" },
      ]}
    >
      <p>
        Los símbolos institucionales representan la identidad, los valores y el vínculo de la
        institución con el territorio y las comunidades de la Sierra Nevada de Santa Marta.
      </p>
      <h2>Escudo</h2>
      <p>
        El escudo de la Institución Etnoeducativa Sierra Nevada incorpora elementos que aluden a la
        Sierra Nevada, la diversidad cultural y el compromiso con la educación y el territorio.
        (Descripción y uso oficial pueden ampliarse según los documentos institucionales.)
      </p>
      <h2>Bandera</h2>
      <p>
        La bandera institucional refleja los colores y los significados que la comunidad educativa
        ha definido como representativos de su identidad y de la región.
      </p>
      <h2>Himno</h2>
      <p>
        El himno de la institución expresa el sentido de pertenencia, el orgullo por la tierra y la
        educación, y el compromiso con las nuevas generaciones. Se entona en actos cívicos y
        ceremonias institucionales.
      </p>
      <p className="text-stone-500 text-sm mt-6">
        Para consultar versiones oficiales de escudo, bandera e himno, acuda a la sede principal o
        a los documentos institucionales publicados en la sección de Transparencia.
      </p>
    </PageSection>
  );
}
