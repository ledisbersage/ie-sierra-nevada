"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registeredEmail, setRegisteredEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<null | { type: "success" | "error"; text: string }>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (!name.trim() || !email.trim() || !password) {
      setMessage({ type: "error", text: "Por favor completa todos los campos." });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Las contraseñas no coinciden." });
      return;
    }

    setLoading(true);
    // Simulamos un registro exitoso. En una implementación real, integrarías con tu backend.
    setTimeout(() => {
      setLoading(false);
      setRegisteredEmail(email);
      setMessage({
        type: "success",
        text: "Registro recibido. Revisa tu correo para completar la verificación.",
      });
    }, 800);
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-institucional-azul">Registrarse</h1>
        <p className="text-sm text-stone-600 mt-1">
          ¿Ya tienes cuenta? <Link href="/autenticacion/login" className="text-institucional-azul hover:underline">Inicia sesión</Link>
        </p>
      </div>

      {message && (
        <p className={`text-sm mb-4 ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
          {message.text}
        </p>
      )}
      {registeredEmail && (
        <p className="text-sm text-stone-600 mb-4">
          <a
            href={`/autenticacion/verify-email?email=${encodeURIComponent(registeredEmail)}`}
            className="font-semibold text-institucional-azul hover:underline"
          >
            Verificar correo electrónico
          </a>
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="register-name" className="text-sm font-medium text-stone-700">
            Nombres completos
          </label>
          <input
            id="register-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
            className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 focus:border-institucional-azul focus:ring-institucional-azul/30"
            placeholder="Tu nombre completo"
          />
        </div>

        <div>
          <label htmlFor="register-email" className="text-sm font-medium text-stone-700">
            Correo electrónico
          </label>
          <input
            id="register-email"
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
          <label htmlFor="register-password" className="text-sm font-medium text-stone-700">
            Contraseña
          </label>
          <input
            id="register-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
            className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 focus:border-institucional-azul focus:ring-institucional-azul/30"
            placeholder="********"
          />
        </div>

        <div>
          <label htmlFor="register-confirm-password" className="text-sm font-medium text-stone-700">
            Confirmar contraseña
          </label>
          <input
            id="register-confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            required
            className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 focus:border-institucional-azul focus:ring-institucional-azul/30"
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-institucional-azul px-4 py-3 text-white font-semibold hover:bg-institucional-azulClaro transition"
        >
          {loading ? "Registrando…" : "Registrarse"}
        </button>
      </form>
    </div>
  );
}
