# 🚀 Múza Hair - MVP Implementační Plán

> **Cíl:** Funkční e-shop pro prodej vlasových extenzí, spuštěný co nejdříve.

---

## 🎯 Co stavíme (MVP Scope)

### ✅ **MUSÍ MÍT (Týdny 1-4)**

**E-shop základ:**
- Homepage (hero, kategorie, top produkty)
- Produktový listing (PLP) s filtry
- Produktový detail (PDP) s variantami
- Košík + Checkout
- Platby (Stripe)
- Doprava (Packeta)
- Objednávkový systém

**Autentizace:**
- B2C: Email/Password + Google login
- B2B: Speciální role "kadeřnice" (tier ceny)
- Admin: Firebase Console

**i18n:**
- 🇨🇿 Čeština (primárně)
- 🇬🇧 Angličtina

**Content Management:**
- Firebase Console pro produkty
- Jednoduchý admin panel (přidat/upravit produkt)

### 🎨 **BYLO BY FAJN (Týdny 5-6)**

- AI Color-Match (upload fotek → e-mail s doporučením)
- Jednoduchý blog (články, návody)
- Kalkulačka gramáže (kolik gram potřebuješ)
- Wishlist (oblíbené produkty)

### ❌ **NEBUDEME DĚLAT (teď)**

- ❌ POS systém (showroom)
- ❌ Color Lab (in-house barvení)
- ❌ Social síť
- ❌ Vlastní backend API
- ❌ PostgreSQL ledger
- ❌ LOT tracking
- ❌ Work orders
- ❌ Ruština + Ukrajinština (začneme CZ+EN)

---

## 🏗️ Tech Stack

### Frontend
```
Framework:     Next.js 14 (App Router)
Styling:       Tailwind CSS
UI Components: shadcn/ui
Forms:         React Hook Form + Zod
i18n:          next-intl (CZ + EN)
State:         Zustand (košík, user state)
Images:        Next Image + Sharp
Hosting:       Vercel
```

### Backend (Firebase)
```
Database:      Firestore
Storage:       Firebase Storage (obrázky produktů)
Auth:          Firebase Auth (Email, Google, custom claims pro role)
Functions:     Firebase Functions (Stripe webhooks, e-maily)
Extensions:    - Stripe Payments
               - Trigger Email (Resend/SendGrid)
```

### Integrace
```
Platby:        Stripe Checkout + Payment Intents
Doprava:       Packeta API (CZ/SK)
E-maily:       Resend.com nebo SendGrid
Analytics:     Vercel Analytics + Google Analytics 4
AI (optional): Google Gemini Vision (Color-Match)
```

### Development
```
Package Manager:  pnpm
Git:              GitHub (radim-prog/muza-hair)
CI/CD:            Vercel (auto-deploy z main)
Testing:          Vitest + React Testing Library (optional)
```

---

## 📊 Firestore Struktura

### Kolekce

