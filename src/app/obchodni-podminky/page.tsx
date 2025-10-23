import { Navigation } from '@/components/Navigation';
import Link from 'next/link';

export default function ObchodniPodminkyPage() {
  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-serif text-neutral-900 mb-6">
          Obchodní podmínky
        </h1>
        <p className="text-sm text-neutral-600 mb-12">
          Platné od 1. 1. 2025 • Verze 1.0
        </p>

        <div className="prose prose-neutral max-w-none">
          {/* 1. Základní ustanovení */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              1. Základní ustanovení
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>1.1.</strong> Tyto obchodní podmínky (dále jen "OP") upravují práva a
                povinnosti prodávajícího a kupujícího při nákupu zboží prostřednictvím
                internetového obchodu na doméně muzahair.cz.
              </p>
              <p>
                <strong>1.2. Prodávající:</strong>
                <br />
                Múza Hair s.r.o.
                <br />
                IČO: 12345678, DIČ: CZ12345678
                <br />
                Václavské náměstí 123, 110 00 Praha 1
                <br />
                E-mail: info@muzahair.cz, Tel: +420 777 888 999
              </p>
              <p>
                <strong>1.3.</strong> Odesláním objednávky kupující potvrzuje, že se seznámil s
                těmito OP a že s nimi souhlasí. Tyto OP tvoří nedílnou součást kupní smlouvy.
              </p>
            </div>
          </section>

          {/* 2. Objednávka a uzavření smlouvy */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              2. Objednávka a uzavření smlouvy
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>2.1.</strong> Objednávku lze vytvořit vyplněním objednávkového formuláře na
                webových stránkách. Před odesláním objednávky má kupující možnost zkontrolovat a
                měnit údaje.
              </p>
              <p>
                <strong>2.2.</strong> Odesláním objednávky vzniká návrh kupní smlouvy. Kupní smlouva
                je uzavřena okamžikem doručení potvrzení objednávky prodávajícím na e-mail
                kupujícího.
              </p>
              <p>
                <strong>2.3.</strong> Prodávající si vyhrazuje právo odmítnout objednávku v případě
                nedostupnosti zboží nebo zjevné chyby v ceně.
              </p>
            </div>
          </section>

          {/* 3. Cena a platební podmínky */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              3. Cena a platební podmínky
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>3.1.</strong> Všechny ceny jsou uvedeny včetně DPH. Cena zboží je platná v
                okamžiku odeslání objednávky.
              </p>
              <p>
                <strong>3.2.</strong> K ceně zboží se připočítává cena dopravy dle zvoleného způsobu
                doručení.
              </p>
              <p>
                <strong>3.3.</strong> Kupující může platit:
                <br />• Platební kartou online
                <br />• Bankovním převodem (splatnost 7 dní)
                <br />• Dobírkou při převzetí (+50 Kč)
              </p>
              <p>
                <strong>3.4.</strong> B2B zákazníci mohou platit fakturou se splatností 14 dní.
              </p>
            </div>
          </section>

          {/* 4. Dodací podmínky */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              4. Dodací podmínky
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>4.1.</strong> Objednávky přijaté do 14:00 odesíláme ještě tentýž pracovní
                den. Víkendové objednávky odesíláme v pondělí.
              </p>
              <p>
                <strong>4.2.</strong> Dodání zboží se uskutečňuje prostřednictvím přepravní služby
                Packeta CZ/SK. Standardní dodací lhůta je 1-3 pracovní dny.
              </p>
              <p>
                <strong>4.3.</strong> Cena dopravy: 150 Kč. Doprava zdarma pro objednávky nad 5000
                Kč a pro všechny B2B objednávky.
              </p>
            </div>
          </section>

          {/* 5. Právo na odstoupení od smlouvy */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              5. Právo na odstoupení od smlouvy
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>5.1.</strong> Kupující má právo odstoupit od smlouvy bez udání důvodu do 14
                dnů od převzetí zboží dle zákona č. 89/2012 Sb., občanský zákoník.
              </p>
              <p>
                <strong>5.2.</strong> Zboží musí být vráceno nepoužité, v původním obalu, včetně
                všech součástí a dokladů.
              </p>
              <p>
                <strong>5.3.</strong> Kupující je povinen zaslat prodávajícímu nejpozději do 14 dnů
                ode dne odstoupení od smlouvy zboží zpět. Náklady na vrácení zboží nese kupující.
              </p>
              <p>
                <strong>5.4.</strong> Prodávající vrátí kupujícímu peníze do 14 dnů od doručení
                vráceného zboží.
              </p>
            </div>
          </section>

          {/* 6. Shade-Swap program */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              6. Shade-Swap program
            </h2>
            <div className="bg-brand-cream rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>6.1.</strong> Pokud kupujícímu nesedne odstín vlasových extenzí, může
                využít 14denní Shade-Swap program.
              </p>
              <p>
                <strong>6.2.</strong> Prodávající zašle nový odstín zdarma včetně dopravy.
                Kupující vrátí původní nepoužitý produkt.
              </p>
              <p>
                <strong>6.3.</strong> Shade-Swap lze uplatnit pouze jednou na každou objednávku.
              </p>
            </div>
          </section>

          {/* 7. Reklamace */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              7. Reklamace a záruční podmínky
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>7.1.</strong> Na zboží se vztahuje zákonná záruka 24 měsíců od převzetí.
              </p>
              <p>
                <strong>7.2.</strong> Reklamaci lze uplatnit písemně na e-mail info@muzahair.cz
                nebo telefonicky.
              </p>
              <p>
                <strong>7.3.</strong> Podrobné reklamační podmínky naleznete v{' '}
                <Link href="/reklamacni-rad" className="text-brand-burgundy hover:underline">
                  Reklamačním řádu
                </Link>
                .
              </p>
            </div>
          </section>

          {/* 8. Ochrana osobních údajů */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              8. Ochrana osobních údajů
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>8.1.</strong> Ochrana osobních údajů kupujícího je upravena samostatným
                dokumentem{' '}
                <Link
                  href="/ochrana-osobnich-udaju"
                  className="text-brand-burgundy hover:underline"
                >
                  Ochrana osobních údajů
                </Link>
                .
              </p>
              <p>
                <strong>8.2.</strong> Prodávající zpracovává osobní údaje v souladu s nařízením
                GDPR a zákonem č. 110/2019 Sb.
              </p>
            </div>
          </section>

          {/* 9. Závěrečná ustanovení */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              9. Závěrečná ustanovení
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>9.1.</strong> Prodávající si vyhrazuje právo změnit tyto OP. Změna nabývá
                účinnosti dnem zveřejnění na webových stránkách.
              </p>
              <p>
                <strong>9.2.</strong> Na vztahy neupravené těmito OP se použijí příslušná
                ustanovení českého právního řádu.
              </p>
              <p>
                <strong>9.3.</strong> Řešení sporů: Kupující má právo obrátit se na subjekt
                mimosoudního řešení sporů - Česká obchodní inspekce (www.coi.cz).
              </p>
            </div>
          </section>

          {/* Contact */}
          <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand text-center">
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">Máš dotaz k OP?</h3>
            <p className="text-neutral-700 mb-6">
              Rádi ti odpovíme na všechny otázky týkající se obchodních podmínek.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-8 py-3 rounded-full transition-all"
            >
              Kontaktuj nás
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
