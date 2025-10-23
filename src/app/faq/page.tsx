'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'Objednávka a platba',
      items: [
        {
          q: 'Jak funguje prodej po gramech?',
          a: 'Vybereš si produkt, nastavíš kolik gramů potřebuješ (min. 50g pro TAPE, 100g pro ITIP/WEFT), a platíš přesně za tuto váhu. Žádné předražené balíčky.',
        },
        {
          q: 'Jaké platební metody přijímáte?',
          a: 'Platební karta online, bankovní převod, nebo dobírka (+50 Kč). B2B zákazníci mohou platit fakturou se splatností 14 dní.',
        },
        {
          q: 'Můžu změnit nebo zrušit objednávku?',
          a: 'Ano, pokud objednávku ještě nebylo odesláno. Napiš nám e-mail nebo zavolej do 2 hodin od vytvoření objednávky.',
        },
        {
          q: 'Dostanu fakturu?',
          a: 'Ano, fakturu dostaneš e-mailem hned po vytvoření objednávky. B2B zákazníci dostanou fakturu s DIČ.',
        },
      ],
    },
    {
      category: 'Doprava a doručení',
      items: [
        {
          q: 'Kdy objednávku odešlete?',
          a: 'Objednávky přijaté do 14:00 odesíláme ještě tentýž pracovní den. Víkendové objednávky odesíláme v pondělí.',
        },
        {
          q: 'Kolik stojí doprava?',
          a: 'Packeta CZ/SK: 150 Kč. Doprava zdarma pro B2B zákazníky a při nákupu nad 5000 Kč.',
        },
        {
          q: 'Jak dlouho trvá doručení?',
          a: 'Packeta CZ: 1-2 pracovní dny. Packeta SK: 2-3 pracovní dny. Tracking číslo dostaneš e-mailem.',
        },
        {
          q: 'Doručujete do zahraničí?',
          a: 'Momentálně pouze do CZ a SK. Pokud potřebuješ dodávku jinam, kontaktuj nás na info@muzahair.cz.',
        },
      ],
    },
    {
      category: 'Produkty a kvalita',
      items: [
        {
          q: 'Jaký je rozdíl mezi EE, EU a REMY kvalitou?',
          a: 'EE = Eastern European (východoevropské vlasy, nejvyšší kvalita). EU = European mix (směs evropských vlasů). REMY = Nejvyšší kvalita, kutikuly zachovalé, dlouhá životnost.',
        },
        {
          q: 'Kolik gramů potřebuji?',
          a: 'Záleží na hustotě vlasů: Jemné vlasy: 50-100g. Střední hustota: 100-150g. Husté vlasy: 150-250g. Plné prodloužení: 200-400g.',
        },
        {
          q: 'Lze extenze barvit?',
          a: 'REMY a EE kvalitu lze barvit o 1-2 tóny tmavší. Světlení nedoporučujeme. Vždy doporučujeme konzultovat s kadeřnicí.',
        },
        {
          q: 'Jak dlouho vydrží extenze?',
          a: 'TAPE: 4-8 týdnů (lze přelepit 3-4x). ITIP: 3-6 měsíců (lze posunout). WEFT: až 1 rok při správné péči.',
        },
      ],
    },
    {
      category: 'AI Color-Match',
      items: [
        {
          q: 'Jak přesný je AI Color-Match?',
          a: 'Náš algoritmus dosahuje 95% přesnosti při správně nasvícených fotkách. Nezapomeň: přirozené denní světlo, 2-3 fotky z různých úhlů.',
        },
        {
          q: 'Co když mi AI doporučí špatný odstín?',
          a: 'Můžeš využít 14denní Shade-Swap program - vyměníme ti odstín zdarma. Nebo klidně objednej několik odstínů a vrať ty, které nesedí.',
        },
        {
          q: 'Mohu používat AI Color-Match vícekrát?',
          a: 'Ano, AI Color-Match je zcela zdarma a můžeš ho používat kolikrát chceš. Ideální když změníš barvu vlasů.',
        },
      ],
    },
    {
      category: 'Shade-Swap a reklamace',
      items: [
        {
          q: 'Jak funguje 14denní Shade-Swap?',
          a: 'Pokud ti odstín nesedne, kontaktuj nás do 14 dnů od doručení. Pošleme ti nový odstín a ty nám vrátíš původní (nepoužitý). Kompletně zdarma včetně dopravy.',
        },
        {
          q: 'Můžu vrátit produkt?',
          a: 'Ano, do 14 dnů bez udání důvodu podle zákona o ochraně spotřebitele. Produkt musí být nepoužitý v původním obalu.',
        },
        {
          q: 'Co když je produkt vadný?',
          a: '48h Guarantee: Napiš nám do 48 hodin, pošleme ti fotku/video návod, nebo výměnu/vrácení peněz. Garantujeme odpověď do 48h.',
        },
        {
          q: 'Jak pozn ám vadný produkt?',
          a: 'Spletené vlasy, výrazné lámání, nerovnoměrná barva, poškozené bondy/pásky. Vždy nám pošli fotku a my posoudíme.',
        },
      ],
    },
    {
      category: 'B2B a pro kadeřnice',
      items: [
        {
          q: 'Jak se registruji do B2B programu?',
          a: 'Vyplň formulář na stránce Pro kadeřnice. Schválení trvá do 24 hodin. Potřebujeme IČO nebo živnostenský list.',
        },
        {
          q: 'Jaké slevy dostanu jako kadeřnice?',
          a: 'Bronzová (5k/měsíc): 15%. Stříbrná (15k/měsíc): 20%. Zlatá (30k/měsíc): 30%. Plus doprava zdarma a školení.',
        },
        {
          q: 'Dostanu marketingovou podporu?',
          a: 'Ano! Profesionální fotky produktů pro Instagram/web, Before/After šablony, certifikát po školení.',
        },
        {
          q: 'Mohu objednávat jako fyzická osoba (OSVČ)?',
          a: 'Ano, B2B program je otevřený i pro OSVČ kadeřnice. Stačí IČO.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl md:text-6xl font-serif text-neutral-900 mb-6 text-center">
          Často kladené dotazy
        </h1>
        <p className="text-xl text-neutral-600 mb-16 text-center">
          Nenašla jsi odpověď?{' '}
          <Link href="/kontakt" className="text-brand-burgundy hover:underline">
            Kontaktuj nás
          </Link>
        </p>

        <div className="space-y-12">
          {faqs.map((category, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-3xl font-serif text-brand-burgundy mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.items.map((faq, idx) => {
                  const globalIdx = catIdx * 100 + idx;
                  const isOpen = openIndex === globalIdx;

                  return (
                    <div
                      key={idx}
                      className="bg-brand-ivory rounded-2xl border border-brand-sand overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-brand-cream transition-colors"
                      >
                        <span className="font-medium text-neutral-900 pr-8">{faq.q}</span>
                        <svg
                          className={`w-5 h-5 text-brand-burgundy flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 text-neutral-700 border-t border-brand-sand bg-brand-cream/30">
                          <p className="pt-4">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-brand-cream rounded-3xl p-10 border border-brand-sand text-center">
          <h2 className="text-3xl font-serif text-neutral-900 mb-4">Stále máš dotaz?</h2>
          <p className="text-neutral-600 mb-8">
            Rádi ti pomůžeme. Odpovídáme do 48 hodin, garantováno.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-10 py-4 rounded-full text-base font-medium transition-all shadow-soft-lg"
          >
            Kontaktuj nás
          </Link>
        </div>
      </div>
    </div>
  );
}
