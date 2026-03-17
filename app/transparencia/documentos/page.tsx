import PageSection from "@/components/PageSection";
import Link from "next/link";
import { INSTITUCION } from "@/lib/institucion";
import { documentosInstitucionales } from "@/data/documentos";

export const metadata = {
  title: "Documentos institucionales | Transparencia - IE Sierra Nevada",
  description: "Documentos institucionales de la IE Sierra Nevada.",
};

export default function DocumentosPage() {
  return (
    <PageSection
      title="Documentos institucionales"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Transparencia", href: "/transparencia/contratacion" },
        { label: "Documentos institucionales" },
      ]}
    >
      <p>
        En esta seccion se publican o se referencian los documentos institucionales de la {INSTITUCION.nombre}:
        Proyecto Educativo Comunitario (PEC), manual de convivencia, calendario escolar, informes y otros,
        en el marco de la transparencia.
      </p>
      <h2>Datos del establecimiento</h2>
      <ul>
        <li><strong>Codigo DANE:</strong> {INSTITUCION.codigoDane}</li>
        <li><strong>NIT:</strong> {INSTITUCION.nit}</li>
        <li><strong>Creada:</strong> {INSTITUCION.creada}</li>
      </ul>
      <h2>Documentos de referencia</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {documentosInstitucionales.map((doc) => (
          <div key={doc.id} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-stone-500">{doc.categoria}</p>
            <h3 className="font-semibold text-institucional-azul mt-1">{doc.titulo}</h3>
            <p className="text-sm text-stone-600 mt-2">{doc.descripcion}</p>
            <Link
              href={`/transparencia/documentos/${doc.id}`}
              className="inline-flex mt-3 text-sm font-semibold text-institucional-azul hover:underline"
            >
              Ver documento
              <span className="ml-1 inline-flex" aria-hidden="true">
                <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                  <path d="M11.75 4.75a.75.75 0 0 0 0 1.5h2.94L5.47 15.47a.75.75 0 1 0 1.06 1.06l9.22-9.22v2.94a.75.75 0 0 0 1.5 0V4.75h-5.5Z" />
                </svg>
              </span>
            </Link>
          </div>
        ))}
      </div>

      <h2>Otros temas institucionales</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
          <h3 className="font-semibold text-institucional-azul">Asociacion de padres</h3>
          <p className="text-sm text-stone-600 mt-2">Estatutos, reglamento interno y representacion de padres.</p>
          <Link href="/transparencia/asociacion-padres" className="inline-flex mt-3 text-sm font-semibold text-institucional-azul hover:underline">
            Ver pagina
          </Link>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
          <h3 className="font-semibold text-institucional-azul">Contraloria estudiantil</h3>
          <p className="text-sm text-stone-600 mt-2">Definicion, objetivos, eleccion y funciones.</p>
          <Link href="/transparencia/contraloria-estudiantil" className="inline-flex mt-3 text-sm font-semibold text-institucional-azul hover:underline">
            Ver pagina
          </Link>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
          <h3 className="font-semibold text-institucional-azul">Documentos de contraloria</h3>
          <p className="text-sm text-stone-600 mt-2">Resoluciones, actas, plan de trabajo y reglamento.</p>
          <Link href="/transparencia/contraloria-estudiantil/documentos" className="inline-flex mt-3 text-sm font-semibold text-institucional-azul hover:underline">
            Ver pagina
          </Link>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
          <h3 className="font-semibold text-institucional-azul">Democracia escolar</h3>
          <p className="text-sm text-stone-600 mt-2">Proyecto de democracia, cronograma y estrategias.</p>
          <Link href="/transparencia/democracia-escolar" className="inline-flex mt-3 text-sm font-semibold text-institucional-azul hover:underline">
            Ver pagina
          </Link>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
          <h3 className="font-semibold text-institucional-azul">Gobierno escolar</h3>
          <p className="text-sm text-stone-600 mt-2">Estructura, funciones y reglamentos internos.</p>
          <Link href="/transparencia/gobierno-escolar" className="inline-flex mt-3 text-sm font-semibold text-institucional-azul hover:underline">
            Ver pagina
          </Link>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
          <h3 className="font-semibold text-institucional-azul">Transporte escolar 2026</h3>
          <p className="text-sm text-stone-600 mt-2">Carta, actas y acuerdos para adicion presupuestal.</p>
          <Link href="/transparencia/presupuesto-transporte" className="inline-flex mt-3 text-sm font-semibold text-institucional-azul hover:underline">
            Ver pagina
          </Link>
        </div>
      </div>
      
      <p>
        Los documentos se iran publicando segun la disponibilidad y la normativa. Para solicitar
        un documento especifico puede contactar a la institucion a traves del{" "}
        <Link href="/contacto/formulario" className="text-institucional-azul hover:underline">formulario</Link> o los
        telefonos indicados en la seccion <Link href="/contacto/telefonos" className="text-institucional-azul hover:underline">Contacto</Link>.
      </p>
    </PageSection>
  );
}
