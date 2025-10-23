import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

export default function ONasPage() {
  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-serif text-neutral-900 mb-6">O nás</h1>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          Jsme český e-shop specializující se na prémiové vlasové extenze. Náš příběh začal v roce
          2020, když jsme si uvědomili, že trh s extenzemi potřebuje revoluci.
        </p>
      </section>

      {/* Story */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Mission */}
        <div className="bg-brand-cream rounded-3xl p-10 mb-12 border border-brand-sand">
          <h2 className="text-3xl font-serif text-brand-burgundy mb-6">Naše mise</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            Věříme, že každá žena si zaslouží krásné vlasy bez kompromisů. Proto nabízíme
            vlasové extenze nejvyšší kvality za férové ceny, s inovativním AI Color-Match systémem
            a zákaznickým servisem, který skutečně funguje.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Prodej po gramech znamená, že platíš jen za to, co opravdu potřebuješ. Žádné
            předražené balíčky, žádné zbytečné plýtvání.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: '✨',
              title: 'Kvalita',
              desc: 'Pracujeme pouze s EE/EU/REMY vlasy od ověřených dodavatelů. Každá šarže prochází kontrolou kvality.',
            },
            {
              icon: '🤝',
              title: 'Transparentnost',
              desc: 'Žádné skryté poplatky. Co vidíš, to platíš. Otevřená komunikace o původu a kvalitě vlasů.',
            },
            {
              icon: '💚',
              title: 'Udržitelnost',
              desc: 'Minimalistické balení, eco-friendly materiály. Podporujeme lokální kadeřnice a vzdělávání.',
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="bg-brand-ivory rounded-3xl p-8 border border-brand-sand text-center"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-serif text-brand-burgundy mb-3">{value.title}</h3>
              <p className="text-neutral-700">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Numbers */}
        <div className="bg-gradient-to-br from-brand-burgundy to-brand-burgundy-active text-brand-ivory rounded-3xl p-10 mb-20">
          <h2 className="text-3xl font-serif mb-10 text-center">Múza Hair v číslech</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '2020', label: 'Založení' },
              { number: '5000+', label: 'Spokojených zákaznic' },
              { number: '95%', label: 'AI přesnost' },
              { number: '48h', label: 'Guarantee' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-serif mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif text-neutral-900 mb-12 text-center">Náš tým</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Jana Nováková',
                role: 'Founder & CEO',
                bio: '15 let zkušeností v beauty průmyslu. Vystudovala kosmetologii v Londýně.',
              },
              {
                name: 'Petra Svobodová',
                role: 'Head of Customer Success',
                bio: 'Certifikovaná kadeřnice s láskou k detailům. Garantuje Shade-Swap program.',
              },
              {
                name: 'Tomáš Dvořák',
                role: 'AI & Tech Lead',
                bio: 'Vyvinul AI Color-Match algoritmus. Předtím pracoval v Google AI Research.',
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-brand-ivory rounded-3xl p-8 border border-brand-sand text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-brand-sand to-brand-cream rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-serif text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-sm text-brand-burgundy mb-3">{member.role}</p>
                <p className="text-sm text-neutral-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="bg-brand-cream rounded-3xl p-10 border border-brand-sand">
          <h2 className="text-3xl font-serif text-neutral-900 mb-8 text-center">Naše záruky</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Shade-Swap 14 dní',
                desc: 'Pokud ti odstín nebude přesně sedět, vyměníme ti ho zdarma do 14 dní od doručení.',
              },
              {
                title: '48h Guarantee',
                desc: 'Odpovíme na tvůj dotaz do 48 hodin. Garantováno, nebo dostaneš 10% slevu na příští nákup.',
              },
              {
                title: 'Kvalita EE/EU/REMY',
                desc: 'Každá šarže vlasů prochází kontrolou. Pokud nejsi spokojená, vrátíme ti peníze.',
              },
              {
                title: 'Odesíláme dnes',
                desc: 'Objednávky přijaté do 14:00 odesíláme ještě tentýž den. Packeta CZ/SK.',
              },
            ].map((guarantee, idx) => (
              <div
                key={idx}
                className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand"
              >
                <h3 className="font-medium text-brand-burgundy mb-2">{guarantee.title}</h3>
                <p className="text-sm text-neutral-700">{guarantee.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-serif text-neutral-900 mb-6">Připravená začít?</h2>
          <p className="text-lg text-neutral-600 mb-10">
            Vyber si z naší nabídky nebo vyzkoušej AI Color-Match
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-color-match"
              className="bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-10 py-4 rounded-full text-base font-medium transition-all shadow-soft-lg"
            >
              Spustit AI Color-Match
            </Link>
            <Link
              href="/obchod"
              className="border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-ivory px-10 py-4 rounded-full text-base font-medium transition-all"
            >
              Procházet katalog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
