import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { MetaPixel } from "@/components/meta-pixel";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trend Studio Projects Cars · Rifas de Carros",
  description:
    "Concorra a carros selecionados, originais e legalizados. Sorteios pela Loteria Federal. Entre no grupo do WhatsApp e fique por dentro.",
  openGraph: {
    title: "Trend Studio Projects Cars · Rifas de Carros",
    description:
      "Carros originais e legalizados. Sorteios pela Loteria Federal. Entre no grupo do WhatsApp.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-base font-sans antialiased">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
