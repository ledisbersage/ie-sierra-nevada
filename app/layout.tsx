import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Institución Etnoeducativa Sierra Nevada | Riohacha, La Guajira",
  description:
    "Institución educativa oficial en el distrito de Riohacha, La Guajira. Educación etnoeducativa para comunidades rurales en la Sierra Nevada de Santa Marta.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
