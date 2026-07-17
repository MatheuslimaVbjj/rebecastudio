"use client";

import { type FormEvent, useState } from "react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmissionState>("idle");
  const endpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
    "https://formspree.io/f/xnjejeja";

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
    idle: "Retornamos normalmente em até um dia útil.",
    submitting: "Enviando seu briefing…",
    success: "Briefing recebido. Vamos conversar em breve.",
    error: "Não foi possível enviar agora. Escreva para contato@atlanticostudio.com.",
  }[state];

  return (
    <form
      className="contact-form"
      action={endpoint}
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_subject" value="Novo briefing pelo site" />
      <label className="honeypot" aria-hidden="true">
        Não preencha
        <input name="_gotcha" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="field-row">
        <label>
          <span>Seu nome</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>E-mail ou WhatsApp</span>
          <input name="contact" type="text" autoComplete="email" required />
        </label>
      </div>

      <label>
        <span>Como podemos ajudar?</span>
        <select name="service" defaultValue="" required>
          <option value="" disabled>
            Selecione uma solução
          </option>
          <option>Branding & Identidade</option>
          <option>Site ou Landing Page</option>
          <option>Conteúdo & Social</option>
          <option>Campanhas & Growth</option>
          <option>Projeto multidisciplinar</option>
        </select>
      </label>

      <label>
        <span>Conte um pouco sobre o projeto</span>
        <textarea
          name="message"
          rows={5}
          minLength={20}
          placeholder="Momento da marca, objetivo e prazo aproximado"
          required
        />
      </label>

      <div className="form-footer">
        <button className="button button-gold" type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Enviando…" : "Enviar briefing"}
          <span aria-hidden="true">↗</span>
        </button>
        <p className={`form-status is-${state}`} aria-live="polite">
          {message}
        </p>
      </div>
    </form>
  );
}
