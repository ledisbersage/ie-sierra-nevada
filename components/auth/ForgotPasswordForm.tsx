"use client";

import { useState } from "react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate network latency.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-institucional-azul">Recuperar contraseña</h1>
        <p className="text-sm text-stone-600 mt-1">
          Ingresa el correo asociado a tu cuenta y te enviaremos un enlace para restablecer tu contraseña.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-lg bg-emerald-50 border border-emerald-100 px-4 py-4 text-sm text-emerald-700">
          Hemos enviado un correo electrónico con instrucciones para restablecer tu contraseña. Revisa tu bandeja de entrada.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-stone-700">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 focus:border-institucional-azul focus:ring-institucional-azul/30"
              placeholder="tu@correo.com"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-institucional-azul px-4 py-3 text-white font-semibold hover:bg-institucional-azulClaro transition"
          >
            {loading ? "Enviando…" : "Enviar correo"}
          </button>
        </form>
      )}
    </div>
  );
}
