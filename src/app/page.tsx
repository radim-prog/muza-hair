import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-ivory">
      {/* Navigation - warm, minimal */}
      <nav className="border-b border-brand-sand bg-brand-ivory/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-12">
              <h1 className="text-2xl font-serif text-brand-burgundy">Múza Hair</h1>
              <div className="hidden md:flex space-x-8">
                <Link href="/obchod" className="text-neutral-700 hover:text-brand-burgundy transition-colors text-sm">
                  Obchod
                </Link>
                <a href="#" className="text-neutral-700 hover:text-brand-burgundy transition-colors text-sm">
                  AI Color-Match
                </a>
                <a href="#" className="text-neutral-700 hover:text-brand-burgundy transition-colors text-sm">
                  Pro kadeřnice
                </a>
                <a href="#" className="text-neutral-700 hover:text-brand-burgundy transition-colors text-sm">
                  O nás
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-neutral-700 hover:text-brand-burgundy transition-colors text-sm">
                Přihlásit se
              </button>
              <button className="bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-6 py-2.5 rounded-full transition-all shadow-soft text-sm">
                Košík (0)
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - warm, elegant */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-cream to-brand-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-6 leading-tight">
              Vlasové extenze
              <br />
              <span className="text-brand-burgundy italic">s AI Color-Match</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-4 leading-relaxed">
              Prodej po gramech • 10 S-odstínů • Kvalita EE/EU
            </p>
            <p className="text-sm text-neutral-500 mb-10">
              Shade-Swap 14 dní • 48h Guarantee • Odesíláme dnes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-10 py-4 rounded-full text-base font-medium transition-all shadow-soft-lg">
                Najdi svůj odstín (AI)
              </button>
              <Link href="/obchod" className="border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-ivory px-10 py-4 rounded-full text-base font-medium transition-all text-center">
                Procházet katalog
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-rose/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
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

      {/* CTA Section - soft, inviting */}
      <section className="bg-gradient-to-br from-brand-burgundy to-brand-burgundy-active py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-serif text-brand-ivory mb-6">
            Nejsi si jistá svým odstínem?
          </h3>
          <p className="text-xl text-brand-ivory/80 mb-10 max-w-2xl mx-auto">
            Vyzkoušej naše AI Color-Match. Nahraj 2-3 fotky a my ti doporučíme ideální odstíny.
          </p>
          <button className="bg-brand-ivory hover:bg-brand-cream text-brand-burgundy px-10 py-4 rounded-full text-base font-medium transition-all shadow-soft-lg">
            Spustit AI Color-Match →
          </button>
        </div>
      </section>

      {/* Footer - warm, elegant */}
      <footer className="bg-neutral-900 text-neutral-400 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h5 className="text-brand-ivory font-serif text-xl mb-4">Múza Hair</h5>
              <p className="text-sm leading-relaxed">
                E-shop pro vlasové extenze s AI Color-Match. Kvalita a péče o každý detail.
              </p>
            </div>
            <div>
              <h6 className="font-medium text-brand-ivory mb-4">Obchod</h6>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-ivory transition-colors">Katalog produktů</a></li>
                <li><a href="#" className="hover:text-brand-ivory transition-colors">AI Color-Match</a></li>
                <li><a href="#" className="hover:text-brand-ivory transition-colors">Nová kolekce</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-brand-ivory mb-4">Podpora</h6>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-ivory transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-brand-ivory transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-brand-ivory transition-colors">Doprava a platba</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-brand-ivory mb-4">B2B</h6>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-ivory transition-colors">Pro kadeřnice</a></li>
                <li><a href="#" className="hover:text-brand-ivory transition-colors">Velkoobchod</a></li>
                <li><a href="#" className="hover:text-brand-ivory transition-colors">Registrace</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 text-sm text-center">
            <p>© 2025 Múza Hair. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
