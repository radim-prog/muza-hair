import { Navigation } from '@/components/Navigation';

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl md:text-6xl font-serif text-neutral-900 mb-6 text-center">
          Kontakt
        </h1>
        <p className="text-xl text-neutral-600 mb-16 text-center max-w-2xl mx-auto">
          Máš dotaz? Rádi ti pomůžeme. Odpovídáme do 48 hodin, garantováno.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact form */}
          <div className="bg-brand-ivory rounded-3xl p-8 border border-brand-sand">
            <h2 className="text-2xl font-serif text-neutral-900 mb-6">Napiš nám</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Jméno *"
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-mail *"
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Telefon (volitelné)"
                  className="w-full px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy">
                  <option>Dotaz k objednávce</option>
                  <option>Dotaz k produktu</option>
                  <option>Shade-Swap výměna</option>
                  <option>B2B spolupráce</option>
                  <option>Jiné</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Tvoje zpráva *"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory py-4 rounded-full text-base font-medium transition-all shadow-soft-lg"
              >
                Odeslat zprávu
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📧</div>
                <div>
                  <h3 className="text-xl font-serif text-brand-burgundy mb-2">E-mail</h3>
                  <a
                    href="mailto:info@muzahair.cz"
                    className="text-neutral-700 hover:text-brand-burgundy transition-colors"
                  >
                    info@muzahair.cz
                  </a>
                  <p className="text-sm text-neutral-600 mt-1">Odpovídáme do 48h</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📞</div>
                <div>
                  <h3 className="text-xl font-serif text-brand-burgundy mb-2">Telefon</h3>
                  <a
                    href="tel:+420777888999"
                    className="text-neutral-700 hover:text-brand-burgundy transition-colors"
                  >
                    +420 777 888 999
                  </a>
                  <p className="text-sm text-neutral-600 mt-1">Po-Pá 9:00 - 17:00</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📍</div>
                <div>
                  <h3 className="text-xl font-serif text-brand-burgundy mb-2">Adresa</h3>
                  <p className="text-neutral-700">
                    Múza Hair s.r.o.
                    <br />
                    Václavské náměstí 123
                    <br />
                    110 00 Praha 1
                    <br />
                    Česká republika
                  </p>
                  <p className="text-sm text-neutral-600 mt-2">
                    * Kamenná prodejna pouze pro B2B po domluvě
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💬</div>
                <div>
                  <h3 className="text-xl font-serif text-brand-burgundy mb-2">Sociální sítě</h3>
                  <div className="space-y-2">
                    <a
                      href="https://instagram.com/muzahair"
                      className="block text-neutral-700 hover:text-brand-burgundy transition-colors"
                    >
                      Instagram: @muzahair
                    </a>
                    <a
                      href="https://facebook.com/muzahair"
                      className="block text-neutral-700 hover:text-brand-burgundy transition-colors"
                    >
                      Facebook: Múza Hair
                    </a>
                    <a
                      href="https://tiktok.com/@muzahair"
                      className="block text-neutral-700 hover:text-brand-burgundy transition-colors"
                    >
                      TikTok: @muzahair
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company info */}
        <div className="bg-brand-ivory rounded-3xl p-8 border border-brand-sand text-center">
          <h2 className="text-2xl font-serif text-neutral-900 mb-6">Fakturační údaje</h2>
          <div className="text-neutral-700 space-y-1">
            <p>
              <strong>Múza Hair s.r.o.</strong>
            </p>
            <p>Václavské náměstí 123, 110 00 Praha 1</p>
            <p>IČO: 12345678 • DIČ: CZ12345678</p>
            <p>Zapsána v OR u Městského soudu v Praze, oddíl C, vložka 123456</p>
          </div>
        </div>
      </div>
    </div>
  );
}
