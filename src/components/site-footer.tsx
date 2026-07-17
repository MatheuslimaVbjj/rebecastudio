import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Image
            src="/assets/logo/logo-atlantico-studio.png"
            alt="ATLÂNTICO STUDIO"
            width={56}
            height={56}
          />
          <p>Estratégia, design e tecnologia para marcas que querem atravessar o comum.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:contato@atlanticostudio.com">contato@atlanticostudio.com</a>
          <a
            href="https://www.instagram.com/atlanticostudioo/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>Brasil · Portugal</span>
          <span>© {new Date().getFullYear()} ATLÂNTICO STUDIO</span>
        </div>
      </div>
    </footer>
  );
}
