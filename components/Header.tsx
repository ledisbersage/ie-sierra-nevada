"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { appRoutes, type RouteItem } from "@/lib/routes";
import SearchBox from "@/components/SearchBox";

function NavDropdown({ item }: { item: RouteItem }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      className="relative hidden md:block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-institucional-azul font-medium hover:bg-institucional-azul/10 transition"
      >
        <span>{item.icon}</span>
        <span>{item.label}</span>
      </Link>
    </div>
  );
}

export default function Header() {
  const [logoError, setLogoError] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const pathname = usePathname();

  const primaryNavItems = appRoutes.slice(0, 4);
  const secondaryLinks = appRoutes.slice(4);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const mobileNavItems = useMemo(
    () =>
      appRoutes.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2 border-b border-stone-200 px-4 py-3 text-stone-700 font-medium hover:bg-stone-50"
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </Link>
      )),
    [appRoutes]
  );

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:flex-nowrap items-center md:items-center justify-between gap-4 py-3">
          <div className="flex w-full items-center justify-between">
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

            <button
              type="button"
              className="md:hidden p-2 rounded-md border border-stone-200 text-stone-700 hover:bg-stone-50"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-1 md:justify-center md:flex-1">
            {primaryNavItems.map((item) => (
              <NavDropdown key={item.label} item={item} />
            ))}
            <div className="relative" onMouseLeave={() => setNavMenuOpen(false)}>
              <button
                type="button"
                onClick={() => setNavMenuOpen((v) => !v)}
                className="px-3 py-2 rounded-md border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 transition"
              >
                Navegación
              </button>
              {navMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-lg border border-stone-200 bg-white p-3 shadow-lg z-50">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-500">Categorías</p>
                  <ul className="space-y-1">
                    {secondaryLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="block rounded px-2 py-1 text-sm text-stone-700 hover:bg-stone-100"
                          onClick={() => setNavMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden md:flex shrink-0 items-center gap-2">
            <SearchBox
              placeholder="Buscar en la institucion"
              className="flex items-center gap-0"
              inputClassName="w-full md:w-48 px-3 py-2 border border-stone-300 rounded-l-md text-sm focus:ring-2 focus:ring-institucional-azul focus:border-institucional-azul outline-none"
              buttonClassName="p-2 bg-institucional-azul text-white rounded-r-md hover:bg-institucional-azulClaro transition"
              maxResults={6}
            />
          </div>
        </div>

        {mobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 bg-black/40"
              aria-label="Cerrar menú"
            />

            <div className="absolute right-0 top-0 h-full w-[80vw] max-w-xs overflow-y-auto bg-white shadow-2xl p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-lg font-bold text-institucional-azul">Navegación</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-stone-100 text-stone-700 hover:bg-stone-200"
                  aria-label="Cerrar menú"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="space-y-2">{mobileNavItems}</nav>

              <div className="mt-4">
                <SearchBox
                  placeholder="Buscar..."
                  className="flex items-center gap-0"
                  inputClassName="w-full px-3 py-2 border border-stone-300 rounded-l-md text-sm focus:ring-2 focus:ring-institucional-azul focus:border-institucional-azul outline-none"
                  buttonClassName="p-2 bg-institucional-azul text-white rounded-r-md hover:bg-institucional-azulClaro transition"
                  maxResults={6}
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
