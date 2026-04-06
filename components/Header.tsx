"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { appRoutes, type RouteItem } from "@/lib/routes";
import SearchBox from "@/components/SearchBox";
import Icon from "@/components/ui/Icon";
import IconLink from "@/components/ui/IconLink";
import { Menu, Plus, X } from "lucide-react";

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
      <IconLink
        href={item.href}
        icon={item.icon}
        label={item.label}
        className="px-3 py-2 rounded-md text-institucional-azul font-medium hover:bg-institucional-azul/10 transition"
        iconClassName="text-institucional-azul"
        labelClassName="hidden lg:inline-flex text-sm font-semibold"
        tooltipClassName="bg-white/95 text-stone-900 border border-white/30"
        tooltipTailClassName="border-t-white/80 border-l-transparent border-r-transparent border-b-transparent"
      />
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
        <IconLink
          key={item.href}
          href={item.href}
          onClick={() => setMobileOpen(false)}
          icon={item.icon}
          label={item.label}
          className="w-full border-b border-stone-200 px-4 py-3 text-stone-700 font-medium hover:bg-stone-50"
          iconClassName="text-stone-600"
          labelClassName="inline-flex text-sm font-semibold"
          tooltipClassName="bg-white/95 text-stone-900 border border-stone-200"
          tooltipTailClassName="border-t-white/90 border-l-transparent border-r-transparent border-b-transparent"
        />
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
              <Icon icon={mobileOpen ? X : Menu} size={20} className="h-6 w-6" aria-hidden="true" />
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
                className="px-3 py-2 rounded-md border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 transition inline-flex items-center justify-center gap-1"
              >
                <Icon icon={Plus} size={16} className="text-stone-700" aria-hidden="true" />
                <span className="sr-only">Navegación</span>
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
                  <Icon icon={X} size={20} className="h-5 w-5" aria-hidden="true" />
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
