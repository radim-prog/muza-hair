import { Navigation } from '@/components/Navigation';
import Link from 'next/link';

export default function ReklamacniRadPage() {
  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-serif text-neutral-900 mb-6">
          Reklamační řád
        </h1>
        <p className="text-sm text-neutral-600 mb-12">
          Platné od 1. 1. 2025 • Verze 1.0
        </p>

        <div className="prose prose-neutral max-w-none">
          {/* Úvod */}
          <section className="mb-12">
            <div className="bg-brand-cream rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                Tento reklamační řád upravuje práva a povinnosti prodávajícího a kupujícího při
                uplatňování práv z vadného plnění v souladu se zákonem č. 89/2012 Sb., občanský
                zákoník.
              </p>
            </div>
          </section>

          {/* 1. Záruční doba */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              1. Záruční doba
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>1.1.</strong> Na všechny vlasové extenze poskytujeme záruku 24 měsíců od
                převzetí zboží.
              </p>
              <p>
                <strong>1.2.</strong> Záruční doba se prodlužuje o dobu, po kterou bylo zboží v
                reklamaci.
              </p>
            </div>
          </section>

          {/* 2. Vady zboží */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              2. Co je považováno za vadu
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>Reklamovatelné vady:</strong>
                <br />• Spletené vlasy po rozbalení
                <br />• Výrazné lámání vlasů
                <br />• Nerovnoměrná barva (rozdíl více než 2 tóny)
                <br />• Poškozené bondy/pásky u ITIP/TAPE
                <br />• Vadné přišití u WEFT
                <br />• Jiná kvalita než deklarovaná (EE/EU/REMY)
              </p>
              <p>
                <strong>Nereklamovatelné vady:</strong>
                <br />• Normální opotřebení při používání
                <br />• Mechanické poškození kupujícím
                <br />• Poškození nesprávnou péčí
                <br />• Neodborná aplikace extenzí
                <br />• Chemické ošetření (barvení, melír) bez konzultace
              </p>
            </div>
          </section>

          {/* 3. Jak reklamovat */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              3. Jak uplatnit reklamaci
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>Krok 1: Kontaktuj nás (48h Guarantee)</strong>
                <br />
                E-mail: info@muzahair.cz nebo Tel: +420 777 888 999
                <br />
                Odpovíme do 48 hodin! Pokud ne, dostaneš 10% slevu na příští nákup.
              </p>
              <p>
                <strong>Krok 2: Popis + fotky</strong>
                <br />• Číslo objednávky
                <br />• Popis vady
                <br />• 2-3 fotky vadného zboží (detail vady)
                <br />• Kdy jsi vadu zjistila
              </p>
              <p>
                <strong>Krok 3: Posouzení</strong>
                <br />
                Posoudíme reklamaci do 3 pracovních dnů. Pokud potřebujeme zboží vidět, zašleme ti
                návratový štítek zdarma.
              </p>
              <p>
                <strong>Krok 4: Řešení</strong>
                <br />• Výměna za nové zboží (nejčastější)
                <br />• Oprava (pokud možné)
                <br />• Vrácení peněz
                <br />• Přiměřená sleva (pokud vada není závažná)
              </p>
            </div>
          </section>

          {/* 4. Lhůty */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              4. Lhůty vyřízení reklamace
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>4.1.</strong> Standardní lhůta: 30 dnů od uplatnění reklamace.
              </p>
              <p>
                <strong>4.2.</strong> Náš cíl: Vyřešit do 7 pracovních dnů (95% reklamací).
              </p>
              <p>
                <strong>4.3.</strong> Pokud nelze vyřídit do 30 dnů, informujeme tě o důvodu a nové
                lhůtě.
              </p>
            </div>
          </section>

          {/* 5. Shade-Swap vs Reklamace */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              5. Shade-Swap vs Reklamace
            </h2>
            <div className="bg-brand-cream rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>Shade-Swap (odstín nesedí):</strong>
                <br />• Není reklamace - speciální zákaznický program
                <br />• 14 dní na výměnu odstínu zdarma
                <br />• Platí i když odstín není vadný
                <br />• Více v{' '}
                <Link href="/obchodni-podminky#shade-swap" className="text-brand-burgundy hover:underline">
                  Obchodních podmínkách
                </Link>
              </p>
              <p>
                <strong>Reklamace (vada):</strong>
                <br />• Zákonné právo (24 měsíců)
                <br />• Týká se technických vad
                <br />• Bez časového omezení (v rámci záruky)
              </p>
            </div>
          </section>

          {/* 6. Vrácení zboží */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              6. Způsob vrácení zboží
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>6.1.</strong> Po schválení reklamace ti zašleme návratový štítek Packeta
                zdarma.
              </p>
              <p>
                <strong>6.2.</strong> Zboží zabal do původního obalu nebo jiného vhodného obalu.
              </p>
              <p>
                <strong>6.3.</strong> Přilož vyplněný reklamační formulář (zašleme e-mailem).
              </p>
              <p>
                <strong>6.4.</strong> Odnes zásilku na Packeta výdejní místo.
              </p>
            </div>
          </section>

          {/* 7. Náklady */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              7. Náklady reklamace
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>7.1.</strong> Oprávněná reklamace: Všechny náklady hradí prodávající
                (doprava tam i zpět).
              </p>
              <p>
                <strong>7.2.</strong> Neoprávněná reklamace: Náklady na zpětnou dopravu hradí
                kupující.
              </p>
            </div>
          </section>

          {/* 8. Mimosoudní řešení */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              8. Mimosoudní řešení sporů
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>8.1.</strong> V případě sporu se můžeš obrátit na:
                <br />
                <strong>Česká obchodní inspekce</strong>
                <br />
                www.coi.cz
                <br />
                E-mail: adr@coi.cz
              </p>
              <p>
                <strong>8.2.</strong> Online řešení sporů (ODR platforma):
                <br />
                https://ec.europa.eu/consumers/odr
              </p>
            </div>
          </section>

          {/* Contact CTA */}
          <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand text-center">
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              Potřebuješ pomoc s reklamací?
            </h3>
            <p className="text-neutral-700 mb-6">
              48h Guarantee - Odpovíme do 48 hodin, garantováno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@muzahair.cz"
                className="bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-8 py-3 rounded-full transition-all inline-block"
              >
                info@muzahair.cz
              </a>
              <a
                href="tel:+420777888999"
                className="border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-ivory px-8 py-3 rounded-full transition-all inline-block"
              >
                +420 777 888 999
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
