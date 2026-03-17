import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Democracia escolar | Transparencia - IE Sierra Nevada",
  description: "Proyecto de democracia escolar y participacion ciudadana.",
};

export default function DemocraciaEscolarPage() {
  return (
    <PageSection
      title="Proyecto de Democracia Escolar"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Transparencia", href: "/transparencia/contratacion" },
        { label: "Democracia escolar" },
      ]}
    >
      <h2>Identificacion</h2>
      <ul>
        <li>Nombre: Proyecto de Democracia Escolar y Participacion Ciudadana.</li>
        <li>Institucion: IE Sierra Nevada.</li>
        <li>Ubicacion: Riohacha, La Guajira.</li>
        <li>Responsables: Rector(a), docentes, Comite de Democracia.</li>
      </ul>

      <h2>Justificacion</h2>
      <p>
        Busca fortalecer valores democraticos, transparencia y participacion, formando estudiantes con
        liderazgo y responsabilidad ciudadana.
      </p>

      <h2>Objetivo general</h2>
      <p>
        Formar estudiantes con conciencia democratica mediante procesos de participacion y liderazgo en
        la comunidad educativa.
      </p>

      <h2>Objetivos especificos</h2>
      <ul>
        <li>Fomentar la participacion democratica de estudiantes.</li>
        <li>Promover respeto por normas y convivencia pacifica.</li>
        <li>Fortalecer liderazgo estudiantil.</li>
        <li>Desarrollar valores de responsabilidad y honestidad.</li>
        <li>Incentivar el cuidado de los bienes publicos.</li>
      </ul>

      <h2>Marco legal</h2>
      <ul>
        <li>Constitucion Politica de Colombia.</li>
        <li>Ley 115 de 1994.</li>
        <li>Decreto 1860 de 1994.</li>
        <li>Decreto 1075 de 2015.</li>
        <li>Manual de Convivencia institucional.</li>
      </ul>

      <h2>Gobierno escolar y representacion</h2>
      <ul>
        <li>Consejo Directivo y Consejo Academico.</li>
        <li>Personero Estudiantil.</li>
        <li>Consejo Estudiantil.</li>
        <li>Contralor Estudiantil.</li>
      </ul>

      <h2>Comite de Democracia y Elecciones</h2>
      <ul>
        <li>Organiza convocatorias, inscripciones y jornada electoral.</li>
        <li>Coordina escrutinio y actas.</li>
        <li>Garantiza transparencia del proceso.</li>
      </ul>

      <h2>Cronograma base</h2>
      <ul>
        <li>Socializacion: Febrero.</li>
        <li>Convocatoria e inscripciones: Febrero.</li>
        <li>Campanas: Marzo.</li>
        <li>Eleccion y posesion: Marzo.</li>
        <li>Actividades pedagogicas: durante el ano.</li>
      </ul>

      <h2>Estrategias pedagogicas</h2>
      <ul>
        <li>Debates estudiantiles.</li>
        <li>Foros sobre democracia y ciudadania.</li>
        <li>Campanas de cuidado de bienes publicos.</li>
        <li>Proyectos de participacion comunitaria.</li>
      </ul>

      <h2>Evaluacion</h2>
      <ul>
        <li>Participacion estudiantil.</li>
        <li>Cumplimiento del cronograma.</li>
        <li>Impacto en convivencia y liderazgo.</li>
      </ul>
    </PageSection>
  );
}
