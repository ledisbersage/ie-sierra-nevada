"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { mainNav, type NavItem } from "@/lib/nav";
import SearchBox from "@/components/SearchBox";

function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  if (item.href) {
    return (
      <Link
        href={item.href}
        className="block px-3 py-2 rounded-md text-institucional-azul font-medium hover:bg-institucional-azul/10 transition"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-2 rounded-md text-institucional-azul font-medium hover:bg-institucional-azul/10 transition"
      >
        {item.label}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && item.children && (
        <div className="absolute top-full left-0 mt-0 w-56 rounded-b-lg bg-white shadow-lg border border-stone-200 py-2 z-50">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2.5 text-stone-700 hover:bg-institucional-azul/10 hover:text-institucional-azul transition text-sm"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [logoError, setLogoError] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:flex-nowrap items-center md:items-center justify-between gap-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            {!logoError ? (
              <span className="relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14">
                <Image
                  src="/logo-sierra-nevada.png"
                  alt="Institución Etnoeducativa Sierra Nevada"
                  fill
                  className="object-contain"
                  sizes="56px"
                  priority
                  onError={() => setLogoError(true)}
                />
              </span>
            ) : (
              <span className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded bg-institucional-azul/10 text-institucional-azul font-bold text-lg">
                IE
              </span>
            )}
            <span className="font-bold text-institucional-azul text-base md:text-lg hidden sm:inline">
              Institución Etnoeducativa Sierra Nevada
            </span>
          </Link>
          <nav className="flex flex-wrap md:flex-nowrap items-center gap-1 md:justify-center md:flex-1">
            {mainNav.map((item) => (
              <NavDropdown key={item.label} item={item} />
            ))}
          </nav>
          <div className="shrink-0 w-full md:w-auto">
            <SearchBox
              placeholder="Buscar en la institucion"
              className="flex items-center gap-0"
              inputClassName="w-full md:w-48 px-3 py-2 border border-stone-300 rounded-l-md text-sm focus:ring-2 focus:ring-institucional-azul focus:border-institucional-azul outline-none"
              buttonClassName="p-2 bg-institucional-azul text-white rounded-r-md hover:bg-institucional-azulClaro transition"
              maxResults={6}
            />
          </div>
        </div>
      </header>
    </>
  );
}
