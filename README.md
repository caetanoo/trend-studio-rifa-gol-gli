# Rifa GOL GLI 1995 — Trend Studio Projects Cars

Landing page mobile-first, dark mode automotivo premium, focada em conversão via grupo do WhatsApp.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- lucide-react
- Meta Pixel + Conversions API

## Como rodar localmente

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre em `http://localhost:3000`.

## Variáveis de ambiente

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `META_ACCESS_TOKEN` | Para Conversions API | Token do Meta (somente servidor; nunca no frontend) |
| `META_TEST_EVENT_CODE` | Não | Código de teste no Gerenciador de Eventos |
| `META_API_VERSION` | Não | Default: `v21.0` |

O pixel no navegador (`PageView` e `Lead` no clique do WhatsApp) funciona sem o token. A rota `/api/meta/conversion` retorna 503 se `META_ACCESS_TOKEN` não estiver definida.

Copie `.env.example` para `.env.local` e preencha o token. Na Vercel: Project → Settings → Environment Variables.

## Deploy na Vercel

```bash
npm run build
vercel --prod
```

Conecte o repositório GitHub e configure `META_ACCESS_TOKEN` em Production.

## Meta Pixel

- Pixel ID: `955831080784054`
- `PageView` em todas as páginas ([`components/meta-pixel.tsx`](components/meta-pixel.tsx))
- `Lead` no clique do CTA ([`components/whatsapp-cta.tsx`](components/whatsapp-cta.tsx))
- Conversions API: [`app/api/meta/conversion/route.ts`](app/api/meta/conversion/route.ts)

Validação: extensão [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper) e Gerenciador de Eventos do Meta.

## Estrutura

```
app/
  layout.tsx              # metadata, fonts, Meta Pixel
  page.tsx                # landing
  api/meta/conversion/    # Conversions API
components/
  meta-pixel.tsx
  whatsapp-cta.tsx
lib/
  meta.ts
  meta-conversions.ts
  utils.ts
```

## TODOs antes de produção

1. **`public/og-image.png`** (1200×630) para preview em redes sociais
2. Regenerar `META_ACCESS_TOKEN` se o token foi exposto em chat
3. Confirmar eventos no Meta Events Manager após deploy

## Identidade visual (tokens)

| Token | Valor |
|-------|-------|
| `bg-base` | `#0A0A0A` |
| `accent` | `#E10600` |
| `accent-hover` | `#FF1A0D` |

## WhatsApp

CTA principal: grupo em [`lib/utils.ts`](lib/utils.ts) (`WHATSAPP_GROUP_URL`).
