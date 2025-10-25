'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { MOCK_PRODUCTS, SHADES, getShadeInfo } from '@/lib/mock-data';
import { ApplicationMethod, ShadeCode, Product } from '@/lib/types';
import { Navigation } from '@/components/Navigation';

export default function ObchodPage() {
  // Filter state
  const [searchQuery, setSearchQuery] = useState('');
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
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const shadeInfo = getShadeInfo(product.shade);
        const searchableText = `${product.shade} ${shadeInfo?.name} ${product.length}cm ${product.method}`.toLowerCase();
        if (!searchableText.includes(query)) return false;
      }

      if (selectedMethod !== 'all' && product.method !== selectedMethod) return false;
      if (selectedShade !== 'all' && product.shade !== selectedShade) return false;
      if (selectedLength !== 'all' && product.length !== selectedLength) return false;
      return product.status === 'active';
    });
  }, [searchQuery, selectedMethod, selectedShade, selectedLength]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-serif text-neutral-900 mb-4">Obchod</h1>
          <p className="text-lg text-neutral-600">
            Vlasové extenze po gramech • 10 S-odstínů • Kvalita EE/EU/REMY
          </p>
        </div>

        {/* Horizontal Filters */}
        <div className="mb-12 space-y-6">
          {/* Row 1: Search Bar */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Hledat podle odstínu, délky nebo kolekce..."
              className="w-full px-6 py-4 rounded-full border border-brand-sand bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-burgundy/20 text-base"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Row 2: Text Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm text-neutral-600 font-medium">Filtrovat:</span>

            {/* Length filter */}
            <select
              value={selectedLength}
              onChange={(e) =>
                setSelectedLength(e.target.value === 'all' ? 'all' : Number(e.target.value))
              }
              className="px-4 py-2 rounded-full border border-brand-sand bg-white text-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-burgundy/20 hover:border-brand-burgundy/30 transition-all cursor-pointer"
            >
              <option value="all">Délka</option>
              {availableLengths.map((length) => (
                <option key={length} value={length}>
                  {length} cm
                </option>
              ))}
            </select>

            {/* Method filter (as dropdown for consistency) */}
            <select
              value={selectedMethod}
              onChange={(e) => setSelectedMethod(e.target.value as ApplicationMethod | 'all')}
              className="px-4 py-2 rounded-full border border-brand-sand bg-white text-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-burgundy/20 hover:border-brand-burgundy/30 transition-all cursor-pointer"
            >
              <option value="all">Metoda</option>
              <option value="TAPE">TAPE</option>
              <option value="ITIP">ITIP</option>
              <option value="WEFT">WEFT</option>
            </select>

            <button className="px-4 py-2 rounded-full border border-brand-sand bg-white text-neutral-700 text-sm hover:border-brand-burgundy/30 transition-all">
              Struktura
            </button>
            <button className="px-4 py-2 rounded-full border border-brand-sand bg-white text-neutral-700 text-sm hover:border-brand-burgundy/30 transition-all">
              Ekolekce
            </button>
            <button className="px-4 py-2 rounded-full border border-brand-sand bg-white text-neutral-700 text-sm hover:border-brand-burgundy/30 transition-all">
              Kolekce
            </button>
          </div>

          {/* Row 3: Color Swatches */}
          <div className="bg-white rounded-full px-6 py-4 border border-brand-sand">
            <div className="flex items-center gap-3 overflow-x-auto">
              <span className="text-sm text-neutral-600 font-medium whitespace-nowrap">Odstín:</span>
              <div className="flex gap-2">
                {SHADES.map((shade) => (
                  <button
                    key={shade.code}
                    onClick={() => setSelectedShade(selectedShade === shade.code ? 'all' : shade.code)}
                    className={`w-10 h-10 rounded-full border-2 transition-all hover:scale-110 ${
                      selectedShade === shade.code
                        ? 'border-brand-burgundy ring-2 ring-brand-burgundy/20'
                        : 'border-brand-sand hover:border-brand-burgundy/30'
                    }`}
                    style={{ backgroundColor: shade.color }}
                    title={`${shade.code} - ${shade.name}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="flex justify-between items-center text-sm">
            <p className="text-neutral-600">
              Nalezeno <span className="font-semibold text-brand-burgundy">{filteredProducts.length}</span> produktů
            </p>
            {(searchQuery || selectedMethod !== 'all' || selectedShade !== 'all' || selectedLength !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedMethod('all');
                  setSelectedShade('all');
                  setSelectedLength('all');
                }}
                className="text-brand-burgundy hover:text-brand-burgundy-hover transition-colors"
              >
                Resetovat filtry
              </button>
            )}
          </div>
        </div>

        {/* Products Grid - 6 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
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

  // Collection name based on quality
  const collectionName = product.quality === 'EU' ? 'Premium Collection' :
                        product.quality === 'REMY' ? 'Luxury Collection' :
                        'Essential Collection';

  return (
    <Link
      href={`/produkt/${product.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-brand-sand hover:border-brand-burgundy/30 hover:shadow-soft transition-all"
    >
      {/* Image placeholder */}
      <div className="aspect-square bg-gradient-to-br from-brand-cream to-brand-sand relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full mx-auto border border-white/50 shadow-soft"
              style={{ backgroundColor: shadeInfo?.color }}
            ></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Product Name (using shade name) */}
        <h3 className="text-base font-medium text-neutral-900 mb-1 group-hover:text-brand-burgundy transition-colors">
          {shadeInfo?.name}
        </h3>

        {/* Collection Name */}
        <p className="text-xs text-neutral-500 mb-2">
          {collectionName}
        </p>

        {/* Details - Length and Min Grams */}
        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <span>{product.length} cm</span>
          <span>•</span>
          <span>{product.minGrams} g</span>
        </div>
      </div>
    </Link>
  );
}
