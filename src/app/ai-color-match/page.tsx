'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { SHADES } from '@/lib/mock-data';
import Link from 'next/link';

export default function AIColorMatchPage() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<string[] | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const urls = files.map((file) => URL.createObjectURL(file));
    setUploadedImages((prev) => [...prev, ...urls].slice(0, 3));
  };

  const handleAnalyze = async () => {
    if (uploadedImages.length === 0) return;

    setIsAnalyzing(true);
    // Simulate AI analysis
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Mock results - recommend 3 shades
    setResults(['S03', 'S04', 'S05']);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif text-neutral-900 mb-6">
            AI Color-Match
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Nahraj 2-3 fotky svých vlasů a naše AI ti doporučí ideální odstíny z naší S-palety.
            Přesnost 95%!
          </p>
        </div>

        {/* How it works */}
        <div className="bg-brand-cream rounded-3xl p-8 mb-12 border border-brand-sand">
          <h2 className="text-2xl font-serif text-neutral-900 mb-6">Jak to funguje?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">📸</div>
              <h3 className="font-medium text-neutral-900 mb-2">1. Vyfot vlasy</h3>
              <p className="text-sm text-neutral-600">
                Přirozené denní světlo, 2-3 fotky z různých úhlů
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="font-medium text-neutral-900 mb-2">2. AI analýza</h3>
              <p className="text-sm text-neutral-600">
                Náš algoritmus analyzuje tón, jas a hloubku barvy
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-medium text-neutral-900 mb-2">3. Doporučení</h3>
              <p className="text-sm text-neutral-600">
                Dostaneš 3 nejlepší S-odstíny přesně pro tvé vlasy
              </p>
            </div>
          </div>
        </div>

        {/* Upload section */}
        <div className="bg-brand-ivory rounded-3xl p-8 border border-brand-sand mb-8">
          <h2 className="text-2xl font-serif text-neutral-900 mb-6">Nahraj fotky</h2>

          {/* Upload area */}
          <label className="block w-full aspect-[3/2] border-2 border-dashed border-brand-sand rounded-3xl hover:border-brand-burgundy transition-all cursor-pointer bg-gradient-to-br from-brand-cream to-brand-ivory relative overflow-hidden mb-6">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileUpload}
              className="hidden"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {uploadedImages.length === 0 ? (
                <div className="text-center">
                  <div className="text-6xl mb-4">📷</div>
                  <p className="text-lg font-medium text-neutral-900 mb-2">
                    Klikni nebo přetáhni fotky sem
                  </p>
                  <p className="text-sm text-neutral-600">
                    2-3 fotky, JPG nebo PNG, max 5MB
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-4 p-4">
                  {uploadedImages.map((url, idx) => (
                    <div key={idx} className="aspect-square rounded-2xl overflow-hidden border-2 border-brand-burgundy">
                      <img src={url} alt={`Upload ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </label>

          {uploadedImages.length > 0 && (
            <div className="flex gap-4">
              <button
                onClick={() => setUploadedImages([])}
                className="flex-1 border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-ivory px-8 py-4 rounded-full text-base font-medium transition-all"
              >
                Smazat fotky
              </button>
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="flex-1 bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-8 py-4 rounded-full text-base font-medium transition-all shadow-soft-lg disabled:opacity-50"
              >
                {isAnalyzing ? 'Analyzuji...' : 'Spustit AI analýzu'}
              </button>
            </div>
          )}
        </div>

        {/* Results */}
        {results && (
          <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand">
            <h2 className="text-2xl font-serif text-neutral-900 mb-6">
              Doporučené odstíny pro tebe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {results.map((code) => {
                const shade = SHADES.find((s) => s.code === code);
                return (
                  <div
                    key={code}
                    className="bg-brand-ivory rounded-3xl p-6 border border-brand-sand text-center"
                  >
                    <div
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-soft-lg"
                      style={{ backgroundColor: shade?.color }}
                    ></div>
                    <p className="text-2xl font-serif text-brand-burgundy mb-1">{shade?.code}</p>
                    <p className="text-lg text-neutral-900 mb-2">{shade?.name}</p>
                    <p className="text-sm text-neutral-600 mb-4">Shoda: 95%</p>
                    <Link
                      href={`/obchod?shade=${code}`}
                      className="inline-block bg-brand-burgundy text-brand-ivory px-6 py-2 rounded-full text-sm hover:bg-brand-burgundy-hover transition-all"
                    >
                      Zobrazit produkty
                    </Link>
                  </div>
                );
              })}
            </div>
            <p className="text-sm text-neutral-600 text-center">
              Nejsi si jistá? Využij naši 14denní{' '}
              <span className="font-medium text-brand-burgundy">Shade-Swap záruku</span> -
              vyměníme ti odstín zdarma!
            </p>
          </div>
        )}

        {/* Tips */}
        <div className="mt-12 bg-brand-ivory rounded-3xl p-8 border border-brand-sand">
          <h2 className="text-2xl font-serif text-neutral-900 mb-6">Tipy pro nejlepší výsledky</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-brand-burgundy mb-2">✓ Doporučujeme</h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>• Denní přirozené světlo (ne přímé slunce)</li>
                <li>• Fotky z různých úhlů (přední, boční, zadní)</li>
                <li>• Rozčesané vlasy</li>
                <li>• Čistý pozadí</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-brand-burgundy mb-2">✗ Vyhni se</h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>• Umělé žluté osvětlení</li>
                <li>• Flash fotoaparát</li>
                <li>• Mokré vlasy</li>
                <li>• Příliš tmavé prostředí</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
