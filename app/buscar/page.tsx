import Link from "next/link";
import PageSection from "@/components/PageSection";
import SearchBox from "@/components/SearchBox";
import type { SearchItem } from "@/data/busqueda";
import { BUSQUEDA_ITEMS } from "@/data/busqueda";
import { sedes } from "@/data/sedes";
import { documentosInstitucionales } from "@/data/documentos";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

export const runtime = "edge";

export default async function BuscarPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = normalize(q);

  const dynamicItems: SearchItem[] = [
    ...sedes.map((sede) => ({
      title: `Sede: ${sede.nombre}`,
      href: `/sedes-educativas/${sede.slug}`,
      description: sede.descripcion,
    })),
    ...documentosInstitucionales.map((doc) => ({
      title: doc.titulo,
      href: `/transparencia/documentos/${doc.id}`,
      description: doc.descripcion,
    })),
  ];

  const allItems = [...BUSQUEDA_ITEMS, ...dynamicItems];

  const results = query
    ? allItems.filter((item) => {
        const haystack = normalize(
          `${item.title} ${item.description ?? ""} ${(item.tags ?? []).join(" ")}`
        );
        return haystack.includes(query);
      })
    : allItems;

  return (
    <PageSection
      title="Buscar"
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: "Buscar" },
      ]}
    >
      <SearchBox
        placeholder="Buscar sedes, documentos, procesos..."
        className="flex flex-wrap gap-2"
      />

      <div className="mt-6">
        <p className="text-sm text-stone-500">
          {query ? `Resultados para: "${q}"` : "Resultados sugeridos"}
        </p>
        <div className="mt-3 grid md:grid-cols-2 gap-4">
          {results.map((item) => (
            <Link
              key={item.href + item.title}
              href={item.href}
              className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-institucional-azul">{item.title}</h3>
              {item.description && <p className="text-sm text-stone-600 mt-2">{item.description}</p>}
            </Link>
          ))}
        </div>
        {!results.length && (
          <p className="text-sm text-stone-600 mt-4">
            No encontramos resultados. Intenta con otra palabra clave.
          </p>
        )}
      </div>
    </PageSection>
  );
}
