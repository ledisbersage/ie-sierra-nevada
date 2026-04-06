"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm({ onSuccess }: { onSuccess?: () => void }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: email, pass: password }),
      });
      if (!res.ok) {
        setError("Usuario o contraseña incorrectos.");
        return;
      }
      setSuccess("Ingreso exitoso. Redirigiendo al panel...");
      setPassword("");
      onSuccess?.();
      router.push("/dashboard");
    } catch {
      setError("No se pudo conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-institucional-azul">Ingresar</h1>
        <p className="text-sm text-stone-600 mt-1">
          ¿No tienes cuenta? <a href="/autenticacion/registro" className="text-institucional-azul hover:underline">Regístrate</a>
        </p>
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600 mb-4" aria-live="polite">
          {error}
        </p>
      )}
      {success && (
        <p role="status" className="text-sm text-green-600 mb-4" aria-live="polite">
          {success}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="login-email" className="text-sm font-medium text-stone-700">
            Correo electrónico
          </label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 focus:border-institucional-azul focus:ring-institucional-azul/30"
            placeholder="tu@correo.com"
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="login-password" className="text-sm font-medium text-stone-700">
              Contraseña
            </label>
            <Link href="/autenticacion/forgot-password" className="text-sm text-institucional-azul hover:underline">
              Olvidé mi contraseña
            </Link>
          </div>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 focus:border-institucional-azul focus:ring-institucional-azul/30"
            placeholder="********"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            id="remember"
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-4 w-4 rounded border-stone-300 text-institucional-azul focus:ring-institucional-azul"
          />
          <label htmlFor="remember" className="text-sm text-stone-600">
            Recuérdame
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-institucional-azul px-4 py-3 text-white font-semibold hover:bg-institucional-azulClaro transition"
        >
          {loading ? "Ingresando…" : "Ingresar"}
        </button>
      </form>

      <div className="mt-6">
        <Link
          href="/la-institucion"
          className="inline-flex w-full items-center justify-center rounded-lg border border-institucional-azul bg-white px-4 py-3 text-sm font-semibold text-institucional-azul hover:bg-institucional-azul/10 transition"
        >
          Saber más
        </Link>
      </div>
    </div>
  );
}
