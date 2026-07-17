import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atlanticostudio.pt";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ATLÂNTICO STUDIO — Marcas que não passam despercebidas",
    template: "%s | ATLÂNTICO STUDIO",
  },
  description:
    "Posicionamento, identidade e experiências digitais para marcas que querem ser entendidas, lembradas e escolhidas.",
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
    title: "ATLÂNTICO STUDIO — Marcas que não passam despercebidas",
    description: "Sua marca é boa. O mercado está percebendo isso?",
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
    title: "ATLÂNTICO STUDIO — Marcas que não passam despercebidas",
    description: "Posicionamento, identidade e digital para transformar percepção em escolha.",
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
