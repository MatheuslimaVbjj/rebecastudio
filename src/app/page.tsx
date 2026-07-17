import { ContactForm } from "@/components/contact-form";
import { ExperienceLayer } from "@/components/experience-layer";
import { OceanBackground } from "@/components/ocean-background";
import { ProcessStudio } from "@/components/process-studio";
import { ProjectShowcase } from "@/components/project-showcase";
import { Reveal } from "@/components/reveal";
import { ServiceExplorer } from "@/components/service-explorer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { faqs } from "@/data/site";

const marqueeItems = ["Posicionamento", "Identidade", "Experiência digital", "Conteúdo", "Campanhas"];

export default function HomePage() {
  return (
    <>
      <ExperienceLayer />
      <SiteHeader />

      <main>
        <section className="hero" id="inicio">
          <div className="shell hero-layout">
            <Reveal className="hero-copy">
              <span className="eyebrow">Estúdio de marca & experiência digital</span>
              <h1>
                Sua marca é boa.<br />
                <em>O mercado percebe?</em>
              </h1>
              <p>
                Nós transformamos estratégia, identidade e digital em uma presença impossível de confundir — e fácil de escolher.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contato">
                  Quero reposicionar minha marca <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-ghost" href="#transformacao">
                  Entender o que muda <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="hero-proof">
                <span>Estratégia</span><i>+</i><span>Design</span><i>+</i><span>Tecnologia</span>
              </div>
            </Reveal>

            <Reveal className="hero-visual-wrap" delay={120}>
              <OceanBackground />
              <div className="floating-card card-top">
                <small>Conexão</small>
                <strong>BR ↔ PT</strong>
              </div>
              <div className="floating-card card-bottom">
                <small>Foco</small>
                <strong>Percepção → escolha</strong>
              </div>
            </Reveal>
          </div>

          <div className="marquee" aria-label="Áreas de atuação">
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <span key={`${item}-${index}`}>{item}<i>✦</i></span>
              ))}
            </div>
          </div>
        </section>

        <section className="manifesto" id="transformacao">
          <div className="shell manifesto-grid">
            <Reveal className="manifesto-label">
              <span>O problema real</span>
              <i aria-hidden="true">01</i>
            </Reveal>
            <Reveal className="manifesto-copy" delay={80}>
              <h2>Você não precisa aparecer mais. Precisa ser <em>entendido mais rápido.</em></h2>
              <p>
                Quando marca, mensagem e experiência não apontam para o mesmo lugar, o público hesita. Nós eliminamos essa distância entre o valor que você entrega e o valor que as pessoas percebem.
              </p>
              <a className="inline-cta light" href="#solucoes">
                Ver como resolvemos <span aria-hidden="true">↘</span>
              </a>
            </Reveal>
          </div>

          <div className="shell shift-grid">
            <Reveal className="shift-card" delay={0}>
              <span>Antes</span>
              <h3>“Fazemos de tudo um pouco.”</h3>
              <p>Oferta ampla, discurso parecido com o mercado e uma estética que não cria memória.</p>
            </Reveal>
            <Reveal className="shift-arrow" delay={70}><span aria-hidden="true">→</span></Reveal>
            <Reveal className="shift-card is-after" delay={140}>
              <span>Depois</span>
              <h3>“É exatamente disso que eu preciso.”</h3>
              <p>Posição clara, linguagem própria e uma jornada que conduz naturalmente à próxima ação.</p>
            </Reveal>
          </div>
        </section>

        <section className="section services-section" id="solucoes">
          <div className="shell">
            <Reveal className="section-intro split-intro">
              <div>
                <span className="section-kicker">02 · Soluções</span>
                <h2>Escolha o ponto de partida. Nós conectamos o resto.</h2>
              </div>
              <p>Clique em cada solução e veja como ela muda a percepção da marca na prática.</p>
            </Reveal>
            <Reveal delay={100}><ServiceExplorer /></Reveal>
          </div>
        </section>

        <section className="outcomes-section">
          <div className="shell outcomes-grid">
            <Reveal className="outcome-lead">
              <span className="section-kicker">O efeito</span>
              <h2>Da atenção solta à percepção que fica.</h2>
              <p>Não vendemos peças isoladas. Construímos um sistema em que cada contato reforça a mesma ideia.</p>
            </Reveal>
            <Reveal className="outcome-card outcome-a" delay={60}>
              <span>01</span><strong>Clareza</strong><p>O público entende rápido o que você faz e por que isso importa.</p>
            </Reveal>
            <Reveal className="outcome-card outcome-b" delay={120}>
              <span>02</span><strong>Coerência</strong><p>Site, conteúdo e campanha deixam de parecer negócios diferentes.</p>
            </Reveal>
            <Reveal className="outcome-card outcome-c" delay={180}>
              <span>03</span><strong>Desejo</strong><p>A forma de apresentar passa a sustentar o valor da oferta.</p>
            </Reveal>
            <Reveal className="outcome-card outcome-d" delay={240}>
              <span>04</span><strong>Movimento</strong><p>As pessoas sabem exatamente qual é o próximo passo.</p>
            </Reveal>
          </div>
        </section>

        <section className="section projects-section" id="projetos">
          <div className="shell">
            <Reveal className="section-intro projects-intro">
              <span className="section-kicker">03 · Direções de projeto</span>
              <h2>Não é sobre escolher um estilo. É sobre construir uma resposta.</h2>
              <p>Explore os conceitos abaixo. Cada direção nasce de um problema diferente — e aponta para um comportamento desejado.</p>
            </Reveal>
            <Reveal delay={100}><ProjectShowcase /></Reveal>
          </div>
        </section>

        <section className="section process-section" id="processo">
          <div className="shell">
            <Reveal className="section-intro split-intro process-intro">
              <div>
                <span className="section-kicker">04 · Como acontece</span>
                <h2>Você acompanha as decisões. Não apenas o resultado final.</h2>
              </div>
              <p>Selecione uma etapa para entender o que investigamos, construímos e entregamos em cada momento.</p>
            </Reveal>
            <Reveal delay={100}><ProcessStudio /></Reveal>
          </div>
        </section>

        <section className="fit-section">
          <div className="shell fit-grid">
            <Reveal className="fit-copy">
              <span className="section-kicker">Antes de conversar</span>
              <h2>Nosso melhor trabalho acontece com marcas dispostas a mudar de verdade.</h2>
              <a className="button button-lime" href="#contato">É o meu momento <span aria-hidden="true">↗</span></a>
            </Reveal>
            <Reveal className="fit-list" delay={120}>
              <div><span>✓</span><p>Você sente que a entrega é melhor do que a imagem atual comunica.</p></div>
              <div><span>✓</span><p>Quer uma direção própria, não uma cópia do que já funciona no setor.</p></div>
              <div><span>✓</span><p>Está preparado para decidir, participar e colocar a nova presença em movimento.</p></div>
            </Reveal>
          </div>
        </section>

        <section className="section faq-section">
          <div className="shell faq-grid">
            <Reveal className="faq-heading">
              <span className="section-kicker">05 · Sem letras pequenas</span>
              <h2>Perguntas antes do primeiro “olá”.</h2>
            </Reveal>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <Reveal key={faq.question} delay={index * 50}>
                  <details>
                    <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<i aria-hidden="true">+</i></summary>
                    <p>{faq.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="shell contact-grid">
            <Reveal className="contact-copy">
              <span className="section-kicker">06 · Próximo movimento</span>
              <h2>Se a marca mudou por dentro, está na hora de mostrar por fora.</h2>
              <p>Conte o que está acontecendo agora. Nós retornamos com perguntas, possibilidades e um próximo passo claro.</p>
              <div className="contact-direct">
                <span>Prefere ir direto ao ponto?</span>
                <a href="mailto:contato@atlanticostudio.com">contato@atlanticostudio.com ↗</a>
              </div>
            </Reveal>
            <Reveal delay={120}><ContactForm /></Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
