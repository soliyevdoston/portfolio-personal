# Solijonov Dostonbek — Portfolio

Shaxsiy portfolio sayti. Next.js 16 (App Router) + Tailwind CSS v4.

**Live:** [soliyev.uz](https://soliyev.uz)

---

## Texnologiyalar

| Yo'nalish        | Vositalar                                       |
| ---------------- | ----------------------------------------------- |
| Framework        | Next.js 16, React 19                            |
| Stillar          | Tailwind CSS v4, tw-animate-css                 |
| Animatsiya       | Framer Motion, Motion                           |
| UI               | React Icons, Lucide React, Sonner               |
| 3D / Effektlar   | Cobe (globe), custom SVG cursor                 |
| Forma            | Telegram Bot API orqali xabar yuborish          |
| Deploy           | Vercel                                          |

---

## Loyiha tuzilishi

```
src/
├── app/                  # Next.js App Router
│   ├── layout.jsx        # Root layout — metadata, fon, header
│   ├── page.jsx          # / — Bosh sahifa
│   ├── about/page.jsx    # /about
│   ├── projects/page.jsx # /projects
│   ├── contact/page.jsx  # /contact
│   └── globals.css       # Global stillar + Tailwind
│
├── components/
│   ├── Header.jsx        # Navigatsiya + mobile menu
│   ├── Main.jsx          # Bosh sahifa kontenti
│   ├── About.jsx         # Haqimda sahifa
│   ├── Projects.jsx      # Loyihalar (Vitrina / Grid rejimi)
│   ├── Contact.jsx       # Bog'lanish + forma
│   ├── projects/
│   │   ├── GlassCards.jsx    # Vitrina rejimi — karusel
│   │   └── MasonryGrid.jsx   # Grid rejimi — kartalar
│   └── ui/               # Reusable UI komponentlar
│
├── assets/               # Loyiha rasmlari
└── lib/utils.js          # cn() helper (tailwind-merge)

public/                   # Statik fayllar (favicon, resume, sitemap)
```

---

## O'rnatish

```bash
# Bog'liqliklarni o'rnatish
npm install

# Environment fayli yaratish
cp .env.example .env
```

`.env` ichiga Telegram bot ma'lumotlarini kiriting:

```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id
```

---

## Buyruqlar

| Buyruq            | Vazifa                                     |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Development server (`http://localhost:3000`) |
| `npm run build`   | Production build                           |
| `npm start`       | Production server                          |
| `npm run lint`    | Linting tekshiruvi                         |

---

## Sahifalar

| URL          | Sahifa     | Tasvif                                    |
| ------------ | ---------- | ----------------------------------------- |
| `/`          | Bosh       | Profile, kalit tugmalar                   |
| `/about`     | Haqimda    | Tarjimai hol, falsafa                     |
| `/projects`  | Loyihalar  | Vitrina (karusel) va Grid rejimlari       |
| `/contact`   | Bog'lanish | Kontaktlar va Telegram forma              |

---

## Xususiyatlar

- **App Router** — barcha sahifalar statik prerendered (SEO uchun mukammal)
- **Mobile-first** — barcha breakpointlar uchun moslangan
- **Dark/Light** — avtomatik aniqlash + qo'lda almashtirish
- **Smooth cursor** — faqat desktop, mobilda o'chiriladi
- **Touch/swipe** — Vitrina rejimida svayp bilan navigatsiya
- **Keyboard** — `← →` strelkalar bilan navigatsiya
- **SEO** — Metadata API, JSON-LD, sitemap.xml, robots.txt, Open Graph, Twitter Cards
- **Telegram forma** — kontakt xabarlari Telegram'ga keladi
- **i18n** — `lang="uz"`, `locale: uz_UZ`

---

## SEO va Metadata

`src/app/layout.jsx` da to'liq Next.js metadata API:

- `title` + template — `"%s | Solijonov Dostonbek"`
- `description`, `keywords`, `authors`
- `openGraph` — Facebook/LinkedIn uchun
- `twitter` — Twitter Card
- `verification` — Google Search Console, Yandex
- **JSON-LD** — `Person` schema (Google Knowledge Graph uchun)
- `alternates.canonical` — har sahifa uchun

`public/sitemap.xml` va `public/robots.txt` ham tayyor.

---

## Deploy (Vercel)

1. GitHub'ga push qiling
2. Vercel dashboardda yangi loyiha qo'shing
3. Environment variables qo'shing:
   - `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN`
   - `NEXT_PUBLIC_TELEGRAM_CHAT_ID`
4. Deploy

> Build buyrug'i: `next build --webpack` (SWC native binary yo'q bo'lsa)

---

## Litsenziya

Shaxsiy portfolio loyihasi. © 2026 soliyev.uz
