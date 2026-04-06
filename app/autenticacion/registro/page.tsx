import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Registrarse"
      subtitle="Regístrate para solicitar acceso a contenidos y servicios exclusivos de la institución."
    >
      <RegisterForm />
    </AuthLayout>
  );
}
