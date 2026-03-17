import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Contraloria estudiantil | Transparencia - IE Sierra Nevada",
  description: "Definicion, objetivos, eleccion y funciones de la contraloria estudiantil.",
};

export default function ContraloriaEstudiantilPage() {
  return (
    <PageSection
      title="Contraloria Estudiantil"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Transparencia", href: "/transparencia/contratacion" },
        { label: "Contraloria estudiantil" },
      ]}
    >
      <p>
        El Contralor Estudiantil es un estudiante elegido democraticamente por sus companeros para
        promover la cultura del control social, la transparencia y el buen uso de los recursos publicos
        en la institucion.
      </p>

      <h2>Objetivos</h2>
      <ul>
        <li>Promover honestidad, responsabilidad y transparencia.</li>
        <li>Fomentar la participacion democratica.</li>
        <li>Desarrollar cultura de control social.</li>
        <li>Incentivar el cuidado de bienes institucionales.</li>
        <li>Fortalecer la formacion ciudadana.</li>
      </ul>

      <h2>Quien puede ser Contralor Estudiantil</h2>
      <ul>
        <li>Estudiante matriculado en la institucion.</li>
        <li>Preferiblemente de grados superiores (9, 10 u 11).</li>
        <li>Buen comportamiento y liderazgo.</li>
        <li>Sin sanciones disciplinarias graves.</li>
        <li>Presenta propuesta o plan de trabajo.</li>
      </ul>

      <h2>Eleccion</h2>
      <ol>
        <li>Convocatoria a estudiantes.</li>
        <li>Inscripcion de candidatos.</li>
        <li>Presentacion de propuestas o campanas.</li>
        <li>Jornada de votacion.</li>
        <li>Escrutinio y proclamacion.</li>
      </ol>

      <h2>Funciones principales</h2>
      <ul>
        <li>Promover el cuidado de los bienes de la institucion.</li>
        <li>Fomentar la cultura de la transparencia.</li>
        <li>Vigilar el uso de recursos institucionales sin interferir en la administracion.</li>
        <li>Presentar recomendaciones de mejora.</li>
        <li>Realizar campanas pedagogicas.</li>
        <li>Presentar informes de actividades.</li>
      </ul>

      <h2>Principios</h2>
      <ul>
        <li>Transparencia.</li>
        <li>Honestidad.</li>
        <li>Responsabilidad.</li>
        <li>Participacion.</li>
        <li>Respeto por lo publico.</li>
      </ul>

      <h2>Importancia</h2>
      <ul>
        <li>Forma estudiantes con sentido de responsabilidad social.</li>
        <li>Promueve control ciudadano desde la escuela.</li>
        <li>Incentiva el cuidado de los recursos publicos.</li>
        <li>Desarrolla liderazgo estudiantil.</li>
      </ul>

      <h2>Normatividad relacionada</h2>
      <ul>
        <li>Ley 115 de 1994.</li>
        <li>Decreto 1860 de 1994.</li>
        <li>Decreto 1075 de 2015.</li>
        <li>Ordenanzas y lineamientos territoriales de contraloria.</li>
      </ul>
    </PageSection>
  );
}
