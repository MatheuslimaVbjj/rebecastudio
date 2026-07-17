# ATLÂNTICO STUDIO

Site institucional do ATLÂNTICO STUDIO, reconstruído com Next.js, TypeScript e Tailwind CSS. A aplicação foi preparada para publicação automática na Vercel, SEO técnico e manutenção por componentes.

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
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Endpoint que recebe o formulário de contato |
| `NEXT_PUBLIC_GA_ID` | ID opcional do Google Analytics, como `G-XXXXXXXXXX` |

Cadastre as mesmas variáveis em **Vercel > Project Settings > Environment Variables**.

## Verificações

```bash
npm run lint
npm run typecheck
npm run build
```

## Publicação

Importe este repositório na Vercel. O framework é detectado automaticamente como Next.js. Cada atualização na branch principal gera um novo deploy de produção.

## Estrutura

```text
src/
├── app/          # páginas, SEO e estilos globais
├── components/   # componentes de interface e comportamento
└── data/         # conteúdo estruturado do site
public/assets/    # imagens, logotipos, favicons e vídeos
legacy-static/    # versão HTML anterior preservada para referência
```
