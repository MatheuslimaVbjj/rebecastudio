# ATLÂNTICO STUDIO

Site institucional do ATLÂNTICO STUDIO para marketing, eventos e branding no setor de beleza. A aplicação usa Next.js, TypeScript e Tailwind CSS e possui exportação estática compatível com GitHub Pages.

## Stack

- Next.js 16 com App Router
- React 19 e TypeScript
- Tailwind CSS 4
- Formspree para recebimento do briefing
- Google Analytics opcional por variável de ambiente

## Desenvolvimento local

Requer Node.js 20.9 ou superior.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`.

## Variáveis de ambiente

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canônica usada no SEO e no sitemap |
| `NEXT_PUBLIC_BASE_PATH` | Prefixo de rota usado no GitHub Pages, como `/rebecastudio` |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Endpoint que recebe o formulário de contato |
| `NEXT_PUBLIC_GA_ID` | ID opcional do Google Analytics, como `G-XXXXXXXXXX` |

Cadastre as mesmas variáveis em **Vercel > Project Settings > Environment Variables**.

## Verificações

```bash
npm run lint
npm run typecheck
npm run build
```

## Publicação no GitHub Pages

Gere a versão estática com o caminho do repositório:

```bash
npm run build:pages
```

O conteúdo de `out/` é a versão publicável. No repositório, a exportação também é mantida na raiz para que o Pages configurado como `main / root` abra diretamente o site, em vez do README.

## Estrutura

```text
src/
├── app/          # páginas, SEO e estilos globais
├── components/   # componentes de interface e comportamento
└── data/         # conteúdo estruturado do site
public/assets/    # imagens, logotipos, favicons e vídeos
_next/ e index.html # exportação estática publicada pelo GitHub Pages
```
