"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

const HIDE_LAYOUT_PATHS = ["/autenticacion", "/convocatorias/docentes/admin"];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideShell = HIDE_LAYOUT_PATHS.some((path) => pathname.startsWith(path));

  return (
    <>
      {!hideShell && <TopBar />}
      {!hideShell && <Header />}
      {children}
      {!hideShell && <Footer />}
    </>
  );
}
