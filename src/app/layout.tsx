import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atlanticostudio.pt";
const absoluteAsset = (path: string) => `${siteUrl.replace(/\/$/, "")}${path}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ATLÂNTICO STUDIO — Marketing, eventos e branding para beleza",
    template: "%s | ATLÂNTICO STUDIO",
  },
  description:
    "Marketing, branding, campanhas, eventos e credenciamento para salões, profissionais e marcas do setor de beleza no Brasil e em Portugal.",
  keywords: [
    "branding",
    "marketing digital",
    "sites",
    "landing pages",
    "identidade visual",
    "estratégia de marca",
    "eventos de beleza",
    "credenciamento de eventos",
    "marketing para salões",
  ],
  authors: [{ name: "ATLÂNTICO STUDIO" }],
  creator: "ATLÂNTICO STUDIO",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "ATLÂNTICO STUDIO",
    title: "ATLÂNTICO STUDIO — Da direção ao dia do evento",
    description: "Marketing, eventos e branding para o setor de beleza.",
    images: [
      {
        url: absoluteAsset("/assets/images/photo-eventos.jpg"),
        width: 1280,
        height: 720,
        alt: "ATLÂNTICO STUDIO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATLÂNTICO STUDIO — Marketing, eventos e branding para beleza",
    description: "Da presença digital ao credenciamento, tudo falando a mesma língua.",
    images: [absoluteAsset("/assets/images/photo-eventos.jpg")],
  },
  icons: {
    icon: [
      { url: absoluteAsset("/assets/favicon/favicon.ico") },
      { url: absoluteAsset("/assets/favicon/favicon-32.png"), type: "image/png" },
    ],
    apple: absoluteAsset("/assets/favicon/apple-touch-icon.png"),
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
    logo: absoluteAsset("/assets/logo/logo-atlantico-studio.png"),
    description:
      "Marketing, eventos, credenciamento, branding e presença digital para o setor de beleza.",
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