```typescript
// products/{productId}
{
  id: string,
  slug: string,                    // "tape-ee-q2-virgin-55-straight"
  method: "TAPE" | "ITIP" | "WEFT" | "CLIP" | ...,
  origin: "EE" | "EU",
  quality: "Q1" | "Q2" | "Q3",
  hairState: "VIRGIN" | "COLORED",
  lengthCm: 55,
  texture: "STRAIGHT" | "WAVY" | "CURLY" | ...,

  // SEO
  title: {
    cs: "Tape extenze 55cm, rovné vlasy EE",
    en: "Tape extensions 55cm, straight hair EE"
  },
  description: {
    cs: "...",
    en: "..."
  },

  // Media
  images: string[],                // URLs z Firebase Storage

  // Metadata
  createdAt: Timestamp,
  updatedAt: Timestamp,
  active: boolean,
}

// products/{productId}/variants/{variantId}
{
  id: string,
  sku: string,                     // "TAPE-EE-Q2-V-55-S07-STRAIGHT-NONE-150"
  shadeCode: "S01" | "S02" | ... | "S10",
  effect: "NONE" | "BALAYAGE" | "HIGHLIGHT" | "ROOTED",
  packG: 150,                      // gramáž balení (null = bulk)
  pricePerG: 39.90,                // Kč per gram
  stock: 500,                      // dostupné gramy (JEDNODUŠE!)
  active: boolean,
}

// orders/{orderId}
{
  id: string,
  orderNumber: "MH-2025-0001",
  userId: string,

  // Customer
  customer: {
    email: string,
    name: string,
    phone: string,
  },

  // Items
  items: [
    {
      variantId: string,
      sku: string,
      productTitle: string,
      shadeCode: "S07",
      grams: 150,
      pricePerG: 39.90,
      totalPrice: 5985,
    }
  ],

  // Totals
  subtotal: number,
  shipping: number,
  total: number,
  currency: "CZK",

  // Shipping
  shipping: {
    method: "packeta" | "bopis",
    address: {...},
    packetaPointId?: string,
    trackingNumber?: string,
  },

  // Payment
  payment: {
    method: "stripe",
    stripePaymentIntentId: string,
    status: "pending" | "paid" | "failed" | "refunded",
  },

  // Status
  status: "pending" | "paid" | "processing" | "shipped" | "delivered" | "cancelled",

  // Timestamps
  createdAt: Timestamp,
  paidAt?: Timestamp,
  shippedAt?: Timestamp,
}

// users/{userId}
{
  id: string,
  email: string,
  displayName?: string,
  role: "customer" | "salon" | "admin",

  // B2B (pro kadeřnice)
  salonInfo?: {
    name: string,
    ico: string,
    dic?: string,
    address: {...},
    tier: "bronze" | "silver" | "gold",  // -8%, -10%, -12% sleva
    verified: boolean,
  },

  // Addresses
  addresses: [
    {
      id: string,
      name: string,
      street: string,
      city: string,
      zip: string,
      country: "CZ" | "SK",
      isDefault: boolean,
    }
  ],

  createdAt: Timestamp,
}

// color_match_requests/{requestId} (volitelně - fáze 2)
{
  id: string,
  userId?: string,
  email: string,
  images: string[],                // Firebase Storage URLs
  locale: "cs" | "en",

  result?: {
    topShades: ["S07", "S06", "S08"],
    blend?: {
      shades: ["S06", "S07"],
      ratio: [70, 30],
    },
    confidence: 0.85,
    texture: "STRAIGHT",
    hairState: "VIRGIN",
  },

  status: "pending" | "processing" | "completed" | "failed",
  createdAt: Timestamp,
  processedAt?: Timestamp,
}
```

### Security Rules (Firestore)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Products - read všichni, write jen admin
    match /products/{productId} {
      allow read: if true;
      allow write: if request.auth.token.role == 'admin';

      match /variants/{variantId} {
        allow read: if true;
        allow write: if request.auth.token.role == 'admin';
      }
    }

    // Orders - read jen vlastník nebo admin, create přihlášení
    match /orders/{orderId} {
      allow read: if request.auth.uid == resource.data.userId
                  || request.auth.token.role == 'admin';
      allow create: if request.auth != null;
      allow update: if request.auth.token.role == 'admin';
    }

    // Users - read/write jen vlastník nebo admin
    match /users/{userId} {
      allow read: if request.auth.uid == userId
                  || request.auth.token.role == 'admin';
      allow write: if request.auth.uid == userId
                   || request.auth.token.role == 'admin';
    }

    // Color Match - create všichni, read jen vlastník
    match /color_match_requests/{requestId} {
      allow create: if true;
      allow read: if request.auth.uid == resource.data.userId;
      allow update: if request.auth.token.role == 'admin';
    }
  }
}
```

---

## 🎨 Design System

### Brand Paleta
```css
:root {
  /* Primary */
  --brand-burgundy: #340C0D;
  --brand-burgundy-hover: #4A1718;
  --brand-burgundy-active: #5A1B1D;

  /* Secondary */
  --brand-ivory: #DCCCC5;

  /* Neutrals */
  --neutral-900: #0F1214;
  --neutral-700: #2E2C2A;
  --neutral-500: #818183;
  --neutral-300: #BDBAB1;
  --neutral-50: #F5F2EE;
  --neutral-0: #FFFFFF;

  /* S-Swatches */
  --shade-s01: #1A1A1A;
  --shade-s02: #3B2B20;
  --shade-s03: #6A4B34;
  --shade-s04: #8C6A4F;
  --shade-s05: #B28A63;
  --shade-s06: #D1B48C;
  --shade-s07: #C2C0B5;
  --shade-s08: #E8E6E2;
  --shade-s09: #E0C27A;
  --shade-s10: #BFA684;
}
```

### Komponenty (shadcn/ui)
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add select
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add badge
npx shadcn@latest add tabs
npx shadcn@latest add toast
npx shadcn@latest add form
```

