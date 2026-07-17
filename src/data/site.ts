export const navigation = [
  { label: "O que muda", href: "#transformacao" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
];

export const services = [
  {
    number: "01",
    title: "Marca & posicionamento",
    short: "Para parar de competir só por preço.",
    headline: "Uma marca que explica por que você é a escolha certa.",
    description:
      "Organizamos estratégia, discurso e identidade para que o mercado entenda seu valor antes mesmo da primeira conversa.",
    deliverables: ["Estratégia de marca", "Identidade visual", "Tom de voz", "Direção criativa"],
    image: "/assets/images/case-project-brand.svg",
    accent: "coral",
  },
  {
    number: "02",
    title: "Sites que vendem valor",
    short: "Para transformar visita em próxima ação.",
    headline: "Um site bonito é pouco. Ele precisa conduzir decisões.",
    description:
      "Desenhamos a jornada, escrevemos a mensagem e desenvolvemos a experiência para tornar sua oferta clara, desejável e simples de contratar.",
    deliverables: ["Estratégia de conversão", "UX e UI", "Copy completa", "Desenvolvimento"],
    image: "/assets/images/case-project-landing.svg",
    accent: "aqua",
  },
  {
    number: "03",
    title: "Conteúdo com direção",
    short: "Para sair do calendário sem estratégia.",
    headline: "Menos volume. Mais reconhecimento em cada publicação.",
    description:
      "Criamos um sistema editorial que conecta assunto, estética e oferta para sua presença digital construir memória — não apenas alcance.",
    deliverables: ["Pilares editoriais", "Sistema visual", "Roteiros", "Campanhas de conteúdo"],
    image: "/assets/images/case-project-campaign.svg",
    accent: "lime",
  },
  {
    number: "04",
    title: "Campanhas & lançamentos",
    short: "Para colocar uma oferta em movimento.",
    headline: "Da ideia ao clique, tudo falando a mesma língua.",
    description:
      "Conectamos conceito, criativos, landing page e mídia para lançar com consistência e aprender rápido com a resposta do público.",
    deliverables: ["Conceito de campanha", "Criativos", "Landing page", "Plano de ativação"],
    image: "/assets/images/case-brand-mockup.svg",
    accent: "blue",
  },
] as const;

export const projects = [
  {
    number: "01",
    category: "Identidade & posicionamento",
    title: "Uma presença visual capaz de sustentar um novo patamar de valor.",
    image: "/assets/images/case-project-brand.svg",
    alt: "Conceito de identidade visual desenvolvido pelo ATLÂNTICO STUDIO",
    tags: ["Estratégia", "Brand system", "Direção de arte"],
  },
  {
    number: "02",
    category: "Experiência & conversão",
    title: "Uma jornada digital que transforma complexidade em escolha simples.",
    image: "/assets/images/case-project-landing.svg",
    alt: "Conceito de experiência digital desenvolvido pelo ATLÂNTICO STUDIO",
    tags: ["UX/UI", "Copy", "Desenvolvimento"],
  },
  {
    number: "03",
    category: "Campanha integrada",
    title: "Uma ideia central desdobrada para gerar atenção, memória e ação.",
    image: "/assets/images/case-project-campaign.svg",
    alt: "Conceito de campanha desenvolvido pelo ATLÂNTICO STUDIO",
    tags: ["Conceito", "Conteúdo", "Performance"],
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    question: "O que o público percebe hoje?",
    description:
      "Entramos no negócio, na oferta e no contexto competitivo para encontrar o problema certo — antes de desenhar qualquer solução.",
    output: "Mapa de percepção, oportunidades e prioridades do projeto.",
  },
  {
    number: "02",
    title: "Direção",
    question: "Qual espaço a marca deve ocupar?",
    description:
      "Definimos a ideia central, a mensagem e os princípios visuais que vão orientar todas as decisões seguintes.",
    output: "Estratégia aprovada e território criativo claro.",
  },
  {
    number: "03",
    title: "Construção",
    question: "Como isso ganha forma e interação?",
    description:
      "Transformamos a direção em identidade, conteúdo e experiência digital, testando cada detalhe no contexto real de uso.",
    output: "Sistema completo, responsivo e pronto para operar.",
  },
  {
    number: "04",
    title: "Movimento",
    question: "Como a nova presença chega ao mundo?",
    description:
      "Publicamos, medimos e refinamos os pontos críticos para que a marca não termine no lançamento: ela comece ali.",
    output: "Lançamento acompanhado e próximos testes definidos.",
  },
] as const;

export const faqs = [
  {
    question: "Vocês trabalham com projetos no Brasil e em Portugal?",
    answer:
      "Sim. O processo foi desenhado para funcionar remotamente, com etapas, decisões e entregas bem documentadas.",
  },
  {
    question: "Posso contratar apenas um site?",
    answer:
      "Pode. Antes de começar, verificamos se posicionamento e mensagem já estão claros. Quando não estão, recomendamos uma etapa estratégica curta para o site não nascer apenas bonito.",
  },
  {
    question: "Quanto tempo leva um projeto?",
    answer:
      "Depende do escopo. Landing pages costumam ser mais rápidas; projetos de marca e sites completos exigem uma imersão maior. O cronograma é fechado antes do início.",
  },
  {
    question: "Vocês também cuidam de conteúdo e campanhas?",
    answer:
      "Sim. Podemos criar o sistema de conteúdo, campanhas de lançamento e os desdobramentos digitais necessários para colocar a nova direção em movimento.",
  },
];
