import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

export default function ObjednavkaDokoncenaPage() {
  // In real app, get order number from URL params
  const orderNumber = `MH-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;

  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Success icon */}
        <div className="w-20 h-20 bg-brand-burgundy rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-brand-ivory" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-5xl font-serif text-neutral-900 mb-4">Děkujeme za objednávku!</h1>

        <p className="text-xl text-neutral-600 mb-8">
          Tvoje objednávka byla úspěšně přijata a brzy ji začneme zpracovávat.
        </p>

        {/* Order number */}
        <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand mb-8">
          <p className="text-sm text-neutral-600 mb-2">Číslo objednávky:</p>
          <p className="text-3xl font-serif text-brand-burgundy">{orderNumber}</p>
        </div>

        {/* What's next */}
        <div className="bg-brand-ivory rounded-3xl p-8 border border-brand-sand mb-10 text-left">
          <h2 className="text-2xl font-serif text-neutral-900 mb-6">Co bude dál?</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-medium text-neutral-900">Potvrzení e-mailem</p>
                <p className="text-sm text-neutral-600">
                  Na tvůj e-mail jsme ti poslali potvrzení objednávky s detaily.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">📦</span>
              <div>
                <p className="font-medium text-neutral-900">Balíme a odesíláme</p>
                <p className="text-sm text-neutral-600">
                  Objednávky přijaté do 14:00 odesíláme ještě tentýž den.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🚚</span>
              <div>
                <p className="font-medium text-neutral-900">Sledování zásilky</p>
                <p className="text-sm text-neutral-600">
                  Jakmile balíček předáme kurýrovi, pošleme ti tracking číslo.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🔄</span>
              <div>
                <p className="font-medium text-neutral-900">Shade-Swap 14 dní</p>
                <p className="text-sm text-neutral-600">
                  Pokud ti odstín nebude sedět, vyměníme ti ho zdarma do 14 dní.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/obchod"
            className="bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-10 py-4 rounded-full text-base font-medium transition-all shadow-soft-lg"
          >
            Pokračovat v nákupu
          </Link>
          <Link
            href="/"
            className="border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-ivory px-10 py-4 rounded-full text-base font-medium transition-all"
          >
            Zpět na hlavní stránku
          </Link>
        </div>

        {/* Support */}
        <div className="mt-12 pt-8 border-t border-brand-sand">
          <p className="text-sm text-neutral-600">
            Máš dotaz k objednávce?{' '}
            <Link href="/kontakt" className="text-brand-burgundy hover:underline">
              Kontaktuj nás
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
