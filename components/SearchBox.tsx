"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { BUSQUEDA_ITEMS } from "@/data/busqueda";
import { sedes } from "@/data/sedes";
import { documentosInstitucionales } from "@/data/documentos";

type SearchBoxProps = {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  maxResults?: number;
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

export default function SearchBox({
  placeholder = "Noticias, sedes, procesos...",
  className = "flex items-center gap-2",
  inputClassName = "flex-1 px-3 py-2 rounded-lg border border-stone-200 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-institucional-azulClaro/50",
  buttonClassName = "px-4 py-2 rounded-lg bg-institucional-verde text-white text-sm font-medium hover:bg-institucional-verdeClaro transition",
  maxResults = 8,
}: SearchBoxProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = useMemo(() => {
    const dynamicItems = [
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
    return [...BUSQUEDA_ITEMS, ...dynamicItems];
  }, []);

  const results = useMemo(() => {
    const q = normalize(query);
    if (!q) return [];
    return items
      .filter((item) => {
        const haystack = normalize(`${item.title} ${item.description ?? ""} ${item.href}`);
        return haystack.includes(q);
      })
      .slice(0, maxResults);
  }, [items, maxResults, query]);

  const goTo = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (results[activeIndex]) {
      goTo(results[activeIndex].href);
      return;
    }
    router.push(`/buscar?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="relative">
      <form
        className={className}
        onSubmit={onSubmit}
        onFocus={() => query && setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
      >
        <input
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
            setActiveIndex(0);
          }}
          onKeyDown={(event) => {
            if (!open || results.length === 0) return;
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActiveIndex((prev) => (prev + 1) % results.length);
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
            } else if (event.key === "Escape") {
              setOpen(false);
            }
          }}
          placeholder={placeholder}
          className={inputClassName}
          aria-label="Buscar"
          autoComplete="off"
        />
        <button type="submit" className={buttonClassName}>
          Buscar
        </button>
      </form>

      {open && results.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 rounded-xl border border-stone-200 bg-white shadow-lg z-20">
          <ul className="max-h-72 overflow-auto">
            {results.map((item, index) => (
              <li key={`${item.href}-${index}`}>
                <button
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => goTo(item.href)}
                  className={`w-full text-left px-4 py-3 hover:bg-stone-50 ${
                    index === activeIndex ? "bg-stone-50" : ""
                  }`}
                >
                  <div className="font-semibold text-institucional-azul">{item.title}</div>
                  <div className="text-xs text-stone-500">{item.href}</div>
                </button>
              </li>
            ))}
          </ul>
          <div className="px-4 py-2 border-t border-stone-200 text-xs text-stone-500">
            Presiona Enter para ir o sigue escribiendo.
          </div>
        </div>
      )}
    </div>
  );
}
