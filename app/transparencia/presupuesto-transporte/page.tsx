import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Adicion presupuestal transporte | Transparencia - IE Sierra Nevada",
  description: "Carta, actas y acuerdos para adicion presupuestal de transporte escolar.",
};

export default function PresupuestoTransportePage() {
  return (
    <PageSection
      title="Adicion Presupuestal para Transporte Escolar"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Transparencia", href: "/transparencia/contratacion" },
        { label: "Adicion presupuesto transporte" },
      ]}
    >
      <h2>Carta de solicitud</h2>
      <p>
        Solicitud al Consejo Directivo para aprobar la adicion al presupuesto 2026 destinada al
        transporte escolar, por dispersion geografica de sedes y necesidad de permanencia estudiantil.
      </p>

      <h2>Justificacion tecnica y financiera</h2>
      <ul>
        <li>Antecedentes de sedes rurales y distancias.</li>
        <li>Necesidad de garantizar acceso y permanencia.</li>
        <li>Impacto esperado en cobertura y continuidad.</li>
        <li>Destinacion exclusiva de recursos para transporte escolar.</li>
      </ul>

      <h2>Acta del Consejo Directivo</h2>
      <p>Incluye verificacion de quorum, presentacion, analisis y aprobacion de la adicion.</p>

      <h2>Acuerdo de aprobacion</h2>
      <p>Formaliza la adicion presupuestal y su destinacion exclusiva al servicio de transporte.</p>

      <h2>Resolucion rectoral de ejecucion</h2>
      <p>
        Ordena la ejecucion de la adicion presupuestal aprobada por el Consejo Directivo e incorpora los
        recursos al presupuesto institucional.
      </p>

      <h2>Certificacion de publicacion</h2>
      <p>Constancia de socializacion y publicacion del acuerdo ante la comunidad educativa.</p>

      <h2>Constancia de socializacion</h2>
      <p>Registro de temas tratados y decisiones adoptadas en sesion del Consejo Directivo.</p>
    </PageSection>
  );
}
