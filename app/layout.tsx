import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sierranevada.edu.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Institución Etnoeducativa Sierra Nevada | Riohacha, La Guajira",
  description:
    "Institución educativa oficial en el distrito de Riohacha, La Guajira. Educación etnoeducativa para comunidades rurales en la Sierra Nevada de Santa Marta.",
  applicationName: "IE Sierra Nevada",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/icon/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/icon/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/icon/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/icon/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/icon/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/icon/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/icon/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/icon/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/icon/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/icon/favicon.ico"],
  },
  manifest: "/icon/manifest.json",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Institución Etnoeducativa Sierra Nevada",
    title: "Institución Etnoeducativa Sierra Nevada",
    description:
      "Educación etnoeducativa e intercultural para comunidades rurales de Riohacha, La Guajira.",
    images: [
      {
        url: "/logo-sierra-nevada.png",
        width: 1200,
        height: 630,
        alt: "Institución Etnoeducativa Sierra Nevada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Institución Etnoeducativa Sierra Nevada",
    description:
      "Educación etnoeducativa e intercultural para comunidades rurales de Riohacha, La Guajira.",
    images: ["/logo-sierra-nevada.png"],
  },
  other: {
    "msapplication-TileColor": "#1e5f8c",
    "msapplication-TileImage": "/icon/ms-icon-144x144.png",
    "msapplication-config": "/icon/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e5f8c",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${poppins.variable} min-h-screen flex flex-col`}>
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
