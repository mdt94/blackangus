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

const siteUrl = "https://www.blackangus-republique.fr";

const title = "Black Angus République | Steakhouse de luxe à Paris";
const description =
  "Steakhouse gastronomique à Paris 11e. Viande Black Angus maturée, grillée à la perfection, sauces maison et desserts — Avenue de la République.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Black Angus République",
  },
  description,
  keywords: [
    "steakhouse Paris",
    "Black Angus",
    "restaurant République",
    "viande maturée",
    "restaurant gastronomique Paris 11e",
    "réservation restaurant Paris",
  ],
  authors: [{ name: "Black Angus République" }],
  creator: "Black Angus République",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Black Angus République",
    title,
    description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1536,
        height: 905,
        alt: "Black Angus République — pièce de bœuf et frites servies à table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: siteUrl,
  },
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
