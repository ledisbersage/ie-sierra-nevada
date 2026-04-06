"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function VerifyEmail() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!email) return;
    setLoading(true);
    // Simulate verification process.
    const timeout = setTimeout(() => {
      setLoading(false);
      setVerified(true);
    }, 700);
    return () => clearTimeout(timeout);
  }, [email]);

  if (!email) {
    return (
      <div className="rounded-lg bg-red-50 border border-red-100 p-6 text-sm text-red-700">
        No se recibió un correo para verificar. Por favor regístrate nuevamente.
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-institucional-azul">Verificar correo</h1>
        <p className="text-sm text-stone-600 mt-1">Estamos verificando tu dirección de correo electrónico.</p>
      </div>

      <div className="rounded-xl bg-white shadow-sm border border-stone-200 p-6">
        {loading ? (
          <p className="text-sm text-stone-600">Verificando…</p>
        ) : verified ? (
          <div className="space-y-3">
            <p className="text-sm text-stone-700">
              ¡Correo verificado correctamente! Ahora puedes iniciar sesión usando tus credenciales.
            </p>
            <p className="text-sm text-stone-600">
              Dirección verificada: <span className="font-semibold">{email}</span>
            </p>
          </div>
        ) : (
          <p className="text-sm text-stone-600">No se pudo verificar el correo. Por favor intenta nuevamente.</p>
        )}
      </div>
    </div>
  );
}
