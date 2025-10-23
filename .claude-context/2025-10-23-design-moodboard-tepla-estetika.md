# Design: Teplá organická estetika (moodboard zákazníka)
**Datum:** 2025-10-23
**Kategorie:** design

## Původní zadání zákazníka
Zákazník poskytl moodboard s teplou, organickou estetikou a řekl:
> "web by měl být více v těchto barvách a blížit se tomuto...to si zákazník našel a dal nám to jako zaadání"

## Klíčová designová rozhodnutí

### Barevná paleta (z moodboardu)
- **Burgundy**: #6B4042 (jemná, teplá - místo původního tmavého #340C0D)
- **Cream**: #F5EFE7 (teplé krémové pozadí)
- **Sand**: #E8DFD0 (písková béžová)
- **Ivory**: #FAF7F2 (teplá bílá)
- **Taupe**: #C9B8A8 (teplý taupe)
- **Rose**: #B88B8D (dusty rose)

### Typografie
- **Nadpisy**: Playfair Display (serif) - elegance, premiumovost
- **Text**: Inter (sans-serif) - čitelnost

### UI Elementy
- **Tlačítka**: Plně zaoblené (rounded-full)
- **Stíny**: Měkké, jemné (shadow-soft, shadow-soft-lg)
- **Rozestupy**: Velkorysé, nadýchané (py-20, py-28)
- **Gradients**: Jemné přechody (from-brand-cream to-brand-ivory)

### Estetika
- Organická, přírodní
- Minimalistická ale teplá
- Premiumová ale přístupná
- Elegantní ale ne chladná

## Důvody
- Zákazník (Múza Hair) cílí na prémiový segment
- Hair extensions vyžadují důvěru a pocit luxusu
- Teplé barvy evokují přirozenost a péči
- Organický design odlišuje od konkurence (tech e-shopy)

## Implementované změny

### tailwind.config.ts
```typescript
colors: {
  brand: {
    burgundy: {
      DEFAULT: '#6B4042',    // Soft burgundy
      hover: '#8B5456',
      active: '#4A2D2F',
      light: '#9D7678',
    },
    cream: '#F5EFE7',
    sand: '#E8DFD0',
    ivory: '#FAF7F2',
    taupe: '#C9B8A8',
    rose: '#B88B8D',
  },
  // Warm neutrals scale
}
```

### src/app/layout.tsx
- Přidán Playfair Display font pro serif nadpisy
- Zachován Inter pro sans-serif text

### src/app/page.tsx
- Kompletní redesign homepage
- Warm backgrounds (cream, ivory)
- Serif nadpisy
- Rounded buttons
- Soft shadows
- Organic spacing

## Výsledek
✅ Zákazník potvrdil: "dobrý"

## Next Steps
- Firebase setup (backend)
- Product Listing Page (PLP)
- Product Detail Page (PDP)
- Zachovat konzistentní warm aesthetic napříč celým projektem
