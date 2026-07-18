import type { Metadata } from "next";
import { Archivo, Cormorant_Garamond } from "next/font/google";
import "../styles/globals.css";

const archivo = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Black Angus République | Restaurant Paris 11e",
  description:
    "Restaurant spécialisé en viande Black Angus, avenue de la République, Paris 11e.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${archivo.variable} ${cormorant.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden overflow-y-auto bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
