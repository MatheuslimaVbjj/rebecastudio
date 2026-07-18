import type { MetadataRoute } from "next";
import { assetPath, basePath } from "@/lib/paths";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ATLÂNTICO STUDIO",
    short_name: "ATLÂNTICO",
    description: "Marketing, eventos e branding para o setor de beleza.",
    start_url: `${basePath || ""}/`,
    display: "standalone",
    background_color: "#02070d",
    theme_color: "#02070d",
    icons: [
      {
        src: assetPath("/assets/favicon/apple-touch-icon.png"),
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
