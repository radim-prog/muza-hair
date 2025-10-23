export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-0">
      {/* Navigation */}
      <nav className="border-b border-neutral-300 bg-neutral-0/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-brand-burgundy">Múza Hair</h1>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-neutral-700 hover:text-brand-burgundy transition-colors">Obchod</a>
                <a href="#" className="text-neutral-700 hover:text-brand-burgundy transition-colors">AI Color-Match</a>
                <a href="#" className="text-neutral-700 hover:text-brand-burgundy transition-colors">Pro kadeřnice</a>
                <a href="#" className="text-neutral-700 hover:text-brand-burgundy transition-colors">O nás</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-neutral-700 hover:text-brand-burgundy transition-colors">
                Přihlásit se
              </button>
              <button className="bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-4 py-2 rounded-md transition-colors">
                Košík (0)
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Vlasové extenze
              <br />
              <span className="text-brand-burgundy">s AI Color-Match</span>
            </h2>
            <p className="text-xl text-neutral-700 max-w-2xl mx-auto mb-8">
              Prodej po gramech • 10 S-odstínů • Kvalita EE/EU
              <br />
              Shade-Swap 14 dní • 48h Guarantee
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-8 py-3 rounded-md text-lg font-medium transition-colors">
                🤖 Najdi svůj odstín (AI)
              </button>
              <button className="border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-ivory px-8 py-3 rounded-md text-lg font-medium transition-colors">
                Procházet katalog
              </button>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-brand-burgundy rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* S-Swatches Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-neutral-900 text-center mb-12">
          10 S-odstínů
        </h3>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
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
                className="w-16 h-16 rounded-full border-2 border-neutral-300 group-hover:border-brand-burgundy transition-all shadow-md group-hover:shadow-lg"
                style={{ backgroundColor: shade.color }}
              ></div>
              <span className="text-xs font-medium text-neutral-700 mt-2">{shade.code}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-neutral-900 text-center mb-12">
          Metody aplikace
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { method: 'TAPE', description: 'Lepící extenze, 4-8 týdnů výdrž' },
            { method: 'ITIP', description: 'Keratin bonding, 3-6 měsíců' },
            { method: 'WEFT', description: 'Tresy na přišití, dlouhodobé' },
          ].map((item) => (
            <div key={item.method} className="border border-neutral-300 rounded-lg p-6 hover:border-brand-burgundy hover:shadow-lg transition-all cursor-pointer">
              <h4 className="text-xl font-bold text-brand-burgundy mb-2">{item.method}</h4>
              <p className="text-neutral-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-neutral-50 border-y border-neutral-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-brand-burgundy mb-2">Po gramech</p>
              <p className="text-sm text-neutral-700">Kupuj přesně kolik potřebuješ</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-burgundy mb-2">Shade-Swap 14 dní</p>
              <p className="text-sm text-neutral-700">Výměna odstínu zdarma</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-burgundy mb-2">48h Guarantee</p>
              <p className="text-sm text-neutral-700">Rychlá konzultace</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-burgundy mb-2">Odesíláme dnes</p>
              <p className="text-sm text-neutral-700">Packeta CZ/SK</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-brand-ivory font-bold mb-4">Múza Hair</h5>
              <p className="text-sm">E-shop pro vlasové extenze s AI Color-Match</p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Obchod</h6>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-ivory">Katalog produktů</a></li>
                <li><a href="#" className="hover:text-brand-ivory">AI Color-Match</a></li>
                <li><a href="#" className="hover:text-brand-ivory">Nová kolekce</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Podpora</h6>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-ivory">Kontakt</a></li>
                <li><a href="#" className="hover:text-brand-ivory">FAQ</a></li>
                <li><a href="#" className="hover:text-brand-ivory">Doprava</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">B2B</h6>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-ivory">Pro kadeřnice</a></li>
                <li><a href="#" className="hover:text-brand-ivory">Velkoobchod</a></li>
                <li><a href="#" className="hover:text-brand-ivory">Registrace</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-700 mt-8 pt-8 text-sm text-center">
            © 2025 Múza Hair. Všechna práva vyhrazena.
          </div>
        </div>
      </footer>
    </div>
  );
}
