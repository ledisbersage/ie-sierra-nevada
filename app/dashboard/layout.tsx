import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardShell from "@/components/dashboard/DashboardShell";
import { COOKIE_NAME, getAuthConfig, isValidToken } from "@/lib/auth";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, pass } = getAuthConfig();
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value ?? "";
  const ok = token ? await isValidToken(token, user, pass) : false;

  if (!ok) {
    redirect("/autenticacion/login");
  }

  return <DashboardShell>{children}</DashboardShell>;
}
