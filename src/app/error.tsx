"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="status-page">
      <div>
        <span className="status-code">Algo saiu da rota</span>
        <h1>Não foi possível carregar esta experiência.</h1>
        <p>Tente novamente. Se o problema persistir, volte à página inicial.</p>
        <button className="button button-gold" type="button" onClick={reset}>
          Tentar novamente <span aria-hidden="true">↗</span>
        </button>
      </div>
    </main>
  );
}