---

## 📅 Timeline (4-6 týdnů)

### Týden 1: Foundation
- [x] GitHub repo + docs
- [ ] Next.js projekt (pnpm create next-app)
- [ ] Firebase projekt + config
- [ ] Tailwind + shadcn/ui setup
- [ ] i18n setup (next-intl)
- [ ] Layout + navigace
- [ ] Design tokens

### Týden 2: Katalog
- [ ] Firestore seed (50-100 produktů)
- [ ] Homepage (hero + kategorie)
- [ ] PLP (listing + filtry)
- [ ] PDP (detail + varianty)
- [ ] Swatch selector komponenta
- [ ] Gramáž kalkulačka (helper)

### Týden 3: Checkout Flow
- [ ] Košík (Zustand store)
- [ ] Checkout page
- [ ] Firebase Auth (Email + Google)
- [ ] Stripe Checkout integrace
- [ ] Packeta API (výdejní místa)
- [ ] Order creation (Firestore)

### Týden 4: Polish & Deploy
- [ ] Admin panel (CRUD produkty)
- [ ] Potvrzovací e-maily (Resend)
- [ ] SEO (metadata, sitemap, schema.org)
- [ ] CWV optimalizace
- [ ] Firebase Security Rules
- [ ] Testing + fixes
- [ ] **DEPLOY** na Vercel

### Týden 5-6: Extensions (volitelně)
- [ ] AI Color-Match (Gemini Vision)
- [ ] Blog (MDX nebo Firestore)
- [ ] B2B registrace (salon tier ceny)
- [ ] Wishlist
- [ ] Order tracking page

---

## 💰 Náklady (měsíčně)

| Služba | Free Tier | Odhad náklady |
|--------|-----------|---------------|
| **Vercel** | 100 GB bandwidth | $0 (hobby) |
| **Firebase** | 50k reads/day, 20k writes/day | $0-20 |
| **Stripe** | N/A | 1,5% + 3 Kč/transakce |
| **Packeta** | N/A | Per shipment |
| **Resend** | 100 e-mailů/den | $0 |
| **Gemini AI** | N/A | $0.01-0.05/request |
| **TOTAL** | | **~$20-50/měsíc** |

*(100 objednávek/měsíc, 1000 visitů/den)*

---

## 🎯 MVP Success Metrics

### Launch Criteria (4 týdny)
- ✅ 50+ produktů v katalogu
- ✅ Funkční checkout flow (end-to-end)
- ✅ Stripe testovací platba funguje
- ✅ Packeta výdejní místa se načítají
- ✅ Objednávka vytvoří záznam ve Firestore
- ✅ Potvrzovací e-mail se odešle
- ✅ Lighthouse score mobile > 90

### Business Metrics (měsíc 1-3)
- Konverze > 2%
- Cart abandonment < 60%
- Page load (LCP) < 2.5s
- Zero-result search < 0.5%
- Customer support < 5 hodin/týden

---

## 🔧 Development Workflow

### Git Branches
```
main        → produkce (Vercel auto-deploy)
develop     → development build
feature/*   → nové funkce
fix/*       → bugfixy
```

### Commit Convention
```
🎉 feat: Přidána PLP stránka s filtry
🐛 fix: Oprava cenového kalkulátoru
📝 docs: Aktualizace README
🎨 style: Tailwind config pro brand barvy
♻️  refactor: Firestore utils do libs/
```

### Deploy
```bash
# Development
git push origin develop
→ Auto-deploy na https://muza-hair-dev.vercel.app

# Production
git push origin main
→ Auto-deploy na https://muza-hair.cz
```

---

## ✅ Next Steps

1. **Vytvoř Next.js projekt** (`pnpm create next-app`)
2. **Firebase setup** (projekt + konfigurace)
3. **Tailwind + shadcn/ui**
4. **Layout + navigace**
5. **Firestore seed** (prvních 10 produktů)

**Začneme?** 🚀
