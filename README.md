# Rifa GOL GLI 1995 — Trend Studio Projects Cars

Landing page mobile-first, dark mode automotivo premium, focada em conversão via WhatsApp.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui (Button, Card, Accordion)
- lucide-react
- Inter (next/font/google)

## Como rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Deploy na Vercel

```bash
npm install
npm run build
vercel --prod
```

Não precisa de variáveis de ambiente. Sem backend.

## Estrutura

```
app/
  layout.tsx        # metadata + fonts
  page.tsx          # composição da landing
  globals.css       # tailwind + base styles
components/
  ui/               # shadcn primitives (button, card, accordion)
  Header.tsx
  Hero.tsx
  CarSection.tsx
  HowItWorks.tsx
  PricingCallout.tsx
  RulesAccordion.tsx
  FinalCTA.tsx
  Footer.tsx
  WhatsAppButton.tsx
lib/
  utils.ts          # cn() + WhatsApp helpers
public/
  logo.png          # logo Trend Studio (substituir pelo arquivo real)
```

## TODOs antes de subir pra produção

1. **Trocar `public/logo.png`** pelo arquivo real (atualmente é placeholder).
2. **Adicionar fotos do GOL GLI** em `components/CarSection.tsx` (4 placeholders marcados com `/* TODO: substituir por fotos reais */`).
3. **Adicionar foto do carro no Hero** em `components/Hero.tsx` (placeholder gradient marcado com `/* TODO: trocar pela foto real do GOL GLI */`).
4. **Adicionar `public/og-image.png`** (1200×630) para preview no WhatsApp / redes sociais.

## Identidade visual (tokens)

| Token | Valor |
|---|---|
| `bg-base` | `#0A0A0A` |
| `bg-card` | `#141414` |
| `accent` | `#E10600` |
| `accent-hover` | `#FF1A0D` |
| `text-primary` | `#FFFFFF` |
| `text-secondary` | `#A1A1AA` |
| `border` | `#27272A` |

## Click-to-Chat

Todos os CTAs vão para `https://wa.me/5511940638951` com mensagem pré-preenchida.
Helper em `lib/utils.ts` (`buildWhatsAppUrl`).
