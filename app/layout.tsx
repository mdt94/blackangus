import type { Metadata } from "next";
import localFont from "next/font/local";
import { Work_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import "../styles/globals.css";

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const erode = localFont({
  src: [
    {
      path: "./fonts/Erode-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Erode-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Erode-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://www.blackangus-republique.fr";

const title = "Black Angus République | Steakhouse de luxe à Paris";
const description =
  "Steakhouse gastronomique à Paris 11e. Viande Black Angus maturée, grillée à la perfection, sauces maison et desserts — 8 Place de la République.";

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
      className={`${workSans.variable} ${erode.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
