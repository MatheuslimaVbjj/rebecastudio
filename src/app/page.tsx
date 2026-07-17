import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { OceanBackground } from "@/components/ocean-background";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { principles, processSteps, projects, services } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <OceanBackground />
      <SiteHeader />

      <main>
        <section className="hero" id="inicio">
          <div className="shell hero-grid">
            <Reveal className="hero-copy">
              <span className="eyebrow">Estratégia · Design · Tecnologia</span>
              <h1>
                Marcas relevantes não seguem a maré. <em>Criam direção.</em>
              </h1>
              <p>
                Unimos posicionamento, identidade e experiência digital para transformar valor em uma presença que as pessoas entendem, lembram e escolhem.
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href="#contato">
                  Iniciar um projeto <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#solucoes">
                  Explorar soluções <span aria-hidden="true">↓</span>
                </a>
              </div>
            </Reveal>

            <Reveal className="hero-note" delay={140}>
              <span>Estúdio criativo digital</span>
              <p>
                Do posicionamento ao lançamento, cada ponto de contato comunica o valor da marca.
              </p>
              <div className="hero-note-list">
                <small>Direção estratégica</small>
                <small>Expressão visual</small>
                <small>Conversão digital</small>
              </div>
            </Reveal>
          </div>
          <a className="scroll-marker" href="#posicionamento" aria-label="Conhecer o estúdio">
            <span>Descobrir</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="section section-deep" id="posicionamento">
          <div className="shell intro-grid">
            <Reveal>
              <span className="section-index">01 / Posicionamento</span>
            </Reveal>
            <Reveal className="intro-copy" delay={80}>
              <h2>Existe um oceano entre parecer comum e ser percebido como referência.</h2>
              <p>
                O ATLÂNTICO atua na intersecção entre estratégia, design e negócio. Construímos sistemas de presença que dão clareza à oferta, consistência à comunicação e força à decisão de compra.
              </p>
            </Reveal>
            <Reveal className="intro-aside" delay={160}>
              <strong>Para marcas em movimento</strong>
              <p>Lançamento, reposicionamento ou uma nova fase de crescimento digital.</p>
            </Reveal>
          </div>
        </section>

        <section className="section" id="solucoes">
          <div className="shell">
            <Reveal className="section-heading">
              <span className="section-index">02 / Soluções</span>
              <h2>Uma direção. Todas as disciplinas conectadas.</h2>
              <p>O visual desperta atenção. A estratégia sustenta a escolha.</p>
            </Reveal>

            <div className="service-grid">
              {services.map((service, index) => (
                <Reveal key={service.number} className="service-card" delay={index * 70}>
                  <span>{service.number}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <i aria-hidden="true">↗</i>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-deep">
          <div className="shell principle-grid">
            <Reveal className="principle-visual">
              <div className="visual-frame">
                <Image
                  src="/assets/images/case-brand-mockup.svg"
                  alt="Direção visual conceitual criada pelo ATLÂNTICO STUDIO"
                  fill
                  sizes="(max-width: 900px) 100vw, 44vw"
                />
              </div>
              <span>Direção conceitual</span>
            </Reveal>

            <div>
              <Reveal className="section-heading compact">
                <span className="section-index">03 / Princípios</span>
                <h2>Menos aparência genérica. Mais marca com atmosfera.</h2>
              </Reveal>
              <div className="principle-list">
                {principles.map((principle, index) => (
                  <Reveal key={principle.number} className="principle-item" delay={index * 70}>
                    <span>{principle.number}</span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="metodo">
          <div className="shell">
            <Reveal className="section-heading method-heading">
              <span className="section-index">04 / Método</span>
              <h2>Profundidade no pensamento. Clareza no processo.</h2>
            </Reveal>
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <Reveal key={step.number} className="process-card" delay={index * 80}>
                  <span>{step.number}</span>
                  <div className="process-line" aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-deep" id="projetos">
          <div className="shell">
            <Reveal className="section-heading projects-heading">
              <div>
                <span className="section-index">05 / Projetos</span>
                <h2>Ideias ganham forma quando cada detalhe aponta para o mesmo lugar.</h2>
              </div>
              <p>Uma seleção de direções conceituais que representa nossas áreas de atuação.</p>
            </Reveal>

            <div className="project-grid">
              {projects.map((project, index) => (
                <Reveal
                  key={project.title}
                  className={`project-card ${project.size === "large" ? "is-large" : ""}`}
                  delay={index * 80}
                >
                  <Image src={project.image} alt={project.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
                  <div className="project-overlay" />
                  <div className="project-copy">
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                    <a href="#contato">
                      Criar algo assim <i aria-hidden="true">↗</i>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="statement-section">
          <div className="shell">
            <Reveal className="statement-card">
              <span>Próximo movimento</span>
              <h2>Sua marca já tem valor. Vamos fazer o digital comunicar isso com força.</h2>
              <a className="button button-dark" href="#contato">
                Começar conversa <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="shell contact-grid">
            <Reveal className="contact-copy">
              <span className="section-index">06 / Contato</span>
              <h2>Qual é o próximo horizonte da sua marca?</h2>
              <p>
                Conte o momento do negócio e o que precisa mudar. Nós retornamos com as perguntas certas para transformar intenção em projeto.
              </p>
              <div className="contact-direct">
                <span>Prefere falar diretamente?</span>
                <a href="mailto:contato@atlanticostudio.com">contato@atlanticostudio.com</a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
