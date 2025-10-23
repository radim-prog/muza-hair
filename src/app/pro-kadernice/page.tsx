import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

export default function ProKadernicePagePage() {
  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-burgundy to-brand-burgundy-active text-brand-ivory py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Pro kadeřnice & B2B</h1>
          <p className="text-xl mb-8 opacity-90">
            Speciální podmínky pro profesionály. Velkoobchodní ceny, individuální přístup.
          </p>
          <Link
            href="#registrace"
            className="inline-block bg-brand-ivory hover:bg-brand-cream text-brand-burgundy px-10 py-4 rounded-full text-base font-medium transition-all shadow-soft-lg"
          >
            Zaregistrovat se
          </Link>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif text-neutral-900 mb-12 text-center">Výhody B2B programu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💰',
                title: 'Slevy až 30%',
                desc: 'Velkoobchodní ceny pro registrované kadeřnice. Čím více nakupuješ, tím víc ušetříš.',
              },
              {
                icon: '📦',
                title: 'Doprava zdarma',
                desc: 'Při nákupu nad 5000 Kč. Objednávky přijaté do 14:00 odesíláme ještě tentýž den.',
              },
              {
                icon: '🎓',
                title: 'Školení zdarma',
                desc: 'Online i offline kurzy aplikací TAPE, ITIP, WEFT. Certifikát po absolvování.',
              },
              {
                icon: '📊',
                title: 'Osobní účet',
                desc: 'Přehled objednávek, faktur, nákupní historie. Export do účetního systému.',
              },
              {
                icon: '🎯',
                title: 'Konzultace 48h',
                desc: 'Vlastní account manager. Odpověď na dotazy do 48 hodin, garantováno.',
              },
              {
                icon: '📷',
                title: 'Marketing support',
                desc: 'Profesionální fotky produktů pro tvůj Instagram a web. Before/After šablony.',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-brand-ivory rounded-3xl p-8 border border-brand-sand">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-serif text-brand-burgundy mb-3">{benefit.title}</h3>
                <p className="text-neutral-700">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing tiers */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif text-neutral-900 mb-12 text-center">Cenové úrovně</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tier: 'Bronzová',
                discount: '15%',
                min: '5 000 Kč',
                features: ['Sleva 15% na vše', 'Doprava zdarma nad 5000 Kč', 'Online školení zdarma'],
              },
              {
                tier: 'Stříbrná',
                discount: '20%',
                min: '15 000 Kč',
                features: [
                  'Sleva 20% na vše',
                  'Doprava zdarma',
                  'Prioritní konzultace',
                  'Marketing podpora',
                ],
                highlighted: true,
              },
              {
                tier: 'Zlatá',
                discount: '30%',
                min: '30 000 Kč',
                features: [
                  'Sleva 30% na vše',
                  'Doprava zdarma',
                  '24h konzultace',
                  'Osobní account manager',
                  'Exkluzivní školení',
                ],
              },
            ].map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 border-2 ${
                  tier.highlighted
                    ? 'border-brand-burgundy bg-brand-cream'
                    : 'border-brand-sand bg-brand-ivory'
                }`}
              >
                <h3 className="text-2xl font-serif text-brand-burgundy mb-2">{tier.tier}</h3>
                <div className="text-4xl font-serif text-neutral-900 mb-1">{tier.discount}</div>
                <p className="text-sm text-neutral-600 mb-6">sleva • min. {tier.min}/měsíc</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="text-brand-burgundy mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Registration form */}
        <div id="registrace" className="bg-brand-cream rounded-3xl p-10 border border-brand-sand">
          <h2 className="text-4xl font-serif text-neutral-900 mb-6 text-center">
            Zaregistruj se do B2B programu
          </h2>
          <p className="text-center text-neutral-600 mb-10">
            Vyplň formulář a my se ti ozveme do 24 hodin s individuální nabídkou.
          </p>

          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Jméno a příjmení *"
                required
                className="px-4 py-3 rounded-2xl border border-brand-sand bg-brand-ivory focus:outline-none focus:border-brand-burgundy"
              />
              <input
                type="email"
                placeholder="E-mail *"
                required
                className="px-4 py-3 rounded-2xl border border-brand-sand bg-brand-ivory focus:outline-none focus:border-brand-burgundy"
              />
              <input
                type="tel"
                placeholder="Telefon *"
                required
                className="px-4 py-3 rounded-2xl border border-brand-sand bg-brand-ivory focus:outline-none focus:border-brand-burgundy"
              />
              <input
                type="text"
                placeholder="Název salonu"
                className="px-4 py-3 rounded-2xl border border-brand-sand bg-brand-ivory focus:outline-none focus:border-brand-burgundy"
              />
              <input
                type="text"
                placeholder="IČO"
                className="px-4 py-3 rounded-2xl border border-brand-sand bg-brand-ivory focus:outline-none focus:border-brand-burgundy"
              />
              <input
                type="text"
                placeholder="Město"
                className="px-4 py-3 rounded-2xl border border-brand-sand bg-brand-ivory focus:outline-none focus:border-brand-burgundy"
              />
            </div>

            <textarea
              placeholder="Kolik gramů měsíčně odhaduješ, že budeš potřebovat?"
              rows={3}
              className="w-full px-4 py-3 rounded-2xl border border-brand-sand bg-brand-ivory focus:outline-none focus:border-brand-burgundy resize-none"
            />

            <button
              type="submit"
              className="w-full bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory py-4 rounded-full text-base font-medium transition-all shadow-soft-lg"
            >
              Odeslat žádost
            </button>

            <p className="text-xs text-neutral-600 text-center">
              Kliknutím na tlačítko souhlasíš se{' '}
              <Link href="/ochrana-osobnich-udaju" className="underline hover:text-brand-burgundy">
                zpracováním osobních údajů
              </Link>
            </p>
          </form>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-4xl font-serif text-neutral-900 mb-12 text-center">Časté otázky B2B</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: 'Jak dlouho trvá schválení B2B účtu?',
                a: 'Obvykle do 24 hodin od odeslání žádosti. Pokud potřebujeme doplnit údaje, ozveme se ti e-mailem nebo telefonicky.',
              },
              {
                q: 'Můžu kombinovat B2B slevu s jinými akcemi?',
                a: 'B2B sleva se vztahuje na běžné ceny a nelze ji kombinovat s jinými slevovými akcemi nebo promo kódy.',
              },
              {
                q: 'Jak funguje fakturace?',
                a: 'Faktury ti posíláme e-mailem ihned po vytvoření objednávky. Platba je možná převodem nebo kartou. Splatnost 14 dní.',
              },
              {
                q: 'Mohu objednávat i jako fyzická osoba?',
                a: 'Ano, B2B program je otevřený i pro fyzické osoby - OSVČ kadeřnice. Stačí IČO nebo živnostenský list.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-brand-ivory rounded-3xl p-6 border border-brand-sand">
                <h3 className="font-medium text-neutral-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-neutral-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
