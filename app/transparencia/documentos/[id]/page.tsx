import Link from "next/link";
import PageSection from "@/components/PageSection";
import PdfViewer from "@/components/PdfViewer";
import { documentosInstitucionales } from "@/data/documentos";

type DocumentoPageProps = {
  params: Promise<{ id: string }>;
};

export default async function DocumentoPage({ params }: DocumentoPageProps) {
  const { id } = await params;
  const normalize = (value?: string) =>
    (value ?? "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const rawId = id;
  const decodedId = (() => {
    try {
      return decodeURIComponent(rawId);
    } catch {
      return rawId;
    }
  })();
  const cleanedId = decodedId.replace(/\.pdf$/i, "");

  const candidates = [rawId, decodedId, cleanedId].filter(Boolean).map(normalize);

  const documento = documentosInstitucionales.find((doc) =>
    candidates.includes(normalize(doc.id))
  );

  if (!documento) {
    return (
      <PageSection
        title="Documento no encontrado"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Transparencia", href: "/transparencia/contratacion" },
          { label: "Documentos institucionales", href: "/transparencia/documentos" },
          { label: "Documento no encontrado" },
        ]}
      >
        <p>
          No encontramos el documento solicitado. Selecciona uno del listado disponible.
        </p>
        <ul>
          {documentosInstitucionales.map((doc) => (
            <li key={doc.id}>
              <Link
                href={`/transparencia/documentos/${doc.id}`}
                className="text-institucional-azul hover:underline"
              >
                {doc.titulo}
              </Link>
            </li>
          ))}
        </ul>
      </PageSection>
    );
  }

  return (
    <PageSection
      title={documento.titulo}
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Transparencia", href: "/transparencia/contratacion" },
        { label: "Documentos institucionales", href: "/transparencia/documentos" },
        { label: documento.titulo },
      ]}
    >
      <p className="text-sm text-stone-600">{documento.descripcion}</p>
      <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
        Visualizacion en linea para lectura. La descarga y copiado estan deshabilitados en la medida posible.
      </div>
      <PdfViewer src={documento.archivo} title={documento.titulo} />
      <p className="text-sm text-stone-500 mt-4">
        Si necesita una copia del documento, solicitala por el{" "}
        <Link href="/contacto/formulario" className="text-institucional-azul hover:underline">
          formulario
        </Link>
        .
      </p>
    </PageSection>
  );
}

export function generateStaticParams() {
  return documentosInstitucionales.map((doc) => ({ id: doc.id }));
}

export const dynamicParams = false;
