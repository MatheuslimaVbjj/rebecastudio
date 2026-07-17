import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atlanticostudio.pt";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ATLÂNTICO STUDIO — Estratégia, design e presença digital",
    template: "%s | ATLÂNTICO STUDIO",
  },
  description:
    "Estratégia, branding, sites e campanhas para transformar marcas em presenças digitais relevantes, coerentes e prontas para crescer.",
  keywords: [
    "branding",
    "marketing digital",
    "sites",
    "landing pages",
    "identidade visual",
    "estratégia de marca",
  ],
  authors: [{ name: "ATLÂNTICO STUDIO" }],
  creator: "ATLÂNTICO STUDIO",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "ATLÂNTICO STUDIO",
    title: "ATLÂNTICO STUDIO — Estratégia, design e presença digital",
    description:
      "Entre existir e ser lembrada, uma marca precisa de direção.",
    images: [
      {
        url: "/assets/images/ocean-waves-poster.jpg",
        width: 1280,
        height: 720,
        alt: "ATLÂNTICO STUDIO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATLÂNTICO STUDIO — Estratégia, design e presença digital",
    description: "Direção criativa e digital para marcas que querem atravessar o comum.",
    images: ["/assets/images/ocean-waves-poster.jpg"],
  },
  icons: {
    icon: [
      { url: "/assets/favicon/favicon.ico" },
      { url: "/assets/favicon/favicon-32.png", type: "image/png" },
    ],
    apple: "/assets/favicon/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#02070d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ATLÂNTICO STUDIO",
    url: siteUrl,
    logo: `${siteUrl}/assets/logo/logo-atlantico-studio.png`,
    description:
      "Estúdio criativo digital de estratégia, branding, sites e campanhas.",
    email: "contato@atlanticostudio.com",
    areaServed: ["BR", "PT"],
    sameAs: ["https://www.instagram.com/atlanticostudioo/"],
  };

  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
