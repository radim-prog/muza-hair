'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { MOCK_PRODUCTS, SHADES, getShadeInfo } from '@/lib/mock-data';
import { ApplicationMethod, ShadeCode, Product } from '@/lib/types';

export default function ObchodPage() {
  // Filter state
  const [selectedMethod, setSelectedMethod] = useState<ApplicationMethod | 'all'>('all');
  const [selectedShade, setSelectedShade] = useState<ShadeCode | 'all'>('all');
  const [selectedLength, setSelectedLength] = useState<number | 'all'>('all');

  // Get unique lengths from products
  const availableLengths = useMemo(() => {
    const lengths = MOCK_PRODUCTS.map((p) => p.length);
    return Array.from(new Set(lengths)).sort((a, b) => a - b);
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((product) => {
      if (selectedMethod !== 'all' && product.method !== selectedMethod) return false;
      if (selectedShade !== 'all' && product.shade !== selectedShade) return false;
      if (selectedLength !== 'all' && product.length !== selectedLength) return false;
      return product.status === 'active';
    });
  }, [selectedMethod, selectedShade, selectedLength]);

  return (
    <div className="min-h-screen bg-brand-ivory">
      {/* Navigation */}
      <nav className="border-b border-brand-sand bg-brand-ivory/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-2xl font-serif text-brand-burgundy">
              Múza Hair
            </Link>
            <button className="bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-6 py-2.5 rounded-full transition-all shadow-soft text-sm">
              Košík (0)
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif text-neutral-900 mb-4">Obchod</h1>
          <p className="text-lg text-neutral-600">
            Vlasové extenze po gramech • 10 S-odstínů • Kvalita EE/EU/REMY
          </p>
        </div>

        {/* Filters */}
        <div className="bg-brand-cream rounded-3xl p-8 mb-12 border border-brand-sand">
          <h3 className="text-xl font-serif text-neutral-900 mb-6">Filtrovat produkty</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Method filter */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Metoda aplikace
              </label>
              <div className="flex flex-wrap gap-2">
                {(['all', 'TAPE', 'ITIP', 'WEFT'] as const).map((method) => (
                  <button
                    key={method}
                    onClick={() => setSelectedMethod(method)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedMethod === method
                        ? 'bg-brand-burgundy text-brand-ivory shadow-soft'
                        : 'bg-brand-ivory text-neutral-700 hover:bg-brand-sand border border-brand-sand'
                    }`}
                  >
                    {method === 'all' ? 'Všechny' : method}
                  </button>
                ))}
              </div>
            </div>

            {/* Shade filter */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Odstín
              </label>
              <select
                value={selectedShade}
                onChange={(e) => setSelectedShade(e.target.value as ShadeCode | 'all')}
                className="w-full px-4 py-2.5 rounded-full border border-brand-sand bg-brand-ivory text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-burgundy/20"
              >
                <option value="all">Všechny odstíny</option>
                {SHADES.map((shade) => (
                  <option key={shade.code} value={shade.code}>
                    {shade.code} - {shade.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Length filter */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Délka
              </label>
              <select
                value={selectedLength}
                onChange={(e) =>
                  setSelectedLength(e.target.value === 'all' ? 'all' : Number(e.target.value))
                }
                className="w-full px-4 py-2.5 rounded-full border border-brand-sand bg-brand-ivory text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-burgundy/20"
              >
                <option value="all">Všechny délky</option>
                {availableLengths.map((length) => (
                  <option key={length} value={length}>
                    {length} cm
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-6 pt-6 border-t border-brand-sand">
            <p className="text-sm text-neutral-600">
              Nalezeno <span className="font-semibold text-brand-burgundy">{filteredProducts.length}</span> produktů
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl font-serif text-neutral-500 mb-4">Žádné produkty nenalezeny</p>
            <p className="text-neutral-600 mb-8">Zkuste změnit filtrování</p>
            <button
              onClick={() => {
                setSelectedMethod('all');
                setSelectedShade('all');
                setSelectedLength('all');
              }}
              className="px-8 py-3 bg-brand-burgundy text-brand-ivory rounded-full hover:bg-brand-burgundy-hover transition-all"
            >
              Resetovat filtry
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Product Card Component
function ProductCard({ product }: { product: Product }) {
  const shadeInfo = getShadeInfo(product.shade);

  return (
    <Link
      href={`/produkt/${product.slug}`}
      className="group bg-brand-ivory rounded-3xl overflow-hidden border border-brand-sand hover:border-brand-burgundy/30 hover:shadow-soft-lg transition-all"
    >
      {/* Image placeholder */}
      <div className="aspect-[4/3] bg-gradient-to-br from-brand-cream to-brand-sand relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-white shadow-soft"
              style={{ backgroundColor: shadeInfo?.color }}
            ></div>
            <p className="text-sm text-neutral-600">{product.method}</p>
          </div>
        </div>
        {/* Stock badge */}
        {product.stockGrams < 100 && (
          <div className="absolute top-4 right-4 bg-brand-burgundy text-brand-ivory px-3 py-1 rounded-full text-xs font-medium">
            Poslední kusy
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Method badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-brand-cream text-brand-burgundy rounded-full text-xs font-medium">
            {product.method}
          </span>
          <span className="px-3 py-1 bg-brand-cream text-neutral-700 rounded-full text-xs">
            {product.length}cm
          </span>
        </div>

        {/* Name */}
        <h3 className="text-xl font-serif text-neutral-900 mb-2 group-hover:text-brand-burgundy transition-colors">
          {shadeInfo?.name}
        </h3>

        {/* Shade code */}
        <p className="text-sm text-neutral-600 mb-4">
          {product.shade} • {product.quality} kvalita
        </p>

        {/* Price */}
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-serif text-brand-burgundy">{product.pricePerGram} Kč</span>
            <span className="text-sm text-neutral-600 ml-1">/gram</span>
          </div>
          <span className="text-sm text-neutral-500">Min. {product.minGrams}g</span>
        </div>

        {/* CTA */}
        <button className="w-full mt-4 bg-brand-burgundy text-brand-ivory py-3 rounded-full text-sm font-medium group-hover:bg-brand-burgundy-hover transition-all">
          Zobrazit detail
        </button>
      </div>
    </Link>
  );
}
