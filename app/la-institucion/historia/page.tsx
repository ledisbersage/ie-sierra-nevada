import PageSection from "@/components/PageSection";
import { sedes } from "@/data/sedes";
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
      imageSrc="/fotos/IMG_20240319_123815.jpg"
      imageAlt="Paisaje de la Sierra Nevada de Santa Marta"
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
      <p>
        La institución cuenta con sedes educativas ubicadas en comunidades rurales y dispersas de los corregimientos de
        Juan y Medio y Las Palmas. Esta presencia territorial permite garantizar el derecho a la educación de niñas,
        niños, adolescentes, jóvenes y adultos en contextos rurales, atendiendo comunidades indígenas,
        afrodescendientes, campesinas, población migrante y desplazada.
      </p>
      <ul>
        {sedes.map((sede) => (
          <li key={sede.slug}>{sede.nombre}</li>
        ))}
      </ul>
      <p>
        Desde su conformación como centro educativo (Decreto 247 de 2002), su conversión a centro etnoeducativo
        (Decreto 057 de 2009) y su reconocimiento como Institución Etnoeducativa (Decreto 023 de 2016), la Sierra
        Nevada ha fortalecido un proyecto pedagógico intercultural que integra los saberes ancestrales y los
        conocimientos universales al servicio del territorio.
      </p>
    </PageSection>
  );
}
