"use client";

import { type FormEvent, useState } from "react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmissionState>("idle");
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/xnjejeja";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setState("submitting");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Falha no envio");
      form.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  const message = {
    idle: "Sem compromisso. Primeiro entendemos se o projeto faz sentido para os dois lados.",
    submitting: "Enviando sua mensagem…",
    success: "Recebemos. O próximo movimento é nosso.",
    error: "O envio falhou. Escreva para contato@atlanticostudio.com.",
  }[state];

  return (
    <form className="contact-form" action={endpoint} method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="Novo projeto — site ATLÂNTICO" />
      <label className="honeypot" aria-hidden="true">
        Não preencha
        <input name="_gotcha" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="field-row">
        <label>
          <span>Como podemos chamar você?</span>
          <input name="name" type="text" placeholder="Seu nome" autoComplete="name" required />
        </label>
        <label>
          <span>Onde continuamos a conversa?</span>
          <input name="contact" type="text" placeholder="E-mail ou WhatsApp" autoComplete="email" required />
        </label>
      </div>

      <label>
        <span>O que precisa mudar agora?</span>
        <select name="service" defaultValue="" required>
          <option value="" disabled>Escolha o ponto de partida</option>
          <option>Minha marca parece genérica</option>
          <option>Meu site não representa meu valor</option>
          <option>Meu conteúdo não tem direção</option>
          <option>Vou lançar uma nova oferta</option>
          <option>Preciso repensar tudo junto</option>
        </select>
      </label>

      <label>
        <span>Nos dê um pouco de contexto</span>
        <textarea
          name="message"
          rows={5}
          minLength={20}
          placeholder="Momento da marca, objetivo, prazo ou o que está incomodando hoje"
          required
        />
      </label>

      <div className="form-footer">
        <button className="button button-primary" type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Enviando…" : "Abrir uma conversa"}
          <span aria-hidden="true">↗</span>
        </button>
        <p className={`form-status is-${state}`} aria-live="polite">{message}</p>
      </div>
    </form>
  );
}
