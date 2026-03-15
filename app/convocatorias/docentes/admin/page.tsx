"use client";

import { useEffect, useMemo, useState } from "react";
import PageSection from "@/components/PageSection";

type Registro = {
  id: string;
  createdAt: string;
  nombres: string;
  cedula: string;
  expedida: string;
  cargo: string;
  area: string;
  sede: string;
  tiempoServicio: string;
  email: string;
  telefono: string;
  propuesta: string;
  declaracionNombre: string;
  declaracionDocumento: string;
  observaciones?: {
    a?: boolean;
    b?: boolean;
    c?: boolean;
    d?: boolean;
    e?: boolean;
    f?: boolean;
  };
  observacionesTexto?: string;
  estado?: "pendiente" | "aprobado" | "rechazado";
  revisadoAt?: string;
  revisadoPor?: string;
};

export default function ConvocatoriaDocentesAdminPage() {
  const [auth, setAuth] = useState<"checking" | "ok" | "no">("checking");
  const [user, setUser] = useState("");
  const [authUser, setAuthUser] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState<Registro[]>([]);
  const [selected, setSelected] = useState<Registro | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const stats = useMemo(() => {
    const total = data.length;
    const pendientes = data.filter((d) => d.estado === "pendiente" || !d.estado).length;
    const aprobados = data.filter((d) => d.estado === "aprobado").length;
    const rechazados = data.filter((d) => d.estado === "rechazado").length;
    return { total, pendientes, aprobados, rechazados };
  }, [data]);

  async function checkAuth() {
    const res = await fetch("/api/auth");
    const json = await res.json();
    setAuth(json.ok ? "ok" : "no");
  }

  async function loadData() {
    const res = await fetch("/api/convocatoria-docentes");
    const json = await res.json();
    if (res.ok && json.ok) {
      setData(json.data);
      if (json.data.length) setSelected(json.data[0]);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (auth === "ok") loadData();
  }, [auth]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, pass }),
    });
    if (!res.ok) {
      setError("Credenciales inválidas.");
      return;
    }
    setAuthUser(user);
    setPass("");
    setAuth("ok");
    loadData();
  }

  async function saveReview() {
    if (!selected) return;
    setSaving(true);
    setError(null);
    const res = await fetch(`/api/convocatoria-docentes/${selected.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...selected, revisadoPor: authUser || "master" }),
    });
    if (!res.ok) {
      setError("No se pudo guardar la revisión.");
      setSaving(false);
      return;
    }
    await loadData();
    setSaving(false);
  }

  if (auth === "checking") {
    return (
      <PageSection title="Panel Convocatoria" breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Panel" }]}>
        <p>Verificando acceso...</p>
      </PageSection>
    );
  }

  if (auth === "no") {
    return (
      <PageSection title="Acceso Master" breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Panel" }]}>
        <form onSubmit={login} className="space-y-4 max-w-md">
          <div>
            <label className="text-sm font-medium text-stone-700">Usuario</label>
            <input
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-stone-700">Contraseña</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg bg-institucional-azul text-white font-semibold hover:bg-institucional-azulClaro transition"
          >
            Ingresar
          </button>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      </PageSection>
    );
  }

  return (
    <PageSection title="Panel Convocatoria Docentes" breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Panel" }]}>
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total", value: stats.total },
          { label: "Pendientes", value: stats.pendientes },
          { label: "Aprobados", value: stats.aprobados },
          { label: "Rechazados", value: stats.rechazados },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
            <p className="text-sm text-stone-500">{item.label}</p>
            <p className="text-2xl font-semibold text-institucional-azul">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[320px,1fr] gap-6">
        <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
          <h3 className="font-semibold text-institucional-azul mb-3">Inscritos</h3>
          <div className="space-y-2 max-h-[520px] overflow-auto">
            {data.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`w-full text-left rounded-lg border px-3 py-2 text-sm ${
                  selected?.id === item.id
                    ? "border-institucional-azul bg-institucional-azul/5"
                    : "border-stone-200 hover:bg-stone-50"
                }`}
              >
                <p className="font-medium">{item.nombres}</p>
                <p className="text-xs text-stone-500">{item.sede} · {item.cargo}</p>
              </button>
            ))}
          </div>
        </div>

        {selected ? (
          <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-stone-500">Nombres</p>
                <p className="font-semibold">{selected.nombres}</p>
              </div>
              <div>
                <p className="text-xs text-stone-500">Cédula</p>
                <p className="font-semibold">{selected.cedula}</p>
              </div>
              <div>
                <p className="text-xs text-stone-500">Cargo</p>
                <p className="font-semibold">{selected.cargo}</p>
              </div>
              <div>
                <p className="text-xs text-stone-500">Sede</p>
                <p className="font-semibold">{selected.sede}</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-stone-500 mb-1">Propuesta</p>
              <p className="text-sm text-stone-700">{selected.propuesta}</p>
            </div>

            <div className="rounded-xl border border-stone-200 p-4">
              <p className="text-sm font-semibold text-stone-700 mb-3">Observaciones</p>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                {[
                  { key: "a", label: "Formato de inscripción diligenciado" },
                  { key: "b", label: "Fotocopia ampliada de cédula" },
                  { key: "c", label: "Certificado de Docente" },
                  { key: "d", label: "Antecedentes judiciales" },
                  { key: "e", label: "Antecedentes fiscales" },
                  { key: "f", label: "Antecedentes disciplinarios" },
                ].map((item) => (
                  <label key={item.key} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={Boolean(selected.observaciones?.[item.key as keyof Registro["observaciones"]])}
                      onChange={(e) =>
                        setSelected((prev) =>
                          prev
                            ? {
                                ...prev,
                                observaciones: {
                                  ...prev.observaciones,
                                  [item.key]: e.target.checked,
                                },
                              }
                            : prev
                        )
                      }
                    />
                    {item.label}
                  </label>
                ))}
              </div>
              <textarea
                rows={3}
                placeholder="Observaciones adicionales"
                className="mt-3 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
                value={selected.observacionesTexto ?? ""}
                onChange={(e) =>
                  setSelected((prev) => (prev ? { ...prev, observacionesTexto: e.target.value } : prev))
                }
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {(["pendiente", "aprobado", "rechazado"] as const).map((estado) => (
                <button
                  key={estado}
                  type="button"
                  onClick={() => setSelected((prev) => (prev ? { ...prev, estado } : prev))}
                  className={`px-3 py-1.5 rounded-full border text-sm ${
                    selected.estado === estado
                      ? "border-institucional-azul bg-institucional-azul/10 text-institucional-azul"
                      : "border-stone-200 text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  {estado}
                </button>
              ))}
              <button
                type="button"
                onClick={saveReview}
                disabled={saving}
                className="ml-auto px-4 py-2 rounded-lg bg-institucional-verde text-white text-sm font-semibold disabled:opacity-60"
              >
                {saving ? "Guardando..." : "Guardar revisión"}
              </button>
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>
        ) : (
          <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
            Selecciona un inscrito para revisar.
          </div>
        )}
      </div>
    </PageSection>
  );
}
