'use client';

import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { useCart } from '@/contexts/CartContext';
import { getShadeInfo } from '@/lib/mock-data';

export default function KosikPage() {
  const { items, total, subtotal, removeItem, updateItemGrams, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-brand-ivory">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl font-serif text-neutral-900 mb-6">Tvůj košík je prázdný</h1>
          <p className="text-lg text-neutral-600 mb-10">
            Vyber si z naší nabídky kvalitních vlasových extenzí
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

  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-serif text-neutral-900">Košík</h1>
          <button
            onClick={clearCart}
            className="text-sm text-neutral-600 hover:text-brand-burgundy transition-colors"
          >
            Vyprázdnit košík
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => {
              const shadeInfo = getShadeInfo(item.product.shade);
              const itemTotal = item.grams * item.pricePerGram;

              return (
                <div
                  key={item.productId}
                  className="bg-brand-ivory border border-brand-sand rounded-3xl p-6 hover:border-brand-burgundy/30 transition-all"
                >
                  <div className="flex gap-6">
                    {/* Product image/swatch */}
                    <Link
                      href={`/produkt/${item.product.slug}`}
                      className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-brand-cream to-brand-sand rounded-2xl flex items-center justify-center"
                    >
                      <div
                        className="w-12 h-12 rounded-full border-2 border-white shadow-soft"
                        style={{ backgroundColor: shadeInfo?.color }}
                      ></div>
                    </Link>

                    {/* Product info */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <Link
                            href={`/produkt/${item.product.slug}`}
                            className="text-xl font-serif text-neutral-900 hover:text-brand-burgundy transition-colors"
                          >
                            {shadeInfo?.name}
                          </Link>
                          <p className="text-sm text-neutral-600 mt-1">
                            {item.product.shade} • {item.product.method} • {item.product.length}cm
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.productId)}
                          className="text-neutral-500 hover:text-brand-burgundy transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      {/* Gram selector */}
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateItemGrams(
                                item.productId,
                                Math.max(item.product.minGrams, item.grams - item.product.stepGrams)
                              )
                            }
                            className="w-8 h-8 bg-brand-cream hover:bg-brand-sand rounded-full text-neutral-700 transition-all"
                          >
                            −
                          </button>
                          <input
                            type="number"
                            value={item.grams}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              if (val >= item.product.minGrams && val <= item.product.maxGrams) {
                                updateItemGrams(item.productId, val);
                              }
                            }}
                            min={item.product.minGrams}
                            max={item.product.maxGrams}
                            step={item.product.stepGrams}
                            className="w-20 text-center py-2 px-3 bg-brand-cream border border-brand-sand rounded-full focus:outline-none focus:border-brand-burgundy"
                          />
                          <span className="text-sm text-neutral-600">g</span>
                          <button
                            onClick={() =>
                              updateItemGrams(
                                item.productId,
                                Math.min(item.product.maxGrams, item.grams + item.product.stepGrams)
                              )
                            }
                            className="w-8 h-8 bg-brand-cream hover:bg-brand-sand rounded-full text-neutral-700 transition-all"
                          >
                            +
                          </button>
                        </div>

                        <div className="flex-1"></div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-sm text-neutral-600">{item.pricePerGram} Kč/g</p>
                          <p className="text-2xl font-serif text-brand-burgundy">
                            {itemTotal.toLocaleString('cs-CZ')} Kč
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand sticky top-28">
              <h2 className="text-2xl font-serif text-neutral-900 mb-6">Shrnutí objednávky</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-neutral-700">
                  <span>Mezisoučet:</span>
                  <span>{subtotal.toLocaleString('cs-CZ')} Kč</span>
                </div>
                <div className="flex justify-between text-neutral-700">
                  <span>Doprava:</span>
                  <span className="text-sm text-brand-burgundy">Vypočítá se v dalším kroku</span>
                </div>
              </div>

              <div className="border-t border-brand-sand pt-4 mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-lg font-medium text-neutral-900">Celkem:</span>
                  <span className="text-3xl font-serif text-brand-burgundy">
                    {Math.round(total).toLocaleString('cs-CZ')} Kč
                  </span>
                </div>
              </div>

              <Link
                href="/pokladna"
                className="block w-full bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory text-center py-4 rounded-full text-base font-medium transition-all shadow-soft-lg mb-4"
              >
                Pokračovat k pokladně
              </Link>

              <Link
                href="/obchod"
                className="block text-center text-sm text-neutral-600 hover:text-brand-burgundy transition-colors"
              >
                ← Pokračovat v nákupu
              </Link>

              {/* Trust badges */}
              <div className="mt-8 pt-8 border-t border-brand-sand space-y-3">
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <span className="text-xl">🔄</span>
                  <span>Shade-Swap 14 dní zdarma</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <span className="text-xl">⏱️</span>
                  <span>48h Guarantee</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <span className="text-xl">📦</span>
                  <span>Odesíláme dnes (do 14:00)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
