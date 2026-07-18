import Image from "next/image";
import { assetPath } from "@/lib/paths";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-brand">
          <Image src={assetPath("/assets/logo/logo-atlantico-studio.png")} alt="ATLÂNTICO STUDIO" width={64} height={64} />
          <span>Marketing, eventos e branding.<br />Da direção à execução.</span>
        </div>
        <a className="footer-email" href="mailto:contato@atlanticostudio.com">
          contato@atlanticostudio.com <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="shell footer-bottom">
        <span>Brasil ↔ Portugal</span>
        <a href="https://www.instagram.com/atlanticostudioo/" target="_blank" rel="noreferrer">Instagram ↗</a>
        <span>© {new Date().getFullYear()} ATLÂNTICO STUDIO</span>
      </div>
    </footer>
  );
}
