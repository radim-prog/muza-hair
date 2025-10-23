'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getShadeInfo, MOCK_PRODUCTS } from '@/lib/mock-data';
import { Product } from '@/lib/types';
import { Navigation } from '@/components/Navigation';
import { useCart } from '@/contexts/CartContext';

export default function ProductDetailClient({ product }: { product: Product }) {
  const router = useRouter();
  const { addItem } = useCart();
  const shadeInfo = getShadeInfo(product.shade);
  const [selectedGrams, setSelectedGrams] = useState(product.minGrams);

  // Calculate price
  const totalPrice = selectedGrams * product.pricePerGram;

  // Get similar products (same method, different shade)
  const similarProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(
      (p) =>
        p.id !== product.id &&
        p.method === product.method &&
        p.length === product.length &&
        p.status === 'active'
    ).slice(0, 3);
  }, [product]);

  // Handle gram selection
  const handleGramChange = (value: number) => {
    const clamped = Math.max(
      product.minGrams,
      Math.min(product.maxGrams, Math.round(value / product.stepGrams) * product.stepGrams)
    );
    setSelectedGrams(clamped);
  };

  const handleAddToCart = () => {
    addItem(product, selectedGrams);
    router.push('/kosik');
  };

  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Image */}
          <div>
            <div className="aspect-square bg-gradient-to-br from-brand-cream to-brand-sand rounded-3xl overflow-hidden border border-brand-sand sticky top-28">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div
                    className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-soft-lg"
                    style={{ backgroundColor: shadeInfo?.color }}
                  ></div>
                  <p className="text-3xl font-serif text-neutral-700">{product.method}</p>
                  <p className="text-lg text-neutral-500 mt-2">{product.shade}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-neutral-600 mb-6">
              <Link href="/" className="hover:text-brand-burgundy">
                Domů
              </Link>
              <span>/</span>
              <Link href="/obchod" className="hover:text-brand-burgundy">
                Obchod
              </Link>
              <span>/</span>
              <span className="text-brand-burgundy">{shadeInfo?.name}</span>
            </div>

            {/* Method badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="px-4 py-1.5 bg-brand-burgundy text-brand-ivory rounded-full text-sm font-medium">
                {product.method}
              </span>
              <span className="px-4 py-1.5 bg-brand-cream text-neutral-700 rounded-full text-sm">
                {product.length}cm
              </span>
              <span className="px-4 py-1.5 bg-brand-cream text-neutral-700 rounded-full text-sm">
                {product.quality}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-3">
              {shadeInfo?.name}
            </h1>

            {/* Shade code */}
            <p className="text-xl text-neutral-600 mb-8">
              {product.shade} • {product.method} Extensions
            </p>

            {/* Description */}
            <p className="text-neutral-700 leading-relaxed mb-8">{product.description}</p>

            {/* Price */}
            <div className="bg-brand-cream rounded-2xl p-6 mb-8 border border-brand-sand">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-sm text-neutral-600">Cena za gram:</span>
                <div>
                  <span className="text-3xl font-serif text-brand-burgundy">
                    {product.pricePerGram} Kč
                  </span>
                  <span className="text-neutral-600 ml-2">/gram</span>
                </div>
              </div>
              <div className="border-t border-brand-sand pt-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-neutral-600">Celková cena ({selectedGrams}g):</span>
                  <span className="text-4xl font-serif text-brand-burgundy">
                    {totalPrice.toLocaleString('cs-CZ')} Kč
                  </span>
                </div>
              </div>
            </div>

            {/* Gram selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-neutral-700 mb-4">
                Kolik gramů potřebuješ?
              </label>

              {/* Slider */}
              <input
                type="range"
                min={product.minGrams}
                max={product.maxGrams}
                step={product.stepGrams}
                value={selectedGrams}
                onChange={(e) => handleGramChange(Number(e.target.value))}
                className="w-full h-2 bg-brand-sand rounded-full appearance-none cursor-pointer accent-brand-burgundy mb-4"
              />

              {/* Input */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleGramChange(selectedGrams - product.stepGrams)}
                  disabled={selectedGrams <= product.minGrams}
                  className="w-12 h-12 bg-brand-cream hover:bg-brand-sand rounded-full text-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  −
                </button>
                <input
                  type="number"
                  value={selectedGrams}
                  onChange={(e) => handleGramChange(Number(e.target.value))}
                  min={product.minGrams}
                  max={product.maxGrams}
                  step={product.stepGrams}
                  className="flex-1 text-center text-2xl font-serif py-3 px-4 bg-brand-ivory border-2 border-brand-sand rounded-2xl focus:outline-none focus:border-brand-burgundy"
                />
                <span className="text-neutral-600">gramů</span>
                <button
                  onClick={() => handleGramChange(selectedGrams + product.stepGrams)}
                  disabled={selectedGrams >= product.maxGrams}
                  className="w-12 h-12 bg-brand-cream hover:bg-brand-sand rounded-full text-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  +
                </button>
              </div>

              {/* Min/Max labels */}
              <div className="flex justify-between text-xs text-neutral-500 mt-2">
                <span>Min. {product.minGrams}g</span>
                <span>Max. {product.maxGrams}g</span>
              </div>
            </div>

            {/* Stock info */}
            {product.stockGrams < 100 ? (
              <div className="bg-brand-rose/10 border border-brand-rose/20 rounded-2xl p-4 mb-8">
                <p className="text-sm text-brand-burgundy">
                  ⚠️ Poslední kusy! Zbývá jen {product.stockGrams}g skladem
                </p>
              </div>
            ) : (
              <div className="bg-brand-cream/50 border border-brand-sand rounded-2xl p-4 mb-8">
                <p className="text-sm text-neutral-600">✓ Skladem {product.stockGrams}g</p>
              </div>
            )}

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory py-5 rounded-full text-lg font-medium transition-all shadow-soft-lg mb-6"
            >
              Přidat do košíku • {totalPrice.toLocaleString('cs-CZ')} Kč
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-brand-cream/50 rounded-xl p-4">
                <p className="text-2xl mb-1">🔄</p>
                <p className="text-xs text-neutral-600">Shade-Swap 14 dní</p>
              </div>
              <div className="bg-brand-cream/50 rounded-xl p-4">
                <p className="text-2xl mb-1">⏱️</p>
                <p className="text-xs text-neutral-600">48h Guarantee</p>
              </div>
              <div className="bg-brand-cream/50 rounded-xl p-4">
                <p className="text-2xl mb-1">📦</p>
                <p className="text-xs text-neutral-600">Odesíláme dnes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Reviews */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif text-neutral-900">Recenze zákaznic</h2>
            <Link href="/recenze" className="text-sm text-brand-burgundy hover:underline">
              Zobrazit všechny →
            </Link>
          </div>

          {/* Rating Summary */}
          <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="text-center md:border-r md:border-brand-sand md:pr-8">
                <div className="text-6xl font-serif text-brand-burgundy mb-2">4.9</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-sm text-neutral-600">Z 12 recenzí</p>
              </div>
              <div className="flex-1">
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center gap-3">
                      <span className="text-sm text-neutral-600 w-16">{stars} hvězd</span>
                      <div className="flex-1 bg-brand-sand rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-brand-burgundy h-full"
                          style={{
                            width: `${stars === 5 ? 75 : stars === 4 ? 20 : 5}%`,
                          }}
                        />
                      </div>
                      <span className="text-sm text-neutral-600 w-8">{stars === 5 ? 9 : stars === 4 ? 2 : 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-6">
            {[
              {
                author: 'Lucie K.',
                rating: 5,
                date: '2025-10-15',
                title: 'Perfektní barva!',
                text: 'Odstín sedí přesně na moje vlasy. AI Color-Match to trefilo na 100%. Aplikace byla snadná.',
                verified: true,
              },
              {
                author: 'Petra M.',
                rating: 5,
                date: '2025-10-08',
                title: 'Skvělá kvalita',
                text: 'Vlasy jsou krásně hebké a lesklé. Nosím už měsíc a pořád vypadají jako nové.',
                verified: true,
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-medium text-neutral-900">{review.author}</p>
                      {review.verified && (
                        <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                          ✓ Ověřeno
                        </span>
                      )}
                    </div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-lg">⭐</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500">
                    {new Date(review.date).toLocaleDateString('cs-CZ')}
                  </p>
                </div>
                <h4 className="font-medium text-neutral-900 mb-2">{review.title}</h4>
                <p className="text-neutral-700">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/recenze"
              className="inline-block bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-8 py-3 rounded-full transition-all"
            >
              Zobrazit všechny recenze
            </Link>
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-serif text-neutral-900 mb-8">Další odstíny {product.method}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProducts.map((p) => (
                <SimilarProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Similar Product Card
function SimilarProductCard({ product }: { product: Product }) {
  const shadeInfo = getShadeInfo(product.shade);

  return (
    <Link
      href={`/produkt/${product.slug}`}
      className="group bg-brand-ivory rounded-3xl overflow-hidden border border-brand-sand hover:border-brand-burgundy/30 hover:shadow-soft-lg transition-all"
    >
      <div className="aspect-square bg-gradient-to-br from-brand-cream to-brand-sand relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-16 h-16 rounded-full border-2 border-white shadow-soft"
            style={{ backgroundColor: shadeInfo?.color }}
          ></div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-serif text-neutral-900 mb-2 group-hover:text-brand-burgundy transition-colors">
          {shadeInfo?.name}
        </h3>
        <p className="text-sm text-neutral-600 mb-4">{product.shade}</p>
        <div className="flex items-baseline justify-between">
          <span className="text-xl font-serif text-brand-burgundy">{product.pricePerGram} Kč</span>
          <span className="text-xs text-neutral-500">/gram</span>
        </div>
      </div>
    </Link>
  );
}
