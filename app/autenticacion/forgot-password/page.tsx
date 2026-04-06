import AuthLayout from "@/components/auth/AuthLayout";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Recuperar contraseña"
      subtitle="Te enviaremos un correo con instrucciones para restablecer tu contraseña."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
