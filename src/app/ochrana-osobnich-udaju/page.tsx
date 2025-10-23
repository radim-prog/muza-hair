import { Navigation } from '@/components/Navigation';
import Link from 'next/link';

export default function OchranaOsobnichUdajuPage() {
  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-serif text-neutral-900 mb-6">
          Ochrana osobních údajů (GDPR)
        </h1>
        <p className="text-sm text-neutral-600 mb-12">
          Platné od 1. 1. 2025 • Verze 1.0
        </p>

        <div className="prose prose-neutral max-w-none">
          {/* Úvod */}
          <section className="mb-12">
            <div className="bg-brand-cream rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                Vážíme si tvého soukromí. Tento dokument popisuje, jak zpracováváme tvé osobní
                údaje v souladu s nařízením GDPR (EU) 2016/679 a zákonem č. 110/2019 Sb.
              </p>
            </div>
          </section>

          {/* 1. Správce */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              1. Správce osobních údajů
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>Správce:</strong>
                <br />
                Múza Hair s.r.o.
                <br />
                IČO: 12345678
                <br />
                Václavské náměstí 123, 110 00 Praha 1
                <br />
                E-mail: info@muzahair.cz
                <br />
                Tel: +420 777 888 999
              </p>
            </div>
          </section>

          {/* 2. Jaké údaje zpracováváme */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              2. Jaké osobní údaje zpracováváme
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>2.1. Identifikační údaje:</strong>
                <br />
                Jméno, příjmení, e-mail, telefon, doručovací adresa, fakturační adresa.
              </p>
              <p>
                <strong>2.2. Objednávky a platby:</strong>
                <br />
                Číslo objednávky, údaje o zakoupeném zboží, cena, způsob platby.
              </p>
              <p>
                <strong>2.3. B2B údaje:</strong>
                <br />
                IČO, DIČ, název firmy, obchodní podmínky B2B.
              </p>
              <p>
                <strong>2.4. Technické údaje:</strong>
                <br />
                IP adresa, cookies, informace o zařízení a prohlížeči (pro analýzu návštěvnosti).
              </p>
            </div>
          </section>

          {/* 3. Účel zpracování */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              3. Účel a právní základ zpracování
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>3.1. Plnění smlouvy (čl. 6 odst. 1 písm. b GDPR):</strong>
                <br />
                Zpracování objednávek, dodání zboží, komunikace o objednávce.
              </p>
              <p>
                <strong>3.2. Právní povinnost (čl. 6 odst. 1 písm. c GDPR):</strong>
                <br />
                Účetnictví, daňové evidence, archivace dokladů.
              </p>
              <p>
                <strong>3.3. Oprávněný zájem (čl. 6 odst. 1 písm. f GDPR):</strong>
                <br />
                Marketing (newsletter), analýza návštěvnosti, zlepšování služeb.
              </p>
              <p>
                <strong>3.4. Souhlas (čl. 6 odst. 1 písm. a GDPR):</strong>
                <br />
                Newsletter, AI Color-Match analýza fotek.
              </p>
            </div>
          </section>

          {/* 4. Doba uložení */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              4. Doba uchovávání údajů
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>4.1. Objednávky a faktury:</strong> 10 let (daňová povinnost)
              </p>
              <p>
                <strong>4.2. Účet zákazníka:</strong> Do odstranění účtu nebo 3 roky od poslední
                aktivity
              </p>
              <p>
                <strong>4.3. Newsletter:</strong> Do odhlášení nebo odvolání souhlasu
              </p>
              <p>
                <strong>4.4. AI Color-Match fotky:</strong> Ihned po analýze (maximálně 24 hodin)
              </p>
              <p>
                <strong>4.5. Cookies:</strong> Podle typu (technické 1 rok, analytické 2 roky)
              </p>
            </div>
          </section>

          {/* 5. Komu předáváme údaje */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              5. Příjemci osobních údajů
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>5.1. Dopravní služby:</strong> Packeta (jméno, adresa, telefon)
              </p>
              <p>
                <strong>5.2. Platební brána:</strong> Stripe / GoPay (platební údaje)
              </p>
              <p>
                <strong>5.3. Účetní služby:</strong> Externí účetní (faktury, daňové doklady)
              </p>
              <p>
                <strong>5.4. IT služby:</strong> Firebase/Google Cloud (hosting databáze)
              </p>
              <p>
                <strong>5.5. Marketing:</strong> Mailchimp (newsletter - pouze se souhlasem)
              </p>
            </div>
          </section>

          {/* 6. Tvá práva */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              6. Tvá práva
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>6.1. Právo na přístup:</strong> Máš právo vědět, jaké údaje o tobě
                zpracováváme.
              </p>
              <p>
                <strong>6.2. Právo na opravu:</strong> Můžeš nás požádat o opravu nesprávných
                údajů.
              </p>
              <p>
                <strong>6.3. Právo na výmaz ("být zapomenut"):</strong> Za určitých podmínek můžeš
                požádat o smazání údajů.
              </p>
              <p>
                <strong>6.4. Právo na omezení zpracování:</strong> Můžeš požádat o dočasné omezení
                zpracování.
              </p>
              <p>
                <strong>6.5. Právo na přenositelnost:</strong> Máš právo získat své údaje ve
                strojově čitelném formátu.
              </p>
              <p>
                <strong>6.6. Právo vznést námitku:</strong> Můžeš vznést námitku proti zpracování
                (např. marketing).
              </p>
              <p>
                <strong>6.7. Právo podat stížnost:</strong> Můžeš podat stížnost u Úřadu pro
                ochranu osobních údajů (www.uoou.cz).
              </p>
            </div>
          </section>

          {/* 7. Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              7. Soubory cookies
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>7.1. Technické cookies:</strong> Nezbytné pro fungování e-shopu (košík,
                přihlášení).
              </p>
              <p>
                <strong>7.2. Analytické cookies:</strong> Google Analytics (anonymizovaná
                návštěvnost).
              </p>
              <p>
                <strong>7.3. Marketingové cookies:</strong> Pouze se souhlasem (remarketing).
              </p>
              <p>
                Cookies můžeš odmítnout v nastavení prohlížeče. Technické cookies jsou však nutné
                pro objednávku.
              </p>
            </div>
          </section>

          {/* 8. Zabezpečení */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              8. Zabezpečení údajů
            </h2>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>8.1.</strong> Veškeré údaje jsou přenášeny šifrovaným HTTPS spojením.
              </p>
              <p>
                <strong>8.2.</strong> Databáze jsou zabezpečeny na cloudových serverech s
                pravidelným zálohováním.
              </p>
              <p>
                <strong>8.3.</strong> Přístup k údajům mají pouze oprávněné osoby.
              </p>
            </div>
          </section>

          {/* 9. Kontakt */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">
              9. Jak uplatnit svá práva
            </h2>
            <div className="bg-brand-cream rounded-2xl p-6 border border-brand-sand space-y-4 text-neutral-700">
              <p>
                <strong>E-mail:</strong> gdpr@muzahair.cz nebo info@muzahair.cz
                <br />
                <strong>Telefon:</strong> +420 777 888 999
                <br />
                <strong>Pošta:</strong> Múza Hair s.r.o., Václavské náměstí 123, 110 00 Praha 1
              </p>
              <p className="text-sm">
                Odpovíme do 30 dnů od obdržení žádosti. V případě složitých žádostí můžeme lhůtu
                prodloužit o dalších 60 dnů.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand text-center">
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">Máš dotaz k GDPR?</h3>
            <p className="text-neutral-700 mb-6">
              Rádi ti vysvětlíme, jak chráníme tvé osobní údaje.
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
