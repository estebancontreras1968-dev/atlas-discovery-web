import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atlasdiscovery.com"),
  title: "Atlas Discovery™ — Encuentra la restricción que frena tu crecimiento",
  description:
    "Atlas Discovery™ identifica la restricción dominante que está frenando el crecimiento de tu empresa y entrega un plan de acción priorizado para los próximos 90 días. Sin reuniones. Sin llamadas.",
  keywords: [
    "diagnóstico empresarial",
    "crecimiento de empresas",
    "consultoría de negocios",
    "plan de acción 90 días",
    "teoría de restricciones",
  ],
  openGraph: {
    title: "Atlas Discovery™ — Encuentra la restricción que frena tu crecimiento",
    description:
      "Un diagnóstico. Una restricción. Un plan de 90 días. Sin reuniones, sin llamadas, sin intervención humana antes del pago.",
    type: "website",
    locale: "es_CL",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
