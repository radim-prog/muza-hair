import { Navigation } from '@/components/Navigation';
import Link from 'next/link';

export default function DopravaAPlatbaPage() {
  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-serif text-neutral-900 mb-6">
          Doprava a platba
        </h1>
        <p className="text-lg text-neutral-600 mb-16">
          Vše, co potřebuješ vědět o doručení a platebních možnostech
        </p>

        {/* Doprava */}
        <section className="mb-16">
          <h2 className="text-4xl font-serif text-brand-burgundy mb-8">
            Doprava
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Packeta CZ */}
            <div className="bg-brand-ivory rounded-3xl p-8 border border-brand-sand">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">📦</div>
                <div>
                  <h3 className="text-2xl font-serif text-neutral-900 mb-2">Packeta CZ</h3>
                  <p className="text-brand-burgundy font-medium text-lg">150 Kč</p>
                </div>
              </div>
              <ul className="space-y-2 text-neutral-700">
                <li>• Doručení: 1-2 pracovní dny</li>
                <li>• 7000+ výdejních míst po celé ČR</li>
                <li>• Tracking číslo e-mailem</li>
                <li>• Možnost otevření balíku před převzetím</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-brand-sand">
                <p className="text-sm text-neutral-600">
                  <strong>Zdarma</strong> při nákupu nad 5000 Kč
                </p>
              </div>
            </div>

            {/* Packeta SK */}
            <div className="bg-brand-ivory rounded-3xl p-8 border border-brand-sand">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🇸🇰</div>
                <div>
                  <h3 className="text-2xl font-serif text-neutral-900 mb-2">Packeta SK</h3>
                  <p className="text-brand-burgundy font-medium text-lg">150 Kč</p>
                </div>
              </div>
              <ul className="space-y-2 text-neutral-700">
                <li>• Doručení: 2-3 pracovní dny</li>
                <li>• 2000+ výdejních míst na Slovensku</li>
                <li>• Tracking číslo e-mailem</li>
                <li>• SMS notifikace o dodání</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-brand-sand">
                <p className="text-sm text-neutral-600">
                  <strong>Zdarma</strong> při nákupu nad 5000 Kč
                </p>
              </div>
            </div>
          </div>

          {/* B2B doprava */}
          <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💼</div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif text-brand-burgundy mb-3">
                  B2B Doprava zdarma
                </h3>
                <p className="text-neutral-700 mb-4">
                  Pro registrované kadeřnice a B2B zákazníky je doprava <strong>vždy zdarma</strong>, bez ohledu na výši objednávky.
                </p>
                <Link
                  href="/pro-kadernice#registrace"
                  className="inline-block bg-brand-burgundy text-brand-ivory px-6 py-2 rounded-full text-sm hover:bg-brand-burgundy-hover transition-all"
                >
                  Registrovat se do B2B
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Kdy odesíláme */}
        <section className="mb-16">
          <h2 className="text-4xl font-serif text-brand-burgundy mb-8">
            Kdy odesíláme?
          </h2>

          <div className="bg-brand-ivory rounded-3xl p-8 border border-brand-sand">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-3">🕐</div>
                <h4 className="font-medium text-neutral-900 mb-2">Objednávka do 14:00</h4>
                <p className="text-sm text-neutral-600">Odesíláme ještě tentýž den</p>
              </div>
              <div>
                <div className="text-4xl mb-3">📅</div>
                <h4 className="font-medium text-neutral-900 mb-2">Po-Pá</h4>
                <p className="text-sm text-neutral-600">Standardní expedice</p>
              </div>
              <div>
                <div className="text-4xl mb-3">🏖️</div>
                <h4 className="font-medium text-neutral-900 mb-2">Víkend</h4>
                <p className="text-sm text-neutral-600">Expedice v pondělí</p>
              </div>
            </div>
          </div>
        </section>

        {/* Platba */}
        <section className="mb-16">
          <h2 className="text-4xl font-serif text-brand-burgundy mb-8">
            Platební metody
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Kartou */}
            <div className="bg-brand-ivory rounded-3xl p-8 border border-brand-sand">
              <div className="text-4xl mb-4 text-center">💳</div>
              <h3 className="text-2xl font-serif text-neutral-900 mb-3 text-center">
                Platební karta
              </h3>
              <p className="text-neutral-700 mb-4 text-center text-sm">
                Visa, Mastercard, Maestro
              </p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>✓ Online platba</li>
                <li>✓ Okamžité potvrzení</li>
                <li>✓ 3D Secure zabezpečení</li>
                <li>✓ Nejrychlejší expedice</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-brand-sand text-center">
                <span className="text-xs text-neutral-600">Zpracování: Stripe</span>
              </div>
            </div>

            {/* Bankovní převod */}
            <div className="bg-brand-ivory rounded-3xl p-8 border border-brand-sand">
              <div className="text-4xl mb-4 text-center">🏦</div>
              <h3 className="text-2xl font-serif text-neutral-900 mb-3 text-center">
                Bankovní převod
              </h3>
              <p className="text-neutral-700 mb-4 text-center text-sm">
                Platba fakturou
              </p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>✓ Fakturu dostaneš e-mailem</li>
                <li>✓ Splatnost: 7 dní</li>
                <li>✓ QR kód pro platbu</li>
                <li>✓ Expedice po připsání</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-brand-sand text-center">
                <span className="text-xs text-neutral-600">Účet: 1234567890/0800</span>
              </div>
            </div>

            {/* Dobírka */}
            <div className="bg-brand-ivory rounded-3xl p-8 border border-brand-sand">
              <div className="text-4xl mb-4 text-center">📮</div>
              <h3 className="text-2xl font-serif text-neutral-900 mb-3 text-center">
                Dobírka
              </h3>
              <p className="text-neutral-700 mb-4 text-center text-sm">
                Platba při převzetí
              </p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>✓ Platba hotově/kartou</li>
                <li>✓ Při převzetí na výdejním místě</li>
                <li>✓ <strong>+50 Kč</strong> poplatek</li>
                <li>✓ Možnost otevření balíku</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-brand-sand text-center">
                <span className="text-xs text-neutral-600">Poplatek: 50 Kč</span>
              </div>
            </div>
          </div>
        </section>

        {/* B2B platba */}
        <section className="mb-16">
          <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💼</div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif text-brand-burgundy mb-3">
                  B2B Platba fakturou (14 dní)
                </h3>
                <p className="text-neutral-700 mb-4">
                  Registrované B2B zákazníky mají možnost platby fakturou se splatností <strong>14 dní</strong>.
                  Expedice okamžitě po vytvoření objednávky.
                </p>
                <ul className="space-y-2 text-neutral-700 mb-6">
                  <li>• Sleva 15-30% (dle objemu nákupů)</li>
                  <li>• Doprava zdarma</li>
                  <li>• Prioritní expedice</li>
                  <li>• Osobní account manager</li>
                </ul>
                <Link
                  href="/pro-kadernice"
                  className="inline-block bg-brand-burgundy text-brand-ivory px-6 py-2 rounded-full text-sm hover:bg-brand-burgundy-hover transition-all"
                >
                  Zjistit více o B2B
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ doprava */}
        <section className="mb-16">
          <h2 className="text-4xl font-serif text-brand-burgundy mb-8">
            Časté dotazy
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Jak zjistím, kam byla zásilka doručena?',
                a: 'Po předání zásilce kurýrovi ti pošleme tracking číslo na e-mail. Pomocí něj můžeš sledovat stav zásilky na packeta.cz.',
              },
              {
                q: 'Můžu si vybrat konkrétní výdejní místo?',
                a: 'Ano, při objednávce si vybíráš z mapy výdejních míst Packeta to, které ti nejvíce vyhovuje.',
              },
              {
                q: 'Co když mi zásilka nepřijde?',
                a: 'Kontaktuj nás na info@muzahair.cz nebo +420 777 888 999. Vyřešíme to do 48 hodin (48h Guarantee).',
              },
              {
                q: 'Můžu balík otevřít před zaplacením?',
                a: 'Ano, u dobírky můžeš balík otevřít před zaplacením a zkontrolovat obsah.',
              },
              {
                q: 'Doručujete do zahraničí mimo SK?',
                a: 'Momentálně pouze do CZ a SK. Pro jiné země nás kontaktuj na info@muzahair.cz.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand">
                <h4 className="font-medium text-neutral-900 mb-2">{faq.q}</h4>
                <p className="text-sm text-neutral-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-brand-cream rounded-3xl p-10 border border-brand-sand text-center">
          <h3 className="text-3xl font-serif text-neutral-900 mb-4">Další dotazy?</h3>
          <p className="text-neutral-700 mb-8">
            Podívej se do našeho FAQ nebo nás kontaktuj
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/faq"
              className="bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-8 py-3 rounded-full transition-all"
            >
              FAQ
            </Link>
            <Link
              href="/kontakt"
              className="border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-ivory px-8 py-3 rounded-full transition-all"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
