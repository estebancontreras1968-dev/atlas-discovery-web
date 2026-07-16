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
  title: "GPS Discovery™ — Identifica la restricción dominante de tu empresa",
  description:
    "GPS Discovery™ es el sistema de inteligencia empresarial de Atlas Business Evolution™ que identifica la restricción dominante que limita el crecimiento de tu empresa. Sin llamadas, sin reuniones.",
  keywords: [
    "restricción dominante",
    "inteligencia empresarial",
    "crecimiento de empresas",
    "GPS Roadmap 90 días",
    "GPS Discovery",
  ],
  openGraph: {
    title: "GPS Discovery™ — Identifica la restricción dominante de tu empresa",
    description:
      "Tu empresa no tiene muchos problemas. Tiene una restricción dominante. GPS Discovery™ la identifica sin llamadas ni reuniones.",
    type: "website",
    locale: "es_CL",
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
