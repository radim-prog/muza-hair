# Redesign podle zákaznického zadání
**Datum:** 2025-10-25
**Kategorie:** design
**Branch:** development

## Původní zadání zákazníka

Zákazník poskytl 3 obrázky s designem a popsal rozdíly mezi aktuálním webem a cílovým designem:

### Klíčové změny:
1. **Globální barva pozadí:** Z bílé (#FFFFFF) na teplou béžovou (#FBFBF9)
2. **Hero sekce:** Z centrovaného textu s videem na dvousloupcový layout (text vlevo, obrázek vpravo)
3. **Stránka kolekce:** Odstranit levý sidebar, přidat horizontální filtry
4. **Produktová mřížka:** Z 3 sloupců na 5-6 sloupců
5. **Produktová karta:** Odebrat cenu, zobrazit kolekci a gramáž

## Implementované změny

### 1. Globální změny (tailwind.config.ts)
```typescript
neutral: {
  '50': '#FBFBF9',  // Main background color (warm beige)
}
```

### 2. Homepage (src/app/page.tsx)

**Hero sekce - Před:**
- Centrovaný text
- Video na celou šířku
- Text uprostřed

**Hero sekce - Po:**
```tsx
<section className="bg-neutral-50">
  <div className="grid grid-cols-1 lg:grid-cols-2">
    {/* Levý sloupec - Text */}
    <div>
      <h1>"Vlasy, které milujete na první dotek."</h1>
      <p>"Ručně tříděné culíky..."</p>
      <Link href="/obchod">Zobrazit kolekci</Link>
    </div>

    {/* Pravý sloupec - Obrázek */}
    <div>
      <div className="aspect-[4/5]">
        {/* Placeholder pro obrázek vlnitých hnědých vlasů */}
      </div>
    </div>
  </div>
</section>
```

**Nová sekce "Atelier Múza Hair":**
```tsx
<section className="bg-brand-cream">
  <div className="grid grid-cols-1 lg:grid-cols-2">
    {/* Levý sloupec - Obrázek */}
    <div>
      <div className="aspect-[4/5]">
        {/* Placeholder pro obrázek ženy s rovnými vlasy */}
      </div>
    </div>

    {/* Pravý sloupec - Text */}
    <div>
      <h2>"Atelier Múza Hair"</h2>
      <p>"Naše kolekce vzniká..."</p>
    </div>
  </div>
</section>
```

### 3. Stránka obchodu (src/app/obchod/page.tsx)

**Horizontální filtrační systém:**

**Řádek 1 - Vyhledávací pole:**
```tsx
<input
  type="text"
  placeholder="Hledat podle odstínu, délky nebo kolekce..."
  className="w-full px-6 py-4 rounded-full"
/>
```

**Řádek 2 - Textové filtry:**
```tsx
<div className="flex gap-3">
  <select>Délka</select>
  <select>Metoda</select>
  <button>Struktura</button>
  <button>Ekolekce</button>
  <button>Kolekce</button>
</div>
```

**Řádek 3 - Barevné swatches:**
```tsx
<div className="flex gap-2">
  {SHADES.map(shade => (
    <button
      className="w-10 h-10 rounded-full"
      style={{ backgroundColor: shade.color }}
    />
  ))}
</div>
```

**Mřížka produktů:**
```tsx
// Před: grid-cols-3
// Po: grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
```

**Produktová karta - Před:**
```tsx
- Obrázek
- Název ("Raven")
- Cena ("od 3 500 Kč")  ❌
- Min. gramáž
```

**Produktová karta - Po:**
```tsx
<Link href={`/produkt/${slug}`}>
  {/* Čtvercový obrázek */}
  <div className="aspect-square">
    <div className="w-16 h-16 rounded-full" style={{ backgroundColor }} />
  </div>

  {/* Kompaktní obsah */}
  <div className="p-4">
    <h3>{shadeInfo.name}</h3>              // "Černá", "Tmavě hnědá"
    <p>{collectionName}</p>                // "Premium Collection"
    <div>{length} cm • {minGrams} g</div> // "50 cm • 50 g"
  </div>
</Link>
```

**Kolekce podle kvality:**
- EU → "Premium Collection"
- REMY → "Luxury Collection"
- EE → "Essential Collection"

## Důvody změn

1. **Pozadí:** Teplá béžová (#FBFBF9) evokuje přirozenost a premiumovost
2. **Hero sekce:** Dvousloupcový layout je modernější a lépe prezentuje produkt
3. **Horizontální filtry:** Uvolní prostor pro více produktů, lepší UX
4. **6 sloupců:** Zobrazí více produktů najednou (jako na e-shopech typu Zara, H&M)
5. **Bez ceny na kartě:** Minimalistický vzhled, cena až na detailu

## Technické změny

### Změněné soubory:
1. **tailwind.config.ts** - neutral-50 (#FBFBF9)
2. **src/app/page.tsx** - nová hero + atelier sekce
3. **src/app/obchod/page.tsx** - horizontální filtry + 6col grid + nová karta

### Git:
```bash
Branch: development
Commit: ccf1e17
URL: https://github.com/radim-prog/muza-hair/tree/development
```

## TODO: Obrázky

Placeholdery pro skutečné obrázky:
1. **Hero sekce:** Velký obrázek vlnitých hnědých vlasů (aspect-[4/5])
2. **Atelier sekce:** Žena s rovnými vlasy (aspect-[4/5])
3. **Produktové karty:** Skutečné fotky produktů

## Výsledek

✅ Homepage: Dvousloupcový hero + Atelier sekce
✅ Obchod: Horizontální filtry s barevnými swatches
✅ Produkty: 6 sloupců, kompaktní karty bez ceny
✅ Design: Teplá béžová (#FBFBF9) jako hlavní pozadí
✅ Branch: development (ochrana produkční verze)

## Next Steps

1. Přidat skutečné obrázky (hero, atelier, produkty)
2. Testovat na různých velikostech obrazovek
3. Review od zákazníka
4. Merge do main po schválení
