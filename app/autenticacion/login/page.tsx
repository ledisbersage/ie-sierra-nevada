import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Ingresar"
      subtitle="Ingresa con tus credenciales para acceder a contenido exclusivo para la comunidad institucional."
    >
      <LoginForm />
    </AuthLayout>
  );
}
