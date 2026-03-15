import PageSection from "@/components/PageSection";
import { INSTITUCION } from "@/lib/institucion";

export const metadata = {
  title: "Proyecto Educativo Comunitario (PEC) | Gestión Institucional - IE Sierra Nevada",
  description: "Proyecto Educativo Comunitario de la IE Sierra Nevada.",
};

export default function PecPage() {
  return (
    <PageSection
      title="Proyecto Educativo Comunitario (PEC)"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Gestión Institucional", href: "/gestion-institucional/pec" },
        { label: "PEC" },
      ]}
    >
      <p>
        El Proyecto Educativo Comunitario (PEC) es el documento que orienta la vida institucional de la{" "}
        {INSTITUCION.nombre}. En él se definen los principios, los objetivos y las apuestas pedagógicas y de gestión, en
        diálogo con la comunidad y el territorio.
      </p>
      <h2>Modelo institucional</h2>
      <p>
        La institución desarrolla el <strong>{INSTITUCION.modelo}</strong>, en cumplimiento de la Ley General de
        Educación, la Ley 115 de 1994 y el Decreto 804 de 1995 (atención educativa para grupos étnicos). El PEC
        recoge la concepción integral de vida y gestión de saberes propios de los pueblos indígenas, comunidades
        afrocolombianas y demás grupos étnicos, orientado a reafirmar la identidad y la interculturalidad.
      </p>
      <h2>Enfoque etnoeducativo</h2>
      <p>
        El PEC integra el fortalecimiento de la identidad cultural, los saberes tradicionales, la relación con el
        territorio y el respeto por la diversidad. Atiende a comunidades Afrocolombianas, Wiwa, Kogui, Wayuu, Arahuaco,
        mestizas y otras. Este marco guía el currículo, los proyectos pedagógicos y la gestión en las sedes.
      </p>
      <h2>Niveles y jornadas</h2>
      <p>
        La institución ofrece {INSTITUCION.niveles}, en carácter {INSTITUCION.caracter}, con jornadas de {INSTITUCION.jornadas}.
        Código DANE: {INSTITUCION.codigoDane}. NIT: {INSTITUCION.nit}.
      </p>
      <h2>Participación comunitaria</h2>
      <p>
        La construcción y actualización del PEC involucra a la comunidad educativa en los espacios previstos por la
        normativa. Para consultar el documento completo puede acudir a la institución o revisar la sección de
        Transparencia / Documentos institucionales cuando esté publicado.
      </p>
    </PageSection>
  );
}
