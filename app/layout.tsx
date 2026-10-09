import type { Metadata } from "next";
import { Kode_Mono } from "next/font/google";
import "./globals.css";

// Fonte da identidade Edukhan (Kode Mono é uma fonte variável: 400 a 700)
const mono = Kode_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Projetos | Instituto Edukhan",
  description:
    "Conheça os seis projetos do Instituto Edukhan: educação, profissionalização e inclusão para crianças, jovens e adultos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={mono.variable}>
      <body>{children}</body>
    </html>
  );
}
