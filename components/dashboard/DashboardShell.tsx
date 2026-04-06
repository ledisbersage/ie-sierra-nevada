"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Inicio", href: "/dashboard" },
  { label: "Certificados", href: "/dashboard/certificados" },
  { label: "Constancias", href: "/dashboard/constancias" },
  { label: "Ingreso", href: "/dashboard/ingreso" },
  { label: "Retiro", href: "/dashboard/retiro" },
  { label: "Perfil", href: "/dashboard" },
];

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/autenticacion/login");
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="border-b border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-institucional-azul/10 text-institucional-azul font-bold">
              SD
            </span>
            <div>
              <p className="text-xl font-semibold text-institucional-azul">Panel institucional</p>
              <p className="text-sm text-stone-600">Gestiona solicitudes, certificados y más.</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="inline-flex items-center justify-center rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50 transition"
            >
              {loggingOut ? "Cerrando sesión…" : "Cerrar sesión"}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <div className="sticky top-6 space-y-3">
            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <p className="text-sm font-semibold text-stone-700">Navegación</p>
              <nav className="mt-4 space-y-1">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                        active
                          ? "bg-institucional-azul/10 text-institucional-azul"
                          : "text-stone-700 hover:bg-stone-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <p className="text-sm font-semibold text-stone-700">Acciones rápidas</p>
              <div className="mt-3 grid gap-2">
                <Link
                  href="/dashboard/certificados"
                  className="block rounded-lg bg-institucional-azul px-4 py-2 text-center text-sm font-semibold text-white hover:bg-institucional-azulClaro transition"
                >
                  Solicitar certificado
                </Link>
                <Link
                  href="/dashboard/constancias"
                  className="block rounded-lg border border-stone-200 bg-white px-4 py-2 text-center text-sm font-semibold text-stone-700 hover:bg-stone-50 transition"
                >
                  Solicitar constancia
                </Link>
              </div>
            </div>
          </div>
        </aside>

        <main className="lg:col-span-9">
          <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
