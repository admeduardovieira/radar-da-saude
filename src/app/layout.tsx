import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Radar da Saúde — Contas públicas da saúde no Brasil",
    template: "%s | Radar da Saúde",
  },
  description:
    "Informação pública, verificável e acessível sobre orçamentos, gastos, contratações, investimentos, emendas e responsabilidades institucionais na saúde brasileira. União, 26 estados e Distrito Federal.",
  metadataBase: new URL("https://radar-da-saude.vercel.app"),
  openGraph: {
    title: "Radar da Saúde — Contas públicas da saúde no Brasil",
    description: "Acompanhe, com rastreabilidade documental, os recursos públicos destinados à saúde no Brasil.",
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main id="conteudo" className="site-main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
