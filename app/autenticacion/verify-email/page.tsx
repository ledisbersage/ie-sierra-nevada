import AuthLayout from "@/components/auth/AuthLayout";
import VerifyEmail from "@/components/auth/VerifyEmail";

export default function VerifyEmailPage() {
  return (
    <AuthLayout
      title="Verificar correo"
      subtitle="Confirma tu dirección para completar el registro y acceder al panel institucional."
    >
      <VerifyEmail />
    </AuthLayout>
  );
}
