import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      {/* Hero Section - Two Column Layout */}
      <section className="relative overflow-hidden bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-neutral-900 mb-6 leading-tight">
                Vlasy, které milujete na první dotek.
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed max-w-xl">
                Ručně tříděné culíky z ateliérů Múza Hair. Každý pramen vybíráme s péčí, abyste měli jistotu, že vaše nové vlasy jsou dokonalé.
              </p>
              <Link
                href="/obchod"
                className="inline-block bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-10 py-4 rounded-full text-base font-medium transition-all shadow-soft-lg"
              >
                Zobrazit kolekci
              </Link>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-brand-cream to-brand-sand rounded-3xl overflow-hidden shadow-soft-lg">
                {/* Placeholder for image - replace with actual image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-shade-s04 to-shade-s05">
                  <div className="text-center text-white/80 p-8">
                    <p className="text-sm font-medium">Hero Image</p>
                    <p className="text-xs mt-2">Vlnité hnědé vlasy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier Múza Hair Section */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-brand-sand to-brand-taupe rounded-3xl overflow-hidden shadow-soft-lg">
                {/* Placeholder for image - replace with actual image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-shade-s06 to-shade-s07">
                  <div className="text-center text-neutral-800/80 p-8">
                    <p className="text-sm font-medium">Atelier Image</p>
                    <p className="text-xs mt-2">Žena s rovnými vlasy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6 leading-tight">
                Atelier Múza Hair
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Naše kolekce vzniká v malých dávkách, s důrazem na kvalitu a autenticitu. Každý kus je pečlivě vybrán a zkontrolován našimi odborníky.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Věříme, že krása je v detailech. Proto každý pramen procházíme ručně a vybíráme pouze ty nejkvalitnější vlasy z etických zdrojů v Evropě.
              </p>
              <p className="text-base text-neutral-600 leading-relaxed">
                S láskou k vlasům a péčí o každou zákaznici vytváříme extenze, které splňují ty nejvyšší standardy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S-Swatches Preview - warm presentation */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-serif text-neutral-900 mb-3">
            10 S-odstínů
          </h3>
          <p className="text-neutral-600">Naše standardizovaná paleta pro snadný výběr</p>
        </div>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-6">
          {[
            { code: 'S01', name: 'Černá', color: '#1A1A1A' },
            { code: 'S02', name: 'Tmavě hnědá', color: '#3B2B20' },
            { code: 'S03', name: 'Středně hnědá', color: '#6A4B34' },
            { code: 'S04', name: 'Světle hnědá', color: '#8C6A4F' },
            { code: 'S05', name: 'Tmavá blond', color: '#B28A63' },
            { code: 'S06', name: 'Přírodní blond', color: '#D1B48C' },
            { code: 'S07', name: 'Popelavá blond', color: '#C2C0B5' },
            { code: 'S08', name: 'Platinová blond', color: '#E8E6E2' },
            { code: 'S09', name: 'Medová blond', color: '#E0C27A' },
            { code: 'S10', name: 'Bronde/Beige', color: '#BFA684' },
          ].map((shade) => (
            <div key={shade.code} className="flex flex-col items-center group cursor-pointer">
              <div
                className="w-20 h-20 rounded-full border border-brand-sand group-hover:border-brand-burgundy transition-all shadow-soft group-hover:shadow-soft-lg group-hover:scale-105"
                style={{ backgroundColor: shade.color }}
              ></div>
              <span className="text-xs font-medium text-neutral-700 mt-3">{shade.code}</span>
              <span className="text-xs text-neutral-500 mt-1 hidden md:block">{shade.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Metody aplikace - soft cards */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif text-neutral-900 mb-3">
              Metody aplikace
            </h3>
            <p className="text-neutral-600">Vyberte si metodu podle vašich potřeb</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                method: 'TAPE',
                description: 'Lepící extenze pro rychlou aplikaci',
                duration: '4-8 týdnů výdrž',
                icon: '📏'
              },
              {
                method: 'ITIP',
                description: 'Keratin bonding pro přirozený vzhled',
                duration: '3-6 měsíců výdrž',
                icon: '✨'
              },
              {
                method: 'WEFT',
                description: 'Tresy na přišití pro dlouhodobé nošení',
                duration: 'Až 1 rok výdrž',
                icon: '🪡'
              },
            ].map((item) => (
              <div
                key={item.method}
                className="bg-brand-ivory rounded-3xl p-8 hover:shadow-soft-lg transition-all cursor-pointer border border-brand-sand hover:border-brand-burgundy/30 group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-2xl font-serif text-brand-burgundy mb-3 group-hover:text-brand-burgundy-hover transition-colors">
                  {item.method}
                </h4>
                <p className="text-neutral-700 mb-2">{item.description}</p>
                <p className="text-sm text-neutral-500">{item.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges - warm, minimal */}
      <section className="bg-brand-ivory py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { title: 'Po gramech', desc: 'Kupuj přesně kolik potřebuješ', icon: '⚖️' },
              { title: 'Shade-Swap 14 dní', desc: 'Výměna odstínu zdarma', icon: '🔄' },
              { title: '48h Guarantee', desc: 'Rychlá konzultace', icon: '⏱️' },
              { title: 'Odesíláme dnes', desc: 'Packeta CZ/SK', icon: '📦' },
            ].map((badge, idx) => (
              <div key={idx} className="group">
                <div className="text-3xl mb-3">{badge.icon}</div>
                <p className="text-lg font-serif text-brand-burgundy mb-2">{badge.title}</p>
                <p className="text-sm text-neutral-600">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-brand-ivory py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif text-neutral-900 mb-3">
              Co říkají naše zákaznice
            </h3>
            <p className="text-neutral-600">Přes 500 spokojených zákaznic po celé ČR a SK</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Lucie K.',
                rating: 5,
                text: 'Perfektní match! AI Color-Match trefilo barvu na 100%. Aplikace byla snadná i doma. Nosím už 3 týdny a drží perfektně.',
                product: 'TAPE S05 • 50 cm',
              },
              {
                name: 'Markéta S.',
                rating: 5,
                text: 'Jako kadeřnice můžu říct, že Múza Hair je TOP kvalita. EU kvalita je opravdu remy vlasy. Absolutně doporučuji!',
                product: 'ITIP S06 • 55 cm',
              },
              {
                name: 'Petra D.',
                rating: 5,
                text: 'Shade-Swap program zachránil situaci! Rychlá výměna odstínu zdarma. Teď nosím extenze 4 týdny a jsem naprosto spokojená.',
                product: 'TAPE S04 • 60 cm',
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-brand-cream rounded-3xl p-8 border border-brand-sand hover:border-brand-burgundy transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-brand-sand pt-4">
                  <p className="font-medium text-neutral-900 mb-1">{testimonial.name}</p>
                  <p className="text-sm text-neutral-600">{testimonial.product}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/recenze"
              className="inline-block bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-8 py-3 rounded-full transition-all"
            >
              Zobrazit všechny recenze →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - soft, inviting */}
      <section className="bg-gradient-to-br from-brand-burgundy to-brand-burgundy-active py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-serif text-brand-ivory mb-6">
            Nejsi si jistá svým odstínem?
          </h3>
          <p className="text-xl text-brand-ivory/80 mb-10 max-w-2xl mx-auto">
            Vyzkoušej naše AI Color-Match. Nahraj 2-3 fotky a my ti doporučíme ideální odstíny.
          </p>
          <Link
            href="/ai-color-match"
            className="inline-block bg-brand-ivory hover:bg-brand-cream text-brand-burgundy px-10 py-4 rounded-full text-base font-medium transition-all shadow-soft-lg"
          >
            Spustit AI Color-Match →
          </Link>
        </div>
      </section>

      {/* Footer - warm, elegant */}
      <footer className="bg-neutral-900 text-neutral-400 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div>
              <h5 className="text-brand-ivory font-serif text-xl mb-4">Múza Hair</h5>
              <p className="text-sm leading-relaxed mb-4">
                E-shop pro vlasové extenze s AI Color-Match. Kvalita a péče o každý detail.
              </p>
              <div className="flex gap-3">
                <a href="#" className="text-neutral-400 hover:text-brand-ivory transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-brand-ivory transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h6 className="font-medium text-brand-ivory mb-4">Obchod</h6>
              <ul className="space-y-2 text-sm">
                <li><Link href="/obchod" className="hover:text-brand-ivory transition-colors">Katalog produktů</Link></li>
                <li><Link href="/ai-color-match" className="hover:text-brand-ivory transition-colors">AI Color-Match</Link></li>
                <li><Link href="/galerie" className="hover:text-brand-ivory transition-colors">Galerie Before/After</Link></li>
                <li><Link href="/recenze" className="hover:text-brand-ivory transition-colors">Recenze</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-brand-ivory mb-4">Průvodce</h6>
              <ul className="space-y-2 text-sm">
                <li><Link href="/navody" className="hover:text-brand-ivory transition-colors">Návody na aplikaci</Link></li>
                <li><Link href="/pruvodce" className="hover:text-brand-ivory transition-colors">Kolik gramů potřebuji?</Link></li>
                <li><Link href="/faq" className="hover:text-brand-ivory transition-colors">FAQ</Link></li>
                <li><Link href="/kontakt" className="hover:text-brand-ivory transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-brand-ivory mb-4">Zákaznický servis</h6>
              <ul className="space-y-2 text-sm">
                <li><Link href="/doprava-a-platba" className="hover:text-brand-ivory transition-colors">Doprava a platba</Link></li>
                <li><Link href="/obchodni-podminky" className="hover:text-brand-ivory transition-colors">Obchodní podmínky</Link></li>
                <li><Link href="/reklamacni-rad" className="hover:text-brand-ivory transition-colors">Reklamační řád</Link></li>
                <li><Link href="/ochrana-osobnich-udaju" className="hover:text-brand-ivory transition-colors">GDPR</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-brand-ivory mb-4">B2B & Účet</h6>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pro-kadernice" className="hover:text-brand-ivory transition-colors">Pro kadeřnice</Link></li>
                <li><Link href="/prihlasit" className="hover:text-brand-ivory transition-colors">Přihlásit se</Link></li>
                <li><Link href="/registrace" className="hover:text-brand-ivory transition-colors">Registrace</Link></li>
                <li><Link href="/o-nas" className="hover:text-brand-ivory transition-colors">O nás</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-b border-neutral-800 py-8 mb-8">
            <div className="max-w-2xl mx-auto text-center">
              <h6 className="font-medium text-brand-ivory mb-2">Newsletter</h6>
              <p className="text-sm mb-4">Získej 10% slevu na první nákup a buď první, kdo se dozví o novinkách</p>
              <form className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="tvuj@email.cz"
                  className="flex-1 px-4 py-2 rounded-full bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-brand-burgundy text-brand-ivory text-sm"
                />
                <button
                  type="submit"
                  className="bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap"
                >
                  Přihlásit se
                </button>
              </form>
            </div>
          </div>

          <div className="text-sm text-center">
            <p className="mb-2">© 2025 Múza Hair s.r.o. • IČO: 12345678 • Všechna práva vyhrazena.</p>
            <p className="text-neutral-500 text-xs">
              48h Guarantee • Shade-Swap 14 dní • Odesíláme dnes • Kvalita EE/EU/REMY
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
