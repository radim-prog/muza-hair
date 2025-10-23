'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { useCart } from '@/contexts/CartContext';

interface FavoriteProduct {
  id: string;
  name: string;
  slug: string;
  method: string;
  shade: string;
  shadeColor: string;
  length: number;
  quality: string;
  pricePerGram: number;
  image: string;
  inStock: boolean;
  addedAt: string;
}

export default function OblibenePage() {
  const { addItem } = useCart();
  const [favorites, setFavorites] = useState<FavoriteProduct[]>([
    // TODO: Get from Firebase Firestore user favorites
    {
      id: 'tape-s05-50-ee',
      name: 'TAPE S05 (Karamelová) • 50 cm • EE kvalita',
      slug: 'tape-s05-50-ee',
      method: 'TAPE',
      shade: 'S05',
      shadeColor: '#C8A882',
      length: 50,
      quality: 'EE',
      pricePerGram: 42,
      image: '/placeholder-product.jpg',
      inStock: true,
      addedAt: '2025-10-15',
    },
    {
      id: 'itip-s06-55-eu',
      name: 'ITIP S06 (Medová) • 55 cm • EU kvalita',
      slug: 'itip-s06-55-eu',
      method: 'ITIP',
      shade: 'S06',
      shadeColor: '#D4A76A',
      length: 55,
      quality: 'EU',
      pricePerGram: 48,
      image: '/placeholder-product.jpg',
      inStock: true,
      addedAt: '2025-10-10',
    },
    {
      id: 'weft-s07-50-remy',
      name: 'WEFT S07 (Středně hnědá) • 50 cm • REMY',
      slug: 'weft-s07-50-remy',
      method: 'WEFT',
      shade: 'S07',
      shadeColor: '#8B6F47',
      length: 50,
      quality: 'REMY',
      pricePerGram: 38,
      image: '/placeholder-product.jpg',
      inStock: false,
      addedAt: '2025-09-28',
    },
    {
      id: 'tape-s08-60-ee',
      name: 'TAPE S08 (Tmavě hnědá) • 60 cm • EE kvalita',
      slug: 'tape-s08-60-ee',
      method: 'TAPE',
      shade: 'S08',
      shadeColor: '#5D4E37',
      length: 60,
      quality: 'EE',
      pricePerGram: 44,
      image: '/placeholder-product.jpg',
      inStock: true,
      addedAt: '2025-09-20',
    },
    {
      id: 'itip-s04-55-eu',
      name: 'ITIP S04 (Světle hnědá) • 55 cm • EU kvalita',
      slug: 'itip-s04-55-eu',
      method: 'ITIP',
      shade: 'S04',
      shadeColor: '#B8956A',
      length: 55,
      quality: 'EU',
      pricePerGram: 48,
      image: '/placeholder-product.jpg',
      inStock: true,
      addedAt: '2025-09-05',
    },
  ]);

  const [filter, setFilter] = useState<'all' | 'inStock' | 'outOfStock'>('all');
  const [sort, setSort] = useState<'newest' | 'oldest' | 'priceAsc' | 'priceDesc'>('newest');

  const handleRemoveFavorite = (productId: string) => {
    // TODO: Remove from Firebase Firestore
    setFavorites(favorites.filter((f) => f.id !== productId));
  };

  const handleAddToCart = (product: FavoriteProduct) => {
    addItem({
      productId: product.id,
      product: {
        id: product.id,
        name: product.name,
        slug: product.slug,
        method: product.method as any,
        shade: product.shade as any,
        length: product.length,
        quality: product.quality as any,
        pricePerGram: product.pricePerGram,
        minGrams: 50,
        maxGrams: 200,
        stepGrams: 10,
        stockGrams: 500,
        status: 'active',
        images: [product.image],
        description: '',
        features: [],
        careInstructions: [],
        applicationTime: 0,
        durability: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      grams: 100,
      pricePerGram: product.pricePerGram,
    });
  };

  // Filter
  const filteredFavorites = favorites.filter((f) => {
    if (filter === 'inStock') return f.inStock;
    if (filter === 'outOfStock') return !f.inStock;
    return true;
  });

  // Sort
  const sortedFavorites = [...filteredFavorites].sort((a, b) => {
    if (sort === 'newest') {
      return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
    }
    if (sort === 'oldest') {
      return new Date(a.addedAt).getTime() - new Date(b.addedAt).getTime();
    }
    if (sort === 'priceAsc') {
      return a.pricePerGram - b.pricePerGram;
    }
    if (sort === 'priceDesc') {
      return b.pricePerGram - a.pricePerGram;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/ucet"
            className="text-sm text-brand-burgundy hover:underline mb-4 inline-block"
          >
            ← Zpět na můj účet
          </Link>
          <h1 className="text-5xl font-serif text-neutral-900 mb-2">
            Oblíbené produkty
          </h1>
          <p className="text-neutral-600">
            {favorites.length}{' '}
            {favorites.length === 1
              ? 'oblíbený produkt'
              : favorites.length < 5
              ? 'oblíbené produkty'
              : 'oblíbených produktů'}
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="bg-brand-cream rounded-3xl p-16 border border-brand-sand text-center">
            <div className="text-6xl mb-4">❤️</div>
            <h2 className="text-2xl font-serif text-neutral-900 mb-3">
              Zatím nemáš žádné oblíbené
            </h2>
            <p className="text-neutral-600 mb-8">
              Procházej naše produkty a přidávej si své favority kliknutím na srdíčko
            </p>
            <Link
              href="/obchod"
              className="inline-block bg-brand-burgundy text-brand-ivory px-8 py-3 rounded-full hover:bg-brand-burgundy-hover transition-all"
            >
              Prohlédnout produkty
            </Link>
          </div>
        ) : (
          <>
            {/* Filters & Sort */}
            <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
              {/* Filter buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === 'all'
                      ? 'bg-brand-burgundy text-brand-ivory'
                      : 'bg-brand-cream text-neutral-700 hover:bg-brand-sand border border-brand-sand'
                  }`}
                >
                  Vše ({favorites.length})
                </button>
                <button
                  onClick={() => setFilter('inStock')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === 'inStock'
                      ? 'bg-brand-burgundy text-brand-ivory'
                      : 'bg-brand-cream text-neutral-700 hover:bg-brand-sand border border-brand-sand'
                  }`}
                >
                  Skladem ({favorites.filter((f) => f.inStock).length})
                </button>
                <button
                  onClick={() => setFilter('outOfStock')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === 'outOfStock'
                      ? 'bg-brand-burgundy text-brand-ivory'
                      : 'bg-brand-cream text-neutral-700 hover:bg-brand-sand border border-brand-sand'
                  }`}
                >
                  Vyprodáno ({favorites.filter((f) => !f.inStock).length})
                </button>
              </div>

              {/* Sort dropdown */}
              <div className="flex items-center gap-2">
                <label className="text-sm text-neutral-600">Řadit:</label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as any)}
                  className="px-4 py-2 rounded-full border border-brand-sand bg-brand-cream text-sm focus:outline-none focus:border-brand-burgundy"
                >
                  <option value="newest">Nejnovější</option>
                  <option value="oldest">Nejstarší</option>
                  <option value="priceAsc">Cena (nejlevnější)</option>
                  <option value="priceDesc">Cena (nejdražší)</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {sortedFavorites.length === 0 ? (
              <div className="bg-brand-cream rounded-3xl p-16 border border-brand-sand text-center">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-neutral-600 mb-6">Žádné produkty s tímto filtrem</p>
                <button
                  onClick={() => setFilter('all')}
                  className="text-brand-burgundy hover:underline font-medium"
                >
                  Zobrazit vše
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedFavorites.map((product) => (
                  <div
                    key={product.id}
                    className="bg-brand-cream rounded-3xl overflow-hidden border border-brand-sand hover:border-brand-burgundy transition-all group relative"
                  >
                    {/* Remove button */}
                    <button
                      onClick={() => handleRemoveFavorite(product.id)}
                      className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-red-50 flex items-center justify-center text-red-500 hover:text-red-600 transition-all shadow-md"
                      title="Odebrat z oblíbených"
                    >
                      ❤️
                    </button>

                    {/* Image */}
                    <Link href={`/produkt/${product.slug}`}>
                      <div className="aspect-square bg-brand-sand flex items-center justify-center text-6xl text-neutral-300 relative overflow-hidden">
                        📷
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="bg-white text-neutral-900 px-4 py-2 rounded-full text-sm font-medium">
                              Vyprodáno
                            </span>
                          </div>
                        )}
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6">
                      <Link href={`/produkt/${product.slug}`}>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full bg-brand-burgundy/10 text-brand-burgundy text-xs font-medium">
                            {product.method}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <div
                              className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                              style={{ backgroundColor: product.shadeColor }}
                            />
                            <span className="text-xs text-neutral-600">{product.shade}</span>
                          </div>
                          <span className="text-xs text-neutral-600">
                            {product.length} cm
                          </span>
                        </div>

                        <h3 className="font-medium text-neutral-900 mb-3 group-hover:text-brand-burgundy transition-colors line-clamp-2">
                          {product.name}
                        </h3>

                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-2xl font-serif text-brand-burgundy">
                            {product.pricePerGram} Kč
                          </span>
                          <span className="text-sm text-neutral-600">/gram</span>
                        </div>
                      </Link>

                      {/* Actions */}
                      <div className="space-y-2">
                        {product.inStock ? (
                          <>
                            <button
                              onClick={() => handleAddToCart(product)}
                              className="w-full bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory py-3 rounded-full text-sm font-medium transition-all"
                            >
                              Přidat do košíku
                            </button>
                            <Link
                              href={`/produkt/${product.slug}`}
                              className="block text-center w-full border-2 border-brand-sand hover:border-brand-burgundy text-neutral-700 hover:text-brand-burgundy py-3 rounded-full text-sm font-medium transition-all"
                            >
                              Zobrazit detail
                            </Link>
                          </>
                        ) : (
                          <button
                            disabled
                            className="w-full bg-neutral-200 text-neutral-500 py-3 rounded-full text-sm font-medium cursor-not-allowed"
                          >
                            Vyprodáno
                          </button>
                        )}
                      </div>

                      {/* Added date */}
                      <p className="text-xs text-neutral-500 mt-3 text-center">
                        Přidáno{' '}
                        {new Date(product.addedAt).toLocaleDateString('cs-CZ', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Help tip */}
            <div className="mt-12 bg-brand-cream rounded-3xl p-8 border border-brand-sand">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💡</div>
                <div>
                  <h3 className="text-xl font-serif text-neutral-900 mb-2">
                    Tip: Dostupnost produktů
                  </h3>
                  <p className="text-neutral-700 mb-4">
                    Když se tvůj oblíbený produkt vrátí na sklad, dostaneš e-mail upozornění.
                    Nezapomeň mít zapnuté notifikace v nastavení účtu.
                  </p>
                  <Link
                    href="/ucet/nastaveni"
                    className="text-brand-burgundy hover:underline font-medium"
                  >
                    Přejít do nastavení →
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
