'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Link from 'next/link';

export default function PruvodcePage() {
  const [hairLength, setHairLength] = useState<'short' | 'medium' | 'long'>('medium');
  const [desiredLength, setDesiredLength] = useState<40 | 50 | 55 | 60>(50);
  const [desiredVolume, setDesiredVolume] = useState<'light' | 'medium' | 'full'>('medium');
  const [method, setMethod] = useState<'TAPE' | 'ITIP' | 'WEFT'>('TAPE');

  const calculateGrams = () => {
    const baseGrams = {
      TAPE: { light: 100, medium: 150, full: 200 },
      ITIP: { light: 80, medium: 120, full: 160 },
      WEFT: { light: 100, medium: 150, full: 200 },
    };

    const lengthMultiplier = {
      40: 0.9,
      50: 1.0,
      55: 1.1,
      60: 1.2,
    };

    const base = baseGrams[method][desiredVolume];
    const result = Math.round(base * lengthMultiplier[desiredLength] / 10) * 10;

    return result;
  };

  const recommendedGrams = calculateGrams();

  const volumeExamples = {
    light: {
      title: 'Lehké zahuštění',
      description: 'Jemné zahuštění tenkých vlasů nebo prodloužení bez výrazné změny objemu',
      examples: ['Zahuštění okolo tváře', 'Prodloužení o 10-15 cm', 'Přírodní look'],
    },
    medium: {
      title: 'Střední objem',
      description: 'Výrazné zahuštění a prodloužení pro každodenní vzhled',
      examples: [
        'Plné zahuštění celé hlavy',
        'Prodloužení o 15-25 cm',
        'Viditelná změna objemu',
      ],
    },
    full: {
      title: 'Maximální objem',
      description: 'Pro velmi tenké vlasy nebo dramatickou transformaci',
      examples: [
        'Maximální hustota pro tenké vlasy',
        'Prodloužení o 25+ cm',
        'Hollywood objem',
      ],
    },
  };

  const methodInfo = {
    TAPE: {
      icon: '📼',
      strips: Math.round(recommendedGrams / 2.5), // 1 strip = cca 2.5g
      description: 'Potřebuješ cca',
      unit: 'tape pásků',
    },
    ITIP: {
      icon: '💍',
      strips: Math.round(recommendedGrams / 0.8), // 1 I-tip = cca 0.8g
      description: 'Potřebuješ cca',
      unit: 'I-tip pramenů',
    },
    WEFT: {
      icon: '🧵',
      strips: Math.round(recommendedGrams / 30), // 1 weft = cca 30g
      description: 'Potřebuješ cca',
      unit: 'weft pruhů',
    },
  };

  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-serif text-neutral-900 mb-6">
          Kolik gramů potřebuji?
        </h1>
        <p className="text-lg text-neutral-600 mb-16">
          Interaktivní kalkulačka ti poradí přesné množství extenzí podle tvých vlasů
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Hair Length */}
            <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand">
              <h2 className="text-2xl font-serif text-neutral-900 mb-6">
                1. Tvoje současná délka vlasů
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => setHairLength('short')}
                  className={`p-6 rounded-2xl border-2 transition-all text-left ${
                    hairLength === 'short'
                      ? 'border-brand-burgundy bg-brand-burgundy/5'
                      : 'border-brand-sand hover:border-brand-burgundy/50'
                  }`}
                >
                  <div className="text-3xl mb-3">💇‍♀️</div>
                  <h3 className="font-medium text-neutral-900 mb-1">Krátké</h3>
                  <p className="text-sm text-neutral-600">Po ramena nebo kratší</p>
                </button>
                <button
                  onClick={() => setHairLength('medium')}
                  className={`p-6 rounded-2xl border-2 transition-all text-left ${
                    hairLength === 'medium'
                      ? 'border-brand-burgundy bg-brand-burgundy/5'
                      : 'border-brand-sand hover:border-brand-burgundy/50'
                  }`}
                >
                  <div className="text-3xl mb-3">👩</div>
                  <h3 className="font-medium text-neutral-900 mb-1">Střední</h3>
                  <p className="text-sm text-neutral-600">Pod ramena, střední záda</p>
                </button>
                <button
                  onClick={() => setHairLength('long')}
                  className={`p-6 rounded-2xl border-2 transition-all text-left ${
                    hairLength === 'long'
                      ? 'border-brand-burgundy bg-brand-burgundy/5'
                      : 'border-brand-sand hover:border-brand-burgundy/50'
                  }`}
                >
                  <div className="text-3xl mb-3">👸</div>
                  <h3 className="font-medium text-neutral-900 mb-1">Dlouhé</h3>
                  <p className="text-sm text-neutral-600">Spodní záda nebo delší</p>
                </button>
              </div>
            </div>

            {/* Desired Length */}
            <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand">
              <h2 className="text-2xl font-serif text-neutral-900 mb-6">
                2. Požadovaná délka extenzí
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[40, 50, 55, 60].map((length) => (
                  <button
                    key={length}
                    onClick={() => setDesiredLength(length as any)}
                    className={`p-6 rounded-2xl border-2 transition-all ${
                      desiredLength === length
                        ? 'border-brand-burgundy bg-brand-burgundy/5'
                        : 'border-brand-sand hover:border-brand-burgundy/50'
                    }`}
                  >
                    <div className="text-3xl font-serif text-brand-burgundy mb-2">
                      {length}
                    </div>
                    <p className="text-sm text-neutral-600">cm</p>
                  </button>
                ))}
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                💡 Tip: Pro přirozený look vyber délku maximálně 2x delší než tvoje současné
                vlasy
              </p>
            </div>

            {/* Desired Volume */}
            <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand">
              <h2 className="text-2xl font-serif text-neutral-900 mb-6">
                3. Požadovaný objem
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(['light', 'medium', 'full'] as const).map((volume) => (
                  <button
                    key={volume}
                    onClick={() => setDesiredVolume(volume)}
                    className={`p-6 rounded-2xl border-2 transition-all text-left ${
                      desiredVolume === volume
                        ? 'border-brand-burgundy bg-brand-burgundy/5'
                        : 'border-brand-sand hover:border-brand-burgundy/50'
                    }`}
                  >
                    <h3 className="font-medium text-neutral-900 mb-2">
                      {volumeExamples[volume].title}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-3">
                      {volumeExamples[volume].description}
                    </p>
                    <ul className="text-xs text-neutral-600 space-y-1">
                      {volumeExamples[volume].examples.map((ex, idx) => (
                        <li key={idx}>• {ex}</li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>
            </div>

            {/* Method */}
            <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand">
              <h2 className="text-2xl font-serif text-neutral-900 mb-6">
                4. Metoda aplikace
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(['TAPE', 'ITIP', 'WEFT'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMethod(m)}
                    className={`p-6 rounded-2xl border-2 transition-all ${
                      method === m
                        ? 'border-brand-burgundy bg-brand-burgundy/5'
                        : 'border-brand-sand hover:border-brand-burgundy/50'
                    }`}
                  >
                    <div className="text-3xl mb-3">{methodInfo[m].icon}</div>
                    <h3 className="font-medium text-neutral-900">{m}</h3>
                  </button>
                ))}
              </div>
              <Link
                href="/navody"
                className="inline-block text-sm text-brand-burgundy hover:underline mt-4"
              >
                Nevíš jakou metodu vybrat? Přečti si návody →
              </Link>
            </div>
          </div>

          {/* Results Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-brand-burgundy to-brand-burgundy-active rounded-3xl p-8 text-brand-ivory sticky top-24">
              <h3 className="text-2xl font-serif mb-6">Tvůj výsledek</h3>

              <div className="bg-white/10 rounded-2xl p-6 mb-6">
                <p className="text-sm mb-2 text-brand-ivory/80">Doporučené množství</p>
                <div className="text-5xl font-serif mb-2">{recommendedGrams}</div>
                <p className="text-sm text-brand-ivory/80">gramů</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 mb-6">
                <p className="text-sm mb-2 text-brand-ivory/80">
                  {methodInfo[method].description}
                </p>
                <div className="text-3xl font-serif mb-2">{methodInfo[method].strips}</div>
                <p className="text-sm text-brand-ivory/80">{methodInfo[method].unit}</p>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-brand-ivory/80">Délka:</span>
                  <span className="font-medium">{desiredLength} cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-ivory/80">Objem:</span>
                  <span className="font-medium">
                    {volumeExamples[desiredVolume].title}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-ivory/80">Metoda:</span>
                  <span className="font-medium">{method}</span>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6 mb-6">
                <p className="text-sm mb-2 text-brand-ivory/80">Odhadovaná cena</p>
                <div className="text-3xl font-serif mb-1">
                  {(recommendedGrams * 42).toLocaleString('cs-CZ')}
                </div>
                <p className="text-sm text-brand-ivory/80">Kč (při 42 Kč/gram)</p>
              </div>

              <Link
                href={`/obchod?method=${method}&length=${desiredLength}`}
                className="block w-full bg-brand-ivory text-brand-burgundy py-3 rounded-full text-center font-medium hover:bg-brand-cream transition-all"
              >
                Koupit extenze
              </Link>
            </div>
          </div>
        </div>

        {/* Hair Density Guide */}
        <div className="mt-16 bg-brand-cream rounded-3xl p-8 border border-brand-sand">
          <h2 className="text-3xl font-serif text-neutral-900 mb-8">
            Průvodce hustotou vlasů
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand">
              <h3 className="font-medium text-neutral-900 mb-3">Tenké vlasy</h3>
              <p className="text-sm text-neutral-700 mb-4">
                Jednotlivé pramínky jsou viditelné, vlasy mají málo objemu
              </p>
              <p className="text-brand-burgundy font-medium">
                Doporučujeme: {method} 100-150g
              </p>
            </div>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand">
              <h3 className="font-medium text-neutral-900 mb-3">Normální vlasy</h3>
              <p className="text-sm text-neutral-700 mb-4">
                Standardní hustota, vlasy mají střední objem
              </p>
              <p className="text-brand-burgundy font-medium">
                Doporučujeme: {method} 120-170g
              </p>
            </div>
            <div className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand">
              <h3 className="font-medium text-neutral-900 mb-3">Husté vlasy</h3>
              <p className="text-sm text-neutral-700 mb-4">
                Hodně vlasů, přirozený velký objem
              </p>
              <p className="text-brand-burgundy font-medium">
                Doporučujeme: {method} 150-200g
              </p>
            </div>
          </div>

          <div className="bg-brand-burgundy/5 rounded-2xl p-6 border-l-4 border-brand-burgundy">
            <p className="text-sm text-neutral-700">
              <strong className="text-brand-burgundy">💡 Profi tip:</strong> Pokud si nejsi
              jistá hustotou svých vlasů, vyfoť si vlasy v culíku a změř obvod gumičky. Méně
              než 5 cm = tenké, 5-7 cm = normální, více než 7 cm = husté.
            </p>
          </div>
        </div>

        {/* AI Color Match CTA */}
        <div className="mt-16 bg-gradient-to-br from-brand-burgundy to-brand-burgundy-active rounded-3xl p-10 text-brand-ivory text-center">
          <div className="text-5xl mb-4">🎨</div>
          <h3 className="text-3xl font-serif mb-4">Našla jsi správné množství?</h3>
          <p className="text-brand-ivory/90 mb-8 max-w-2xl mx-auto">
            Teď zjisti svůj perfektní odstín pomocí AI Color-Match
          </p>
          <Link
            href="/ai-color-match"
            className="inline-block bg-brand-ivory text-brand-burgundy px-8 py-3 rounded-full font-medium hover:bg-brand-cream transition-all"
          >
            Najít můj odstín
          </Link>
        </div>

        {/* Help CTA */}
        <div className="mt-8 bg-brand-cream rounded-3xl p-8 border border-brand-sand text-center">
          <h3 className="text-2xl font-serif text-neutral-900 mb-3">
            Pořád si nejsi jistá?
          </h3>
          <p className="text-neutral-700 mb-6">
            Napiš nám a my ti pomůžeme vybrat přesné množství podle fotky tvých vlasů
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-8 py-3 rounded-full transition-all"
          >
            Kontaktovat nás
          </Link>
        </div>
      </div>
    </div>
  );
}
