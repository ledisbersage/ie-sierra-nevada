import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Gobierno escolar | Transparencia - IE Sierra Nevada",
  description: "Estructura, funciones y reglamentos internos del gobierno escolar.",
};

export default function GobiernoEscolarPage() {
  return (
    <PageSection
      title="Gobierno Escolar"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Transparencia", href: "/transparencia/contratacion" },
        { label: "Gobierno escolar" },
      ]}
    >
      <h2>Consejo Directivo</h2>
      <p>Maxima instancia de direccion institucional.</p>
      <p><strong>Integracion</strong></p>
      <ul>
        <li>Rector(a).</li>
        <li>Dos representantes de docentes.</li>
        <li>Dos representantes de padres.</li>
        <li>Un estudiante.</li>
        <li>Un egresado.</li>
        <li>Un representante del sector productivo.</li>
      </ul>
      <p><strong>Funciones generales</strong></p>
      <ul>
        <li>Adoptar PEI y Manual de Convivencia.</li>
        <li>Aprobar presupuesto institucional.</li>
        <li>Definir politicas y decisiones institucionales.</li>
        <li>Resolver conflictos de alto impacto.</li>
      </ul>

      <h2>Consejo Academico</h2>
      <p>Instancia de orientacion pedagogica y curricular.</p>
      <p><strong>Integracion</strong></p>
      <ul>
        <li>Rector(a).</li>
        <li>Coordinadores.</li>
        <li>Jefes de area.</li>
      </ul>
      <p><strong>Funciones generales</strong></p>
      <ul>
        <li>Orientar el plan de estudios.</li>
        <li>Evaluar rendimiento academico.</li>
        <li>Proponer estrategias pedagógicas.</li>
      </ul>

      <h2>Reglamentos internos (resumen)</h2>
      <ul>
        <li>Convocatoria con anticipacion, orden del dia y quorums definidos.</li>
        <li>Actas obligatorias con decisiones y compromisos.</li>
        <li>Deberes de asistencia, confidencialidad y etica.</li>
        <li>Prohibiciones por conflicto de interes o uso indebido del cargo.</li>
      </ul>

      <h2>Formatos base</h2>
      <p><strong>Acta de eleccion de organos</strong></p>
      <p>Incluye orden del dia, proceso de votacion, escrutinio y proclamacion.</p>
      <p><strong>Acta de posesion</strong></p>
      <p>Incluye juramento, miembros posesionados y firmas.</p>
    </PageSection>
  );
}
