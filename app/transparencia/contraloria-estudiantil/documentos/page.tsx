import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Documentos contraloria estudiantil | Transparencia - IE Sierra Nevada",
  description: "Resoluciones, actas y formatos de la contraloria estudiantil.",
};

export default function ContraloriaDocumentosPage() {
  return (
    <PageSection
      title="Documentos de Contraloria Estudiantil"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Transparencia", href: "/transparencia/contratacion" },
        { label: "Contraloria estudiantil", href: "/transparencia/contraloria-estudiantil" },
        { label: "Documentos" },
      ]}
    >
      <h2>Resolucion Rectoral (Creacion y reglamentacion)</h2>
      <p><strong>Resolucion No. ___ (___ de ______ de 2026)</strong></p>
      <p>
        Por medio de la cual se crea y se reglamenta la Contraloria Estudiantil en la Institucion
        Etnoeducativa Sierra Nevada.
      </p>
      <ul>
        <li>Crear la Contraloria Estudiantil.</li>
        <li>Definir que estara conformada por Contralor y Vicecontralor.</li>
        <li>Establecer eleccion por votacion democratica.</li>
        <li>Promover cultura de cuidado de recursos publicos.</li>
        <li>Vigencia a partir de la fecha de expedicion.</li>
      </ul>

      <h2>Funciones del Contralor y Vicecontralor</h2>
      <h3>Contralor Estudiantil</h3>
      <ul>
        <li>Promover cultura de control social y cuidado de recursos.</li>
        <li>Fomentar valores de honestidad y transparencia.</li>
        <li>Impulsar campanas de cuidado de infraestructura y equipos.</li>
        <li>Presentar recomendaciones de mejora.</li>
        <li>Entregar informes de actividades.</li>
      </ul>
      <h3>Vicecontralor Estudiantil</h3>
      <ul>
        <li>Apoyar al Contralor en sus actividades.</li>
        <li>Reemplazarlo en caso de ausencia temporal.</li>
        <li>Apoyar campanas pedagogicas.</li>
      </ul>

      <h2>Acta de posesion</h2>
      <p><strong>Acta de Posesion - Contraloria Estudiantil</strong></p>
      <p>Fecha: ___ / ___ / 2026. Hora: _____. Lugar: ____________________.</p>
      <p>
        Se reunen directivas y representantes de la comunidad educativa para la posesion del Contralor
        y Vicecontralor Estudiantil elegidos democraticamente.
      </p>
      <p><strong>Contralor Estudiantil:</strong> __________________________</p>
      <p><strong>Vicecontralor Estudiantil:</strong> _______________________</p>
      <p>Firmas: Rector(a), Contralor, Vicecontralor, Docente acompanante.</p>

      <h2>Plan de trabajo</h2>
      <p><strong>Plan de Trabajo - Contraloria Estudiantil</strong></p>
      <ul>
        <li>Campanas de cuidado de bienes publicos.</li>
        <li>Promocion del uso responsable de recursos.</li>
        <li>Socializacion sobre control social y transparencia.</li>
        <li>Apoyo a actividades institucionales.</li>
        <li>Informe anual de resultados.</li>
      </ul>

      <h2>Reglamento de Contraloria Escolar</h2>
      <ul>
        <li>Definicion y objetivos.</li>
        <li>Estructura: Contralor, Vicecontralor y docente acompanante.</li>
        <li>Requisitos para aspirar al cargo.</li>
        <li>Proceso democratico de eleccion.</li>
        <li>Periodo de un (1) ano academico.</li>
        <li>Funciones y actividades.</li>
        <li>Evaluacion del trabajo.</li>
        <li>Principios: transparencia, honestidad, participacion.</li>
      </ul>
    </PageSection>
  );
}
