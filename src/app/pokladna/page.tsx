'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { useCart } from '@/contexts/CartContext';

export default function PokladnaPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    // Contact
    email: '',
    phone: '',
    // Shipping
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    zip: '',
    country: 'Česká republika',
    // Payment
    paymentMethod: 'card',
    // Notes
    note: '',
  });

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-brand-ivory">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl font-serif text-neutral-900 mb-6">Košík je prázdný</h1>
          <p className="text-lg text-neutral-600 mb-10">
            Nejprve přidej produkty do košíku
          </p>
          <Link
            href="/obchod"
            className="inline-block bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-10 py-4 rounded-full text-base font-medium transition-all shadow-soft-lg"
          >
            Procházet katalog
          </Link>
        </div>
      </div>
    );
  }

  const shippingCost = 150; // Example: 150 Kč flat rate
  const finalTotal = total + shippingCost;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // TODO: Send to Firebase/backend
    console.log('Order submitted:', { ...formData, items, total: finalTotal });

    // Clear cart and redirect
    clearCart();
    router.push('/objednavka-dokoncena');
  };

  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-serif text-neutral-900 mb-12">Pokladna</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact info */}
              <div className="bg-brand-ivory border border-brand-sand rounded-3xl p-8">
                <h2 className="text-2xl font-serif text-neutral-900 mb-6">Kontaktní údaje</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="E-mail *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="col-span-2 px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
                  />
                  <input
                    type="tel"
                    placeholder="Telefon *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="col-span-2 px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
                  />
                </div>
              </div>

              {/* Shipping address */}
              <div className="bg-brand-ivory border border-brand-sand rounded-3xl p-8">
                <h2 className="text-2xl font-serif text-neutral-900 mb-6">Doručovací adresa</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Jméno *"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
                  />
                  <input
                    type="text"
                    placeholder="Příjmení *"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
                  />
                  <input
                    type="text"
                    placeholder="Ulice a číslo popisné *"
                    required
                    value={formData.street}
                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                    className="col-span-2 px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
                  />
                  <input
                    type="text"
                    placeholder="Město *"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
                  />
                  <input
                    type="text"
                    placeholder="PSČ *"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
                  />
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="col-span-2 px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
                  >
                    <option>Česká republika</option>
                    <option>Slovensko</option>
                  </select>
                </div>
              </div>

              {/* Payment method */}
              <div className="bg-brand-ivory border border-brand-sand rounded-3xl p-8">
                <h2 className="text-2xl font-serif text-neutral-900 mb-6">Způsob platby</h2>
                <div className="space-y-3">
                  {[
                    { id: 'card', label: 'Platební karta', desc: 'Online platba kartou' },
                    { id: 'bank_transfer', label: 'Bankovní převod', desc: 'Zaplatíte až po obdržení faktury' },
                    { id: 'cash_on_delivery', label: 'Dobírka', desc: 'Zaplatíte při převzetí (+50 Kč)' },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        formData.paymentMethod === method.id
                          ? 'border-brand-burgundy bg-brand-cream'
                          : 'border-brand-sand hover:border-brand-burgundy/30'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="mt-1 accent-brand-burgundy"
                      />
                      <div>
                        <p className="font-medium text-neutral-900">{method.label}</p>
                        <p className="text-sm text-neutral-600">{method.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="bg-brand-ivory border border-brand-sand rounded-3xl p-8">
                <h2 className="text-2xl font-serif text-neutral-900 mb-6">Poznámka k objednávce</h2>
                <textarea
                  placeholder="Např. preferovaný čas doručení, speciální požadavky..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy resize-none"
                />
              </div>
            </div>

            {/* Right: Summary */}
            <div className="lg:col-span-1">
              <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand sticky top-28">
                <h2 className="text-2xl font-serif text-neutral-900 mb-6">Shrnutí</h2>

                {/* Items count */}
                <div className="mb-6 pb-6 border-b border-brand-sand">
                  <p className="text-sm text-neutral-600">
                    {items.length} {items.length === 1 ? 'položka' : 'položky'} v košíku
                  </p>
                </div>

                {/* Pricing */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-neutral-700">
                    <span>Mezisoučet:</span>
                    <span>{Math.round(total).toLocaleString('cs-CZ')} Kč</span>
                  </div>
                  <div className="flex justify-between text-neutral-700">
                    <span>Doprava:</span>
                    <span>{shippingCost.toLocaleString('cs-CZ')} Kč</span>
                  </div>
                </div>

                <div className="border-t border-brand-sand pt-4 mb-8">
                  <div className="flex justify-between items-baseline">
                    <span className="text-lg font-medium text-neutral-900">Celkem:</span>
                    <span className="text-3xl font-serif text-brand-burgundy">
                      {Math.round(finalTotal).toLocaleString('cs-CZ')} Kč
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory py-4 rounded-full text-base font-medium transition-all shadow-soft-lg disabled:opacity-50 disabled:cursor-not-allowed mb-4"
                >
                  {isProcessing ? 'Zpracovávám...' : 'Dokončit objednávku'}
                </button>

                <p className="text-xs text-neutral-600 text-center">
                  Kliknutím na tlačítko souhlasíš s{' '}
                  <Link href="/obchodni-podminky" className="underline hover:text-brand-burgundy">
                    obchodními podmínkami
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
