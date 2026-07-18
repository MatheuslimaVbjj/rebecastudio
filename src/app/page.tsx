import Image from "next/image";
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
import { assetPath } from "@/lib/paths";

const marqueeItems = ["Eventos", "Credenciamento", "Branding", "Marketing", "Campanhas"];

export default function HomePage() {
  return (
    <>
      <ExperienceLayer />
      <SiteHeader />

      <main>
        <section className="hero" id="inicio">
          <div className="shell hero-layout">
            <Reveal className="hero-copy">
              <span className="eyebrow">Marketing • Eventos • Branding para beleza</span>
              <h1>
                Entre ser vista e ser escolhida<br />
                <em>existe uma experiência inteira.</em>
              </h1>
              <p>
                A ATLÂNTICO conecta branding, presença digital e produção de eventos para salões, profissionais e marcas de beleza no Brasil e em Portugal.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contato">
                  Planejar meu próximo movimento <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-ghost" href="#solucoes">
                  Explorar as soluções <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="hero-proof">
                <span>Salões</span><i>+</i><span>Profissionais</span><i>+</i><span>Marcas de beleza</span>
              </div>
            </Reveal>

            <Reveal className="hero-visual-wrap" delay={120}>
              <OceanBackground />
              <div className="floating-card card-top">
                <small>Conexão</small>
                <strong>BR ↔ PT</strong>
              </div>
              <div className="floating-card card-bottom">
                <small>Do digital ao presencial</small>
                <strong>Campanha → evento</strong>
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
              <span>Uma única percepção</span>
              <i aria-hidden="true">01</i>
            </Reveal>
            <Reveal className="manifesto-copy" delay={80}>
              <h2>Seu público não separa o post, o site e o evento. Ele sente se tudo pertence à <em>mesma marca.</em></h2>
              <p>
                A ATLÂNTICO atua exatamente nessa conexão: cria a direção, transforma em comunicação e leva a mesma experiência até a operação no dia do evento.
              </p>
              <a className="inline-cta light" href="#solucoes">
                Ver como resolvemos <span aria-hidden="true">↘</span>
              </a>
            </Reveal>
          </div>

          <div className="shell shift-grid">
            <Reveal className="shift-card" delay={0}>
              <span>Antes</span>
              <h3>“Cada fornecedor cuida de uma parte.”</h3>
              <p>Divulgação, inscrição, materiais e evento parecem iniciativas diferentes — e a equipe precisa costurar tudo na última hora.</p>
            </Reveal>
            <Reveal className="shift-arrow" delay={70}><span aria-hidden="true">→</span></Reveal>
            <Reveal className="shift-card is-after" delay={140}>
              <span>Depois</span>
              <h3>“Tudo fala a mesma língua.”</h3>
              <p>Uma direção central conecta marca, campanha, inscrição, credenciamento e experiência presencial.</p>
            </Reveal>
          </div>
        </section>

        <section className="section services-section" id="solucoes">
          <div className="shell">
            <Reveal className="section-intro split-intro">
              <div>
                <span className="section-kicker">02 · Soluções</span>
                <h2>Da marca ao credenciamento. Escolha onde começamos.</h2>
              </div>
              <p>Clique em cada solução para ver o que entregamos e como as frentes se conectam.</p>
            </Reveal>
            <Reveal delay={100}><ServiceExplorer /></Reveal>
          </div>
        </section>

        <section className="field-notes-section" aria-label="Atuação da ATLÂNTICO STUDIO">
          <div className="shell field-notes-heading">
            <Reveal>
              <span className="section-kicker">Trabalho no mundo real</span>
              <h2>Estratégia na tela. Organização na chegada. Presença em cada detalhe.</h2>
            </Reveal>
            <Reveal delay={80}>
              <p>Uma amostra dos pontos de contato que conectamos para a experiência não terminar no layout.</p>
            </Reveal>
          </div>
          <div className="shell field-notes-grid">
            <Reveal className="field-note field-note-tall">
              <Image src={assetPath("/assets/images/photo-identidade.jpg")} alt="Identificação e credenciamento de evento" fill sizes="(max-width: 760px) 100vw, 38vw" />
              <span>Credenciamento & identificação</span>
            </Reveal>
            <Reveal className="field-note" delay={70}>
              <Image src={assetPath("/assets/images/photo-eventos.jpg")} alt="Produção de evento para o setor de beleza" fill sizes="(max-width: 760px) 100vw, 31vw" />
              <span>Produção & experiência</span>
            </Reveal>
            <Reveal className="field-note" delay={140}>
              <Image src={assetPath("/assets/images/photo-ensaios.jpg")} alt="Ensaio empresarial com direção criativa" fill sizes="(max-width: 760px) 100vw, 31vw" />
              <span>Imagem & autoridade</span>
            </Reveal>
          </div>
        </section>

        <section className="outcomes-section">
          <div className="shell outcomes-grid">
            <Reveal className="outcome-lead">
              <span className="section-kicker">O efeito</span>
              <h2>Da divulgação solta a uma experiência que sustenta valor.</h2>
              <p>Não entregamos peças desconectadas. Construímos uma jornada em que cada contato prepara o próximo.</p>
            </Reveal>
            <Reveal className="outcome-card outcome-a" delay={60}>
              <span>01</span><strong>Autoridade</strong><p>A marca parece tão preparada quanto a entrega que existe por trás dela.</p>
            </Reveal>
            <Reveal className="outcome-card outcome-b" delay={120}>
              <span>02</span><strong>Organização</strong><p>Inscrição, materiais e operação deixam de depender de improviso.</p>
            </Reveal>
            <Reveal className="outcome-card outcome-c" delay={180}>
              <span>03</span><strong>Desejo</strong><p>Conteúdo e campanha fazem o público querer participar antes do evento começar.</p>
            </Reveal>
            <Reveal className="outcome-card outcome-d" delay={240}>
              <span>04</span><strong>Conversão</strong><p>As pessoas entendem a proposta e sabem exatamente como avançar.</p>
            </Reveal>
          </div>
        </section>

        <section className="section projects-section" id="projetos">
          <div className="shell">
            <Reveal className="section-intro projects-intro">
              <span className="section-kicker">03 · Aplicações</span>
              <h2>O mesmo padrão, do credenciamento à campanha.</h2>
              <p>Explore frentes que podem ser contratadas separadamente ou construídas como uma experiência integrada.</p>
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
              <h2>Seu próximo lançamento ou evento não precisa ser montado no improviso.</h2>
              <a className="button button-lime" href="#contato">Planejar com direção <span aria-hidden="true">↗</span></a>
            </Reveal>
            <Reveal className="fit-list" delay={120}>
              <div><span>✓</span><p>Você precisa alinhar marca, divulgação e operação em uma única direção.</p></div>
              <div><span>✓</span><p>Quer elevar a percepção de um salão, profissional, feira ou marca de beleza.</p></div>
              <div><span>✓</span><p>Prefere decisões documentadas e uma equipe acompanhando a execução.</p></div>
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
              <h2>Qual é o próximo movimento da sua marca?</h2>
              <p>Conte se você está preparando um evento, reposicionando o negócio ou lançando uma campanha. Nós retornamos com perguntas e um próximo passo claro.</p>
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
