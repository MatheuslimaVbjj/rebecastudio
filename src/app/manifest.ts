import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ATLÂNTICO STUDIO",
    short_name: "ATLÂNTICO",
    description: "Estratégia, design e presença digital.",
    start_url: "/",
    display: "standalone",
    background_color: "#02070d",
    theme_color: "#02070d",
    icons: [
      {
        src: "/assets/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
