# 🎨 Múza Hair

> **E-shop pro vlasové extenze s AI Color-Match, POS systémem a in-house Color Lab**

[![Tech Stack](https://img.shields.io/badge/Next.js-14+-black?style=flat&logo=next.js)](https://nextjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-blue?style=flat&logo=postgresql)](https://www.postgresql.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)

---

## 🌟 Přehled

Múza Hair je **komplexní multi-channel platforma** pro prodej vlasových extenzí s pokročilým skladovým systémem, AI nástroji pro výběr odstínu a in-house Color Lab pro vlastní barvení vlasů.

### 🎯 Klíčové vlastnosti

- **🛒 E-shop**: Prodej po gramech (20-200g), 4 jazyky (CZ/EN/RU/UKR)
- **🤖 AI Color-Match**: Analýza fotek zákazníka → doporučení odstínů + blendů
- **🎨 In-house Color Lab**: Vlastní barvení, sledování receptů, Hair Passport™
- **💼 POS systém**: PWA pro showroom s čtečkou kódů + BT váhou
- **📦 Sklad**: Ledger systém, rezervace s TTL, Gram-Lock tolerance
- **📱 Social Blog**: Feed jako sociální síť (Before/After, UGC)
- **🌍 B2B portál**: Pro kadeřnice v EU s tier cenami

---

## 🏗️ Architektura

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                              │
│  Next.js 14+ (SSR/ISR) + Tailwind + TypeScript              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  E-shop  │  │   POS    │  │  Social  │  │   B2B    │   │
│  │          │  │   PWA    │  │   Blog   │  │  Portal  │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                     BACKEND API                              │
│          Node.js/NestJS nebo Python/FastAPI                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │Inventory │  │  Orders  │  │ Payments │  │ Shipping │   │
│  │  Search  │  │ColorMatch│  │ColorLab  │  │  Social  │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    DATA LAYER                                │
│  ┌──────────────────────┐      ┌────────────────────────┐  │
│  │   PostgreSQL 15+     │      │  Meilisearch / Elastic │  │
│  │  (Ledger systém)     │      │   (Full-text search)   │  │
│  └──────────────────────┘      └────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 📊 Taxonomie

### 10 S-odstínů (standardizovaná paleta)

| Kód  | Název             | HEX     | RGB           |
|------|-------------------|---------|---------------|
| S01  | Černá             | #1A1A1A | 26,26,26      |
| S02  | Tmavě hnědá       | #3B2B20 | 59,43,32      |
| S03  | Středně hnědá     | #6A4B34 | 106,75,52     |
| S04  | Světle hnědá      | #8C6A4F | 140,106,79    |
| S05  | Tmavá blond       | #B28A63 | 178,138,99    |
| S06  | Přírodní blond    | #D1B48C | 209,180,140   |
| S07  | Popelavá blond    | #C2C0B5 | 194,192,181   |
| S08  | Platinová blond   | #E8E6E2 | 232,230,226   |
| S09  | Medová blond      | #E0C27A | 224,194,122   |
| S10  | Bronde/Beige      | #BFA684 | 191,166,132   |

### Další dimenze
- **Metoda**: BULK, TAPE, ITIP, UTIP, NANO, WEFT, CLIP
- **Délka**: 35–85 cm (krok 5 cm)
- **Textura**: Rovné, Mírně vlnité, Vlnité, Kudrnaté, Afro
- **Stav**: Virgin / Colored
- **Effect**: NONE, HIGHLIGHT, BALAYAGE, ROOTED
- **Kvalita**: Q1, Q2, Q3
- **Původ**: EE (Eastern Europe), EU

### SKU formát
```
METHOD-ORIGIN-QUALITY-STATE-LEN-SHADE-TEXTURE-EFFECT-PACKG-SERIAL
Příklad: TAPE-EE-Q2-V-55-S07-STRAIGHT-NONE-150-L237
```

---

## 🚀 Technologie

### Frontend
- **Framework**: Next.js 14+ (App Router, SSR/ISR)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form + Zod
- **State**: Zustand / React Context
- **i18n**: next-intl (CZ/EN/RU/UKR)

### Backend
- **Runtime**: Node.js 20+ / Python 3.11+
- **Framework**: NestJS / FastAPI (modulární monolit)
- **ORM**: Prisma / TypeORM / SQLAlchemy
- **Validace**: Zod / Pydantic
- **API**: REST + tRPC (volitelně)

### Databáze & Search
- **RDBMS**: PostgreSQL 15+ (ledger systém pro pohyby zásob)
- **Search**: Meilisearch nebo Elasticsearch
- **Cache**: Redis (volitelně)

### Platby & Doprava
- **Payments**: Stripe (Payment Intent, 3DS2, webhooks)
- **Shipping**: Packeta API (Zásilkovna CZ/SK)

### AI & ML
- **Color-Match**: OpenAI Vision / Google Gemini Vision
- **Image Processing**: Sharp, ColorThief

### POS Hardware
- **Čtečka kódů**: HID compatible (QR + Code128)
- **Váha**: Bluetooth (polling 2–4 Hz)

---

## 📂 Struktura projektu

```
muza-hair/
├── apps/
│   ├── web/              # Next.js e-shop (frontend)
│   ├── pos/              # PWA pro POS terminál
│   └── admin/            # Admin panel (Color Lab, B2B)
├── packages/
│   ├── api/              # Backend API (NestJS/FastAPI)
│   ├── database/         # Prisma schema, migrations
│   ├── ui/               # Shared UI components
│   └── types/            # Shared TypeScript types
├── docs/
│   ├── BUILD_SPEC.md     # Kompletní build specifikace
│   ├── DATABASE.md       # DB schéma a views
│   ├── API.md            # OpenAPI dokumentace
│   └── COLOR_LAB.md      # Color Lab workflow
└── scripts/
    ├── seed/             # Data seeding
    └── import/           # CSV/JSON import utils
```

---

## 🎯 Performance cíle

| Metrika       | Cíl         | Měření             |
|---------------|-------------|--------------------|
| **LCP**       | < 2.5 s     | Core Web Vitals    |
| **INP**       | < 200 ms    | Core Web Vitals    |
| **CLS**       | < 0.1       | Core Web Vitals    |
| **API Read**  | < 250 ms    | p95 latency        |
| **API Write** | < 600 ms    | p95 latency        |
| **Search**    | < 150 ms    | Typeahead response |

---

## 🔐 Bezpečnost

- ✅ Idempotency keys na všech write API
- ✅ Row-level locks při potvrzení rezervací
- ✅ Trigger: zákaz negativního stavu skladu
- ✅ TTL na rezervace (5–10 min, cron cleanup)
- ✅ HTTPS only, CORS whitelisting
- ✅ Rate limiting (50 requests/den/user)
- ✅ Input validace (Zod/Pydantic)

---

## 📝 Licence

© 2025 Múza Hair. Všechna práva vyhrazena.

---

## 🤝 Kontakt

**Projekt**: Múza Hair
**Build Spec verze**: 2.0
**Datum**: 2025-01-23
