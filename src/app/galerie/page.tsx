'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Link from 'next/link';

interface GalleryItem {
  id: string;
  title: string;
  method: 'TAPE' | 'ITIP' | 'WEFT';
  shade: string;
  length: number;
  grams: number;
  beforeImage: string;
  afterImage: string;
  description: string;
  customerName: string;
  hairType: string;
  transformation: string;
}

export default function GaleriePage() {
  const [filter, setFilter] = useState<'all' | 'TAPE' | 'ITIP' | 'WEFT'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'slider'>('grid');

  // TODO: Get from Firebase Storage + Firestore
  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Zahuštění tenkých vlasů',
      method: 'TAPE',
      shade: 'S05',
      length: 50,
      grams: 150,
      beforeImage: '/placeholder-before.jpg',
      afterImage: '/placeholder-after.jpg',
      description: 'Transformace tenkých vlasů po ramena na husté vlasy s objemem',
      customerName: 'Lucie K.',
      hairType: 'Tenké, jemné vlasy',
      transformation: 'Zahuštění + prodloužení o 15 cm',
    },
    {
      id: '2',
      title: 'Dlouhé vlasy jako z pohádky',
      method: 'ITIP',
      shade: 'S06',
      length: 60,
      grams: 120,
      beforeImage: '/placeholder-before.jpg',
      afterImage: '/placeholder-after.jpg',
      description: 'Prodloužení středních vlasů na dlouhé vlnité vlasy',
      customerName: 'Markéta S.',
      hairType: 'Normální hustota',
      transformation: 'Prodloužení o 25 cm',
    },
    {
      id: '3',
      title: 'Maximální objem pro speciální příležitost',
      method: 'WEFT',
      shade: 'S07',
      length: 55,
      grams: 180,
      beforeImage: '/placeholder-before.jpg',
      afterImage: '/placeholder-after.jpg',
      description: 'Profesionální aplikace WEFT pro svatební účes',
      customerName: 'Tereza M.',
      hairType: 'Hustší vlasy',
      transformation: 'Maximální objem + délka',
    },
    {
      id: '4',
      title: 'Přírodní prodloužení blond vlasů',
      method: 'TAPE',
      shade: 'S04',
      length: 50,
      grams: 100,
      beforeImage: '/placeholder-before.jpg',
      afterImage: '/placeholder-after.jpg',
      description: 'Lehké prodloužení s přirozeným přechodem',
      customerName: 'Petra D.',
      hairType: 'Světlé, tenké vlasy',
      transformation: 'Prodloužení o 10 cm',
    },
    {
      id: '5',
      title: 'Změna života - z krátkých na dlouhé',
      method: 'ITIP',
      shade: 'S08',
      length: 55,
      grams: 140,
      beforeImage: '/placeholder-before.jpg',
      afterImage: '/placeholder-after.jpg',
      description: 'Dramatická transformace z Bob střihu na dlouhé vlasy',
      customerName: 'Karolína V.',
      hairType: 'Tenké vlasy',
      transformation: 'Prodloužení o 30 cm',
    },
    {
      id: '6',
      title: 'Přidání objemu do tmavých vlasů',
      method: 'TAPE',
      shade: 'S09',
      length: 50,
      grams: 130,
      beforeImage: '/placeholder-before.jpg',
      afterImage: '/placeholder-after.jpg',
      description: 'Zahuštění tmavých vlasů s perfektním color matchem',
      customerName: 'Jana H.',
      hairType: 'Normální hustota',
      transformation: 'Zahuštění + objem',
    },
  ];

  const filteredItems =
    filter === 'all' ? galleryItems : galleryItems.filter((item) => item.method === filter);

  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-serif text-neutral-900 mb-6">
            Galerie Before & After
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Skutečné transformace našich zákaznic. Nechej se inspirovat a představ si svou
            novou image!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-brand-cream rounded-3xl p-6 border border-brand-sand text-center">
            <div className="text-4xl font-serif text-brand-burgundy mb-2">500+</div>
            <p className="text-sm text-neutral-600">Spokojených zákaznic</p>
          </div>
          <div className="bg-brand-cream rounded-3xl p-6 border border-brand-sand text-center">
            <div className="text-4xl font-serif text-brand-burgundy mb-2">98%</div>
            <p className="text-sm text-neutral-600">Úspěšnost color matche</p>
          </div>
          <div className="bg-brand-cream rounded-3xl p-6 border border-brand-sand text-center">
            <div className="text-4xl font-serif text-brand-burgundy mb-2">4.9/5</div>
            <p className="text-sm text-neutral-600">Průměrné hodnocení</p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Method filter */}
          <div className="flex flex-wrap gap-3">
            {(['all', 'TAPE', 'ITIP', 'WEFT'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setFilter(m)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === m
                    ? 'bg-brand-burgundy text-brand-ivory'
                    : 'bg-brand-cream text-neutral-700 hover:bg-brand-sand border border-brand-sand'
                }`}
              >
                {m === 'all'
                  ? `Vše (${galleryItems.length})`
                  : `${m} (${galleryItems.filter((item) => item.method === m).length})`}
              </button>
            ))}
          </div>

          {/* View mode toggle */}
          <div className="flex gap-2 bg-brand-cream rounded-full p-1 border border-brand-sand">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-brand-burgundy text-brand-ivory'
                  : 'text-neutral-700'
              }`}
            >
              Mřížka
            </button>
            <button
              onClick={() => setViewMode('slider')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                viewMode === 'slider'
                  ? 'bg-brand-burgundy text-brand-ivory'
                  : 'text-neutral-700'
              }`}
            >
              Porovnání
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-brand-cream rounded-3xl overflow-hidden border border-brand-sand hover:border-brand-burgundy transition-all group"
              >
                {/* Images - Side by Side */}
                <div className="grid grid-cols-2 gap-0">
                  <div className="aspect-square bg-brand-sand flex flex-col items-center justify-center text-neutral-400 relative">
                    <div className="text-4xl mb-2">📷</div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="bg-white/90 text-neutral-900 px-2 py-1 rounded text-xs font-medium block text-center">
                        Před
                      </span>
                    </div>
                  </div>
                  <div className="aspect-square bg-brand-sand/50 flex flex-col items-center justify-center text-neutral-400 relative">
                    <div className="text-4xl mb-2">✨</div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="bg-brand-burgundy text-brand-ivory px-2 py-1 rounded text-xs font-medium block text-center">
                        Po
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-brand-burgundy/10 text-brand-burgundy text-xs font-medium">
                      {item.method}
                    </span>
                    <span className="text-xs text-neutral-600">
                      {item.shade} • {item.length} cm
                    </span>
                  </div>

                  <h3 className="font-medium text-neutral-900 mb-2 group-hover:text-brand-burgundy transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-700 mb-4">{item.description}</p>

                  <div className="space-y-2 text-xs text-neutral-600">
                    <div className="flex justify-between">
                      <span>Zákaznice:</span>
                      <span className="font-medium text-neutral-900">{item.customerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Typ vlasů:</span>
                      <span className="font-medium text-neutral-900">{item.hairType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Změna:</span>
                      <span className="font-medium text-neutral-900">{item.transformation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Množství:</span>
                      <span className="font-medium text-neutral-900">{item.grams}g</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Slider Mode - Full Before/After Comparison */
          <div className="space-y-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-brand-cream rounded-3xl overflow-hidden border border-brand-sand"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Before */}
                  <div className="relative">
                    <div className="aspect-[4/5] bg-brand-sand flex flex-col items-center justify-center text-neutral-400">
                      <div className="text-6xl mb-4">📷</div>
                      <p className="text-neutral-600">Před aplikací</p>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-neutral-900 px-4 py-2 rounded-full text-sm font-medium">
                        PŘED
                      </span>
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative">
                    <div className="aspect-[4/5] bg-brand-sand/50 flex flex-col items-center justify-center text-neutral-400">
                      <div className="text-6xl mb-4">✨</div>
                      <p className="text-neutral-600">Po aplikaci</p>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-burgundy text-brand-ivory px-4 py-2 rounded-full text-sm font-medium">
                        PO
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-serif text-neutral-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-700">{item.description}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-brand-burgundy/10 text-brand-burgundy text-sm font-medium whitespace-nowrap ml-4">
                      {item.method}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-brand-ivory rounded-2xl p-4 border border-brand-sand">
                    <div>
                      <p className="text-xs text-neutral-600 mb-1">Zákaznice</p>
                      <p className="font-medium text-neutral-900">{item.customerName}</p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-600 mb-1">Typ vlasů</p>
                      <p className="font-medium text-neutral-900">{item.hairType}</p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-600 mb-1">Změna</p>
                      <p className="font-medium text-neutral-900">{item.transformation}</p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-600 mb-1">Detail</p>
                      <p className="font-medium text-neutral-900">
                        {item.shade} • {item.length}cm • {item.grams}g
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upload Your Transformation CTA */}
        <div className="mt-16 bg-gradient-to-br from-brand-burgundy to-brand-burgundy-active rounded-3xl p-10 text-brand-ivory text-center">
          <div className="text-5xl mb-4">📸</div>
          <h3 className="text-3xl font-serif mb-4">Pošli nám svou transformaci!</h3>
          <p className="text-brand-ivory/90 mb-8 max-w-2xl mx-auto">
            Koupila jsi naše extenze? Pošli nám before/after fotky a získej 15% slevu na příští
            nákup!
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-brand-ivory text-brand-burgundy px-8 py-3 rounded-full font-medium hover:bg-brand-cream transition-all"
          >
            Poslat fotky
          </Link>
        </div>

        {/* CTA - Try Extensions */}
        <div className="mt-8 bg-brand-cream rounded-3xl p-10 border border-brand-sand text-center">
          <h3 className="text-3xl font-serif text-neutral-900 mb-4">
            Inspirovala tě některá transformace?
          </h3>
          <p className="text-neutral-700 mb-8">
            Najdi si svůj perfektní odstín a vytvoř vlastní before/after
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-color-match"
              className="bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-8 py-3 rounded-full transition-all"
            >
              AI Color-Match
            </Link>
            <Link
              href="/pruvodce"
              className="border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-ivory px-8 py-3 rounded-full transition-all"
            >
              Kolik gramů potřebuji?
            </Link>
            <Link
              href="/obchod"
              className="border-2 border-brand-sand text-neutral-700 hover:border-brand-burgundy hover:text-brand-burgundy px-8 py-3 rounded-full transition-all"
            >
              Prohlédnout produkty
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
