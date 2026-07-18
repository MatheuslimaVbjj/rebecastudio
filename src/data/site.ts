export const navigation = [
  { label: "Atuação", href: "#transformacao" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
];

export const services = [
  {
    number: "01",
    title: "Eventos & credenciamento",
    short: "Para o evento funcionar tão bem quanto parece.",
    headline: "Do primeiro convite ao último crachá, cada detalhe comunica valor.",
    description:
      "Planejamos a jornada, os materiais e a operação para feiras, workshops e premiações do setor de beleza acontecerem sem ruído — no digital e no local.",
    deliverables: ["Planejamento do evento", "Inscrição e credenciamento", "Identidade e materiais", "Produção no dia"],
    image: "/assets/images/photo-eventos.jpg",
    accent: "coral",
  },
  {
    number: "02",
    title: "Branding & identidade",
    short: "Para deixar de parecer só mais uma opção.",
    headline: "Uma marca à altura do trabalho que salões e profissionais já entregam.",
    description:
      "Transformamos posicionamento, discurso e direção visual em um sistema reconhecível, coerente e pronto para sustentar um novo patamar de percepção.",
    deliverables: ["Estratégia de marca", "Identidade visual", "Tom de voz", "Direção criativa"],
    image: "/assets/images/photo-identidade.jpg",
    accent: "aqua",
  },
  {
    number: "03",
    title: "Marketing & presença digital",
    short: "Para transformar atenção em agenda e oportunidade.",
    headline: "Site, conteúdo e social trabalhando para a mesma decisão.",
    description:
      "Criamos jornadas digitais com mensagem clara, estética própria e próximos passos simples para salões, profissionais e eventos converterem interesse em conversa.",
    deliverables: ["Sites e landing pages", "Conteúdo e social", "Copy de conversão", "Direção de ensaio"],
    image: "/assets/images/photo-landing.jpg",
    accent: "lime",
  },
  {
    number: "04",
    title: "Campanhas para marcas",
    short: "Para chegar ao profissional certo com contexto.",
    headline: "Uma campanha que conecta produto, educação e experiência.",
    description:
      "Unimos conceito, criativos, mídia e ativações para marcas de beleza entrarem na rotina de quem influencia a compra: o profissional.",
    deliverables: ["Conceito de campanha", "Criativos e roteiros", "Landing page", "Plano de ativação"],
    image: "/assets/images/photo-campanha.jpg",
    accent: "blue",
  },
] as const;

export const projects = [
  {
    number: "01",
    category: "Eventos & operação",
    title: "Credenciamento que organiza a chegada e já apresenta o padrão da marca.",
    image: "/assets/images/photo-identidade.jpg",
    alt: "Credenciais e materiais de identificação preparados para um evento",
    tags: ["Inscrição", "Identificação", "Experiência"],
  },
  {
    number: "02",
    category: "Presença digital",
    title: "Uma landing page construída para transformar interesse em inscrição.",
    image: "/assets/images/photo-landing.jpg",
    alt: "Pessoa navegando em uma experiência digital",
    tags: ["UX/UI", "Copy", "Conversão"],
  },
  {
    number: "03",
    category: "Campanha integrada",
    title: "Conteúdo, tráfego e ativação apontando para a mesma oferta.",
    image: "/assets/images/photo-campanha.jpg",
    alt: "Produção de conteúdo para campanha de beleza",
    tags: ["Conceito", "Conteúdo", "Performance"],
  },
  {
    number: "04",
    category: "Imagem & autoridade",
    title: "Ensaios empresariais com direção para construir confiança antes da conversa.",
    image: "/assets/images/photo-ensaios.jpg",
    alt: "Ensaio fotográfico empresarial",
    tags: ["Direção", "Fotografia", "Posicionamento"],
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Imersão",
    question: "O que precisa acontecer — e para quem?",
    description:
      "Entramos no negócio, no público, no formato do evento ou na oferta para localizar prioridades, riscos e oportunidades reais.",
    output: "Diagnóstico, escopo e mapa da jornada.",
  },
  {
    number: "02",
    title: "Estratégia",
    question: "Qual ideia conecta todos os pontos?",
    description:
      "Definimos mensagem, cronograma, funil de inscrição ou venda e a direção que vai orientar digital, materiais e operação.",
    output: "Plano aprovado e território criativo claro.",
  },
  {
    number: "03",
    title: "Criação",
    question: "Como isso ganha forma e desejo?",
    description:
      "Desenvolvemos identidade, site, conteúdo, campanhas e materiais físicos como partes da mesma experiência.",
    output: "Sistema completo, responsivo e pronto para operar.",
  },
  {
    number: "04",
    title: "Execução",
    question: "Como a experiência funciona no mundo real?",
    description:
      "Publicamos, testamos, acompanhamos inscrições, credenciamento e produção para ajustar o que importa enquanto ainda faz diferença.",
    output: "Lançamento acompanhado e operação organizada.",
  },
] as const;

export const faqs = [
  {
    question: "Vocês trabalham com eventos completos ou só comunicação?",
    answer:
      "Os dois. O escopo pode incluir estratégia, identidade, divulgação, inscrição, credenciamento e produção no dia, conforme a necessidade do evento.",
  },
  {
    question: "Atendem somente o setor de beleza?",
    answer:
      "Beleza é o território de especialidade da ATLÂNTICO STUDIO — salões, profissionais, marcas, feiras, workshops e premiações. Projetos próximos a esse universo também podem ser avaliados.",
  },
  {
    question: "Vocês trabalham no Brasil e em Portugal?",
    answer:
      "Sim. A estratégia e a criação funcionam remotamente, com processos documentados. A operação presencial é definida de acordo com a cidade e o formato do evento.",
  },
  {
    question: "Posso contratar apenas branding, site ou campanha?",
    answer:
      "Pode. Antes de começar, verificamos quais fundamentos já estão claros para a entrega isolada não nascer desconectada do restante da marca.",
  },
];
