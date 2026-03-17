"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export type NewsItem = {
  title: string;
  excerpt: string;
  href: string;
  image: string;
};

type NewsSliderProps = {
  items: readonly NewsItem[];
  autoPlayMs?: number;
};

export default function NewsSlider({ items, autoPlayMs = 6500 }: NewsSliderProps) {
  const slides = useMemo(() => items.filter(Boolean), [items]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayMs);
    return () => clearInterval(id);
  }, [slides.length, autoPlayMs]);

  if (!slides.length) {
    return null;
  }

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-white/80 border-b border-white/40">
        <p className="text-sm font-semibold text-institucional-azul">Noticias nacionales y locales</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
            className="w-8 h-8 rounded-full border border-stone-200 text-stone-500 hover:text-institucional-azul hover:border-institucional-azul/40 transition"
            aria-label="Noticia anterior"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
            className="w-8 h-8 rounded-full border border-stone-200 text-stone-500 hover:text-institucional-azul hover:border-institucional-azul/40 transition"
            aria-label="Noticia siguiente"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative h-56">
        {slides.map((item, slideIndex) => (
          <div
            key={item.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={item.image} alt={item.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="text-sm uppercase tracking-wide text-white/80">Comunidad educativa</p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 space-y-3 bg-white/90">
        <p className="text-sm text-stone-600">{slides[index].excerpt}</p>
        <Link href={slides[index].href} className="text-sm font-semibold text-institucional-azul hover:underline">
          Ver noticia completa →
        </Link>
        <div className="flex items-center gap-2">
          {slides.map((_, dotIndex) => (
            <button
              key={`dot-${dotIndex}`}
              type="button"
              onClick={() => setIndex(dotIndex)}
              className={`h-2.5 rounded-full transition-all ${
                dotIndex === index ? "w-8 bg-institucional-azul" : "w-2.5 bg-stone-300"
              }`}
              aria-label={`Ir a noticia ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
