import Link from "next/link";

export default function NotFound() {
  return (
    <main className="status-page">
      <div>
        <span className="status-code">Erro 404</span>
        <h1>Este caminho ficou para trás.</h1>
        <p>A página que você procura não existe ou mudou de endereço.</p>
        <Link className="button button-gold" href="/">
          Voltar ao início <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}
