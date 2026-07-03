import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Black Angus République | Restaurant Gastronomique Paris",
  description:
    "Restaurant gastronomique d'exception spécialisé en viande Black Angus. Avenue de la République, Paris 11e.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden overflow-y-auto bg-black text-neutral-200">
        {children}
      </body>
    </html>
  );
}
