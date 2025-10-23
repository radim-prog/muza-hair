# 🚀 Quick Start Guide

## Přehled projektu

Múza Hair je komplexní e-shop pro vlasové extenze s:
- **Prodej po gramech** (20-200g)
- **AI Color-Match** - analýza fotek → doporučení odstínů
- **In-house Color Lab** - vlastní barvení vlasů
- **POS systém** - showroom s váhou a čtečkou kódů
- **Social Blog** - Before/After, UGC content

---

## 📋 Roadmapa (8-10 týdnů)

### Týdny 1-2: Foundation
- [x] GitHub repo + dokumentace
- [ ] Databázové schéma (PostgreSQL)
- [ ] Next.js struktura + i18n (CZ/EN/RU/UKR)
- [ ] Mega-menu + navigace
- [ ] Seed katalog (≥200 produktů)
- [ ] CWV baseline

### Týdny 3-4: E-shop Core
- [ ] Homepage (hero + CTA AI Color-Match)
- [ ] PLP (filtry: Původ, Kvalita, S-odstín, Textura, Délka)
- [ ] PDP (selektory + kalkulačka gramáže)
- [ ] Checkout (Stripe 3DS2)
- [ ] Packeta integrace (výdejní místa + kurýr)
- [ ] Search 2.0 (typeahead < 150ms)
- [ ] Sitemapy + JSON-LD schema

### Týdny 5-6: AI & RMA
- [ ] AI Color-Match E2E (upload → e-mail → CTA)
- [ ] RMA/Swap portál (14 dní Shade-Swap)
- [ ] 48h Shade Guarantee workflow
- [ ] Social Blog MVP (feed, posty, komentáře, lajky)
- [ ] Tagy (#S07 #60cm #balayage)

### Týdny 7-8: POS & Warehouse
- [ ] POS PWA (scan + váha + košík)
- [ ] Gram-Lock (tolerance ±0,2g)
- [ ] Transfery (OUT → IN workflow)
- [ ] BOPIS (Buy Online Pick-up In Store)
- [ ] Rezervace s TTL (5-10 min)
- [ ] Ledger pohyby (IN/OUT/SALE/TRANSFER)

### Týdny 9-10: Color Lab & B2B
- [ ] Color Lab: recepty (color_recipes)
- [ ] Process runs (inputs → outputs)
- [ ] Lot genealogy (parent → child)
- [ ] Hair Passport™ (Before/Lift/Final fotky)
- [ ] Media assets (5500K, ColorChecker)
- [ ] QA checks (PASS/FAIL)
- [ ] Pro-Stylist B2B portál (tier ceny)
- [ ] Tone-to-Order (MTO)

---

## 🛠️ Tech Stack

### Frontend
```json
{
  "next": "14.x",
  "react": "18.x",
  "typescript": "5.x",
  "tailwindcss": "3.x",
  "shadcn/ui": "latest",
  "react-hook-form": "7.x",
  "zod": "3.x",
  "next-intl": "3.x"
}
```

### Backend
**Option A: Node.js/NestJS**
```json
{
  "@nestjs/core": "10.x",
  "@nestjs/common": "10.x",
  "prisma": "5.x",
  "@prisma/client": "5.x",
  "stripe": "14.x",
  "sharp": "0.33.x"
}
```

**Option B: Python/FastAPI**
```txt
fastapi==0.109.0
uvicorn==0.27.0
sqlalchemy==2.0.25
pydantic==2.5.3
stripe==7.10.0
Pillow==10.2.0
```

### Database
```
PostgreSQL 15+
Meilisearch 1.5+ nebo Elasticsearch 8+
Redis 7+ (volitelně)
```

---

## 📊 Klíčové metriky

| Oblast           | Cíl                |
|------------------|--------------------|
| **Výkon**        |                    |
| LCP              | < 2.5s             |
| INP              | < 200ms            |
| CLS              | < 0.1              |
| **Business**     |                    |
| Refund (barva)   | < 3%               |
| Konverze         | > 2.5%             |
| AOV              | 150-300 EUR        |
| Time-to-Ship     | < 24h (90%)        |
| **UX**           |                    |
| Search response  | < 150ms            |
| Zero results     | < 0.5%             |
| AI CM confidence | > 85%              |

---

## 🎯 MVP Definition of Done

✅ **E-shop**
- [ ] HP/PLP/PDP ve 4 jazycích (CZ/EN/RU/UKR)
- [ ] Filtry fungují (Původ, Kvalita, S-odstín, Textura, Délka)
- [ ] Kalkulačka gramáže na PDP
- [ ] Stripe checkout + Packeta
- [ ] BOPIS (výdej na POS)

✅ **Sklad**
- [ ] Rezervace s TTL (20 min)
- [ ] Negativní stav nemožný (trigger)
- [ ] POS Gram-Lock (±0,2g)
- [ ] Transfery (WAREHOUSE → SHOWROOM)
- [ ] RMA/Swap 14 dní

✅ **AI & Search**
- [ ] AI Color-Match (form → e-mail TOP3 + blend)
- [ ] Search chápe "tmavovlasý 60 cm", "ash 55 cm tape"
- [ ] Typeahead < 150ms

✅ **Social Blog**
- [ ] Feed (nekonečný scroll)
- [ ] Post PHOTO/VIDEO
- [ ] Komentáře + lajky
- [ ] Tagy (#S07 #balayage)

✅ **Color Lab**
- [ ] Recipe CRUD
- [ ] Process run (consume → produce)
- [ ] Child LOT vytvoření
- [ ] Hair Passport s fotkami

✅ **SEO & Performance**
- [ ] Sitemapy per jazyk
- [ ] Hreflang + canonical
- [ ] JSON-LD (Product, Article, etc.)
- [ ] Lighthouse mobile ≥ 90
- [ ] LCP/INP/CLS v metě

---

## 🔗 Další dokumentace

- [BUILD_SPEC.md](./BUILD_SPEC.md) - Kompletní specifikace
- [DATABASE.md](./DATABASE.md) - DB schéma a views
- [API.md](./API.md) - OpenAPI dokumentace
- [COLOR_LAB.md](./COLOR_LAB.md) - Color Lab workflow
- [TAXONOMY.md](./TAXONOMY.md) - 10 S-odstínů + dimenze

---

**Ready to build?** 🚀
