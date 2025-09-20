import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TeoShop - Seu E-commerce de Confiança",
  description:
    "Bem-vindo ao TeoShop! Um e-commerce moderno e confiável, oferecendo os melhores produtos com qualidade, segurança e rapidez na entrega.",
  keywords: [
    "TeoShop",
    "E-commerce",
    "Loja Online",
    "Comprar Online",
    "Produtos de Qualidade",
    "Ofertas",
    "Promoções",
    "Shopping",
    "Timóteo Pembele",
  ],
  authors: [{ name: "Timóteo Pembele" }],
  creator: "Timóteo Pembele",
  openGraph: {
    title: "TeoShop - Seu E-commerce de Confiança",
    description:
      "Descubra o TeoShop, a loja online com os melhores produtos, preços incríveis e uma experiência de compra rápida e segura.",
    url: "https://teoshop.com",
    siteName: "TeoShop",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TeoShop - Seu E-commerce de Confiança",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeoShop - Seu E-commerce de Confiança",
    description:
      "Descubra o TeoShop, a loja online com os melhores produtos, preços incríveis e uma experiência de compra rápida e segura.",
    creator: "@teoshop",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
