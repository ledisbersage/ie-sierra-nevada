import { Suspense } from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import VerifyEmail from "@/components/auth/VerifyEmail";

export default function VerifyEmailPage() {
  return (
    <AuthLayout
      title="Verificar correo"
      subtitle="Confirma tu dirección para completar el registro y acceder al panel institucional."
    >
      <Suspense
        fallback={
          <div className="rounded-xl bg-white shadow-sm border border-stone-200 p-6 text-sm text-stone-600">
            Verificando…
          </div>
        }
      >
        <VerifyEmail />
      </Suspense>
    </AuthLayout>
  );
}
