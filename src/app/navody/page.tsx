import { Navigation } from '@/components/Navigation';
import Link from 'next/link';

export default function NavodyPage() {
  const tutorials = [
    {
      method: 'TAPE',
      title: 'Tape-In Extensions',
      icon: '📼',
      difficulty: 'Snadné',
      time: '30-60 minut',
      durability: '6-8 týdnů',
      description:
        'Nejrychlejší a nejšetrnější metoda. Ideální pro začátečnice a domácí použití.',
      steps: [
        {
          title: '1. Příprava vlasů',
          content:
            'Vlasy důkladně umyj šamponem bez silikonu a nechej vyschnout. Vlasy musí být čisté a bez jakýchkoliv produktů (kondicionér, olej).',
          tip: 'Použij clarifying šampon den před aplikací pro odstranění všech zbytků produktů.',
        },
        {
          title: '2. Rozdělení vlasů',
          content:
            'Rozděl vlasy na sekce a spodní vrstvy zastřihni klipsy nahoru. Začínáš zespodu, postupuješ nahoru.',
          tip: 'Nech volných 1-2 cm od kořínků pro přirozený vzhled.',
        },
        {
          title: '3. Aplikace pásků',
          content:
            'Odděl tenkou pramínku tvých vlasů (stejná šířka jako tape). Sundej ochranný papír ze spodní strany tape, přilož zespodu k pramenům, sundej papír z horní strany a přilož druhou tape navrch. Pevně stiskni na 5-10 sekund.',
          tip: 'Pásky se nesmí dotýkat pokožky hlavy. Dodržuj vzdálenost 0,5-1 cm od kořínků.',
        },
        {
          title: '4. Opakování',
          content:
            'Pokračuj po celé hlavě v řadách směrem nahoru. Každou novou řadu umísti 1-2 cm nad předchozí.',
          tip: 'Pro plný objem potřebuješ 3-4 řady, cca 40-60 tape pásků.',
        },
        {
          title: '5. Finalizace',
          content:
            'Po aplikaci všech pásků počkej 48 hodin než umyješ vlasy. Nepoužívej saunu, bazén ani intenzivní cvičení první 2 dny.',
          tip: 'Vlasy můžeš lehce učesat a stylovat, ale vyvaruj se tepelné úpravy prvních 24 hodin.',
        },
      ],
      care: [
        'Myj vlasy vlažnou vodou, ne horkou',
        'Používej šampon bez sulfátů a silikonu',
        'Nenamazávej kondicionér nebo olej přímo na pásky',
        'Rozčesávej vlasy od konců směrem nahoru',
        'Spí se sepnutými vlasy (cop, culík)',
      ],
      removal:
        'K odstranění použij speciální remover na alkoholové bázi. Aplikuj na pásky, počkej 2-3 minuty a jemně rozlep.',
    },
    {
      method: 'ITIP',
      title: 'I-Tip Extensions (Micro-Ring)',
      icon: '💍',
      difficulty: 'Středně náročné',
      time: '2-3 hodiny',
      durability: '3-4 měsíce',
      description:
        'Bezteplotní metoda s mikro kroužky. Vydrží nejdéle, ale vyžaduje zkušenost nebo profesionála.',
      steps: [
        {
          title: '1. Příprava vlasů',
          content:
            'Vlasy umyj bez kondicionéru a nechej úplně vyschnout. Musí být zbavené všech produktů.',
          tip: 'I-Tip drží lépe na čistých, suchých vlasech bez jakýchkoliv olejů.',
        },
        {
          title: '2. Potřebné nástroje',
          content:
            'Budeš potřebovat: Micro-ring kleště, háček na protahování vlasů, mikro kroužky (stejná barva jako tvé vlasy).',
          tip: 'Kroužky měj ve 2-3 barvách pro lepší zakrytí (světlejší a tmavší odstín).',
        },
        {
          title: '3. Rozdělení a sekce',
          content:
            'Rozděl vlasy na malé sekce (šířka 1 cm, výška 1 cm). Pracuj zespodu nahoru, po řadách.',
          tip: 'Sekce musí být stejně velké pro rovnoměrný vzhled a komfort.',
        },
        {
          title: '4. Aplikace I-Tip',
          content:
            'Protáhni malou pramínku svých vlasů (10-20 vláken) háčkem skrz mikro kroužek. Přidej I-Tip pramen do kroužku. Umísti kroužek 0,5-1 cm od kořínků. Sevři kroužek kleštěmi (2x stisk - vodorovně a svisle).',
          tip: 'Nesevři kroužek příliš - může poškodit vlasy. Ale také ne příliš lehce - pramen vypadne.',
        },
        {
          title: '5. Opakování a distribuce',
          content:
            'Pro plný objem potřebuješ 100-150 I-Tip pramenů. Rovnoměrně distribuuj po celé hlavě, postupuj po řadách.',
          tip: 'Nech volný obvod kolem uší a šíje (2-3 cm) pro přirozený pohyb vlasů.',
        },
        {
          title: '6. Kontrola a úprava',
          content:
            'Projdi každý kroužek a zkontroluj, že je pevně sevřený ale ne přetažený. Vlasy by měly být pohodlné.',
          tip: 'První týden si zvykneš na pocit kroužků - je to normální.',
        },
      ],
      care: [
        'Rozčesávej denně speciálním kartáčem pro extenze',
        'Vyvaruj se kondicionéru na kořínky (jen na délku)',
        'Nepoužívej horké oleje nebo masky na oblast kroužků',
        'Kontroluj kroužky každé 2 týdny - pokud se uvolnily, dotáhni',
        'Spěte s copem nebo culíkem',
      ],
      removal:
        'Rozevři kroužky kleštěmi (opačným směrem než při aplikaci) a jemně vytáhni I-Tip pramen.',
    },
    {
      method: 'WEFT',
      title: 'Weft Extensions (Šité)',
      icon: '🧵',
      difficulty: 'Náročné (doporučujeme profesionála)',
      time: '3-5 hodin',
      durability: '2-3 měsíce',
      description:
        'Klasická metoda pro maximální objem. Vyžaduje profesionála s praxí.',
      steps: [
        {
          title: '1. Příprava (profesionál)',
          content:
            'Vlasy musí být čisté, suché a bez jakýchkoliv produktů. Klient sedí na židli, vlasy jsou rozčesané.',
          tip: 'Tento postup je určen primárně pro profesionální kadeřnice.',
        },
        {
          title: '2. Vytvoření cornrow copánků',
          content:
            'Vyplétej tenké, horizontální copánky (cornrow) po celé hlavě směrem od spodku nahoru. Copánky musí být pevné a rovné.',
          tip: 'Copánky určují místo kde bude weft přišitý - musí být na správné výšce.',
        },
        {
          title: '3. Přišití weft',
          content:
            'Speciální jehlou a silnou nití přišij weft k copánku. Prošij každé 0,5-1 cm pro pevnost. Zakončení uzlíkem a zatavením niti.',
          tip: 'Používej zakřivenou jehlu a odolnou nit (např. nylon nebo polyester).',
        },
        {
          title: '4. Vrstvy a distribuce',
          content:
            'Pro plný objem potřebuješ 3-5 weft pruhů (závislí na hustotě tvých vlasů). Rozestup mezi wefty: 2-3 cm.',
          tip: 'Nech volnou oblast kolem uší (2 cm) a šíje (3 cm).',
        },
        {
          title: '5. Ostříhání a styling',
          content:
            'Po aplikaci všech weftů ostříhej vlasy do tvaru a vytvoř přechody. Vlasy nastyluj.',
          tip: 'Weft metoda umožňuje nejpřirozenější tvarování a objemové střihy.',
        },
      ],
      care: [
        'Myj vlasy 2-3x týdně (ne každý den)',
        'Před mytím důkladně rozčeš',
        'Nepoužívej příliš horkou vodu na oblast švů',
        'Kontroluj švy každý týden - pokud se uvolní, nech přišít',
        'Spěte s copem nebo culíkem na boku',
      ],
      removal:
        'Profesionál rozstříhá nit nůžkami a opatrně vytáhne weft. Copánky se rozplétají.',
    },
  ];

  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-serif text-neutral-900 mb-6">
          Návody na aplikaci
        </h1>
        <p className="text-lg text-neutral-600 mb-16">
          Krok za krokem jak správně aplikovat vlasové extenze doma nebo v salonu
        </p>

        {/* Tutorials */}
        <div className="space-y-16">
          {tutorials.map((tutorial, idx) => (
            <section
              key={tutorial.method}
              id={tutorial.method.toLowerCase()}
              className="scroll-mt-24"
            >
              {/* Header */}
              <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{tutorial.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-4xl font-serif text-neutral-900">
                        {tutorial.title}
                      </h2>
                      <span className="px-3 py-1 rounded-full bg-brand-burgundy/10 text-brand-burgundy text-sm font-medium">
                        {tutorial.method}
                      </span>
                    </div>
                    <p className="text-neutral-700 mb-6">{tutorial.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-brand-ivory rounded-2xl p-4 border border-brand-sand">
                        <p className="text-xs text-neutral-600 mb-1">Náročnost</p>
                        <p className="font-medium text-neutral-900">{tutorial.difficulty}</p>
                      </div>
                      <div className="bg-brand-ivory rounded-2xl p-4 border border-brand-sand">
                        <p className="text-xs text-neutral-600 mb-1">Doba aplikace</p>
                        <p className="font-medium text-neutral-900">{tutorial.time}</p>
                      </div>
                      <div className="bg-brand-ivory rounded-2xl p-4 border border-brand-sand">
                        <p className="text-xs text-neutral-600 mb-1">Výdrž</p>
                        <p className="font-medium text-neutral-900">{tutorial.durability}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="mb-8">
                <h3 className="text-2xl font-serif text-brand-burgundy mb-6">
                  Postup aplikace
                </h3>
                <div className="space-y-4">
                  {tutorial.steps.map((step, stepIdx) => (
                    <div
                      key={stepIdx}
                      className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand"
                    >
                      <h4 className="font-medium text-neutral-900 mb-2">{step.title}</h4>
                      <p className="text-neutral-700 mb-3">{step.content}</p>
                      <div className="bg-brand-cream rounded-xl p-4 border-l-4 border-brand-burgundy">
                        <p className="text-sm text-neutral-700">
                          <strong className="text-brand-burgundy">💡 Tip:</strong> {step.tip}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Care Instructions */}
              <div className="mb-8">
                <h3 className="text-2xl font-serif text-brand-burgundy mb-6">
                  Péče po aplikaci
                </h3>
                <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand">
                  <ul className="space-y-3">
                    {tutorial.care.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-neutral-700">
                        <span className="text-brand-burgundy mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Removal */}
              <div className="bg-brand-cream rounded-2xl p-6 border border-brand-sand">
                <h4 className="font-medium text-neutral-900 mb-2">
                  🔄 Jak odstranit / Refresh
                </h4>
                <p className="text-neutral-700">{tutorial.removal}</p>
              </div>

              {/* Divider */}
              {idx < tutorials.length - 1 && (
                <div className="mt-16 border-t border-brand-sand"></div>
              )}
            </section>
          ))}
        </div>

        {/* Video Tutorials CTA */}
        <div className="mt-16 bg-gradient-to-br from-brand-burgundy to-brand-burgundy-active rounded-3xl p-10 text-brand-ivory text-center">
          <div className="text-5xl mb-4">🎥</div>
          <h3 className="text-3xl font-serif mb-4">Video návody již brzy!</h3>
          <p className="text-brand-ivory/90 mb-8 max-w-2xl mx-auto">
            Připravujeme video tutoriály pro každou metodu aplikace. Přihlas se k
            newsletteru a budeš první, kdo se o nich dozví.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-brand-ivory text-brand-burgundy px-8 py-3 rounded-full font-medium hover:bg-brand-cream transition-all"
          >
            Přihlásit se k newsletteru
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-brand-cream rounded-3xl p-10 border border-brand-sand text-center">
          <h3 className="text-3xl font-serif text-neutral-900 mb-4">
            Potřebuješ poradit s aplikací?
          </h3>
          <p className="text-neutral-700 mb-8">
            Náš tým ti rád pomůže s výběrem správné metody a poradí s aplikací
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-8 py-3 rounded-full transition-all"
            >
              Kontaktovat nás
            </Link>
            <Link
              href="/faq"
              className="border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-ivory px-8 py-3 rounded-full transition-all"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
