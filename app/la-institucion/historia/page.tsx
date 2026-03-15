import PageSection from "@/components/PageSection";
import { INSTITUCION, ORIGEN_NOMBRE } from "@/lib/institucion";

export const metadata = {
  title: "Historia | La Institución - IE Sierra Nevada",
  description: "Historia de la Institución Etnoeducativa Sierra Nevada, Riohacha, La Guajira.",
};

export default function HistoriaPage() {
  return (
    <PageSection
      title="Historia"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "La Institución", href: "/la-institucion/historia" },
        { label: "Historia" },
      ]}
    >
      <p>
        La Institución Etnoeducativa Sierra Nevada fue reconocida mediante{" "}
        <strong>{INSTITUCION.creada}</strong> y desarrolla su labor educativa en los corregimientos de Juan y Medio y
        Las Palmas del Distrito de Riohacha, La Guajira.
      </p>
      <h2>Origen del nombre</h2>
      <p>{ORIGEN_NOMBRE}</p>
      <h2>Historia y contexto</h2>
      <p>
        La Sierra Nevada de Santa Marta fue habitada desde sus inicios por los pueblos Tayronas. Tras la conquista
        española, sus ciudades desaparecieron y sus descendientes permanecen hoy como pueblos indígenas en la región:
        Wiwa, Kogui, Kankuamo y Arahuaco. En la Guajira también hicieron presencia los pueblos Wayuu y otros grupos
        indígenas, mientras que la llegada de población afrodescendiente, inicialmente esclavizada, dio origen a
        asentamientos palenqueros y a nuevas dinámicas interculturales.
      </p>
      <p>
        Durante el siglo XX, la región vivió transformaciones sociales y económicas profundas, incluyendo la bonanza
        marimbera, lo que afectó la vida comunitaria. En este contexto, la educación fue tomando un papel central:
        las primeras escuelas rurales se consolidaron a partir de 1953 y, con programas posteriores, se amplió el
        acceso y la permanencia escolar en las veredas.
      </p>
      <h2>Sedes que la conforman</h2>
      <p>Según el PEC, la institución está conformada por las siguientes sedes:</p>
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
      <p>
        Esta presencia territorial permite atender comunidades afrocolombianas, indígenas y mestizas, fortaleciendo la
        identidad cultural y la convivencia intercultural en el marco del Proyecto Educativo Comunitario (PEC).
      </p>
    </PageSection>
  );
}
