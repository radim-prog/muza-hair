'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Link from 'next/link';

interface Review {
  id: string;
  author: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  product: {
    name: string;
    method: string;
    shade: string;
    length: number;
  };
  title: string;
  content: string;
  pros: string[];
  cons: string[];
  helpful: number;
}

export default function RecenzePage() {
  const [filter, setFilter] = useState<'all' | 'TAPE' | 'ITIP' | 'WEFT'>('all');
  const [sort, setSort] = useState<'newest' | 'highest' | 'helpful'>('newest');

  // TODO: Get from Firebase Firestore
  const reviews: Review[] = [
    {
      id: '1',
      author: {
        name: 'Lucie K.',
        avatar: '👩‍🦰',
        verified: true,
      },
      rating: 5,
      date: '2025-10-15',
      product: {
        name: 'TAPE S05 (Karamelová) • 50 cm • EE kvalita',
        method: 'TAPE',
        shade: 'S05',
        length: 50,
      },
      title: 'Perfektní match! Konečně mám dlouhé vlasy 😍',
      content:
        'Objednala jsem si TAPE extenze poprvé v životě a jsem nadšená! Barva S05 sedí přesně na moje vlasy, AI Color-Match to trefilo na 100%. Aplikace byla jednoduchá i doma, trvalo mi to hodinu. Nosím už 3 týdny a drží perfektně. Vlasy jsou krásně hebké a nikdo nepozná, že to jsou extenze.',
      pros: [
        'Perfektní barva',
        'Snadná aplikace',
        'Hebké a lesklé vlasy',
        'Drží skvěle',
      ],
      cons: ['Žádné zatím'],
      helpful: 24,
    },
    {
      id: '2',
      author: {
        name: 'Markéta S.',
        avatar: '👱‍♀️',
        verified: true,
      },
      rating: 5,
      date: '2025-10-10',
      product: {
        name: 'ITIP S06 (Medová) • 55 cm • EU kvalita',
        method: 'ITIP',
        shade: 'S06',
        length: 55,
      },
      title: 'Nejlepší kvalita, co jsem kdy měla',
      content:
        'Jako kadeřnice pracuji s extenzemi denně a můžu říct, že Múza Hair je TOP kvalita. EU kvalita je opravdu remy vlasy, žádné syntetické keratinové svinstvo. I-Tip jsou perfektní pro zákaznice, které chtějí dlouhodobé řešení. Vlasy vydrží minimálně 3 měsíce a dají se opakovaně použít. Absolutně doporučuji!',
      pros: [
        '100% remy vlasy',
        'Dlouhá výdrž',
        'Dají se opakovaně použít',
        'Profesionální kvalita',
      ],
      cons: ['Aplikace vyžaduje zkušenost'],
      helpful: 18,
    },
    {
      id: '3',
      author: {
        name: 'Tereza M.',
        avatar: '🧑‍🦱',
        verified: true,
      },
      rating: 4,
      date: '2025-10-05',
      product: {
        name: 'WEFT S07 (Středně hnědá) • 50 cm • REMY',
        method: 'WEFT',
        shade: 'S07',
        length: 50,
      },
      title: 'Super objem, ale vyžaduje kadeřnici',
      content:
        'WEFT extenze jsou moje nejoblíbenější metoda pro maximální objem. Nechala jsem si je přišít u kadeřnice (sama bych to nezvládla). Výsledek je úžasný, vlasy mám jako z reklamy 😊 Jediné mínus je, že musím každé 2 měsíce na refresh, což je docela časté. Ale kvalita za to stojí.',
      pros: [
        'Maximální objem',
        'Přirozený vzhled',
        'Kvalitní vlasy',
        'Dají se barvit',
      ],
      cons: [
        'Vyžaduje profesionála',
        'Častější refresh',
      ],
      helpful: 15,
    },
    {
      id: '4',
      author: {
        name: 'Petra D.',
        avatar: '👩',
        verified: true,
      },
      rating: 5,
      date: '2025-09-28',
      product: {
        name: 'TAPE S04 (Světle hnědá) • 60 cm • EE kvalita',
        method: 'TAPE',
        shade: 'S04',
        length: 60,
      },
      title: 'Shade-Swap program zachránil situaci!',
      content:
        'Původně jsem si objednala S03, ale bylo to o tón světlejší než jsem chtěla. Využila jsem Shade-Swap program a během týdne mi přišlo S04 zdarma! Perfektní zákaznický servis. Teď nosím extenze 4 týdny a jsem naprosto spokojená. 60 cm je ideální délka pro moji výšku (172 cm).',
      pros: [
        'Shade-Swap program je skvělý',
        'Rychlá výměna',
        'Perfektní kvalita',
        'Hebké vlasy',
      ],
      cons: [],
      helpful: 22,
    },
    {
      id: '5',
      author: {
        name: 'Karolína V.',
        avatar: '👩‍🦳',
        verified: false,
      },
      rating: 5,
      date: '2025-09-20',
      product: {
        name: 'ITIP S08 (Tmavě hnědá) • 55 cm • EU kvalita',
        method: 'ITIP',
        shade: 'S08',
        length: 55,
      },
      title: 'Nejlepší investice do sebe!',
      content:
        'Celý život jsem měla tenké vlasy a komplexovala jsem z toho. Rozhodla jsem se pro I-Tip extenze a je to nejlepší rozhodnutí! Aplikaci mi udělala kamarádka kadeřnice, trvalo 3 hodiny. Nosím už 2 měsíce a vlasy pořád vypadají jako nové. Konečně mám sebevědomí a nemusím nosit pořád culík.',
      pros: [
        'Přírodní vzhled',
        'Dlouhá výdrž',
        'Kvalitní vlasy',
        'Změna života',
      ],
      cons: [
        'Aplikace trvá dlouho',
        'Vyžaduje péči',
      ],
      helpful: 19,
    },
    {
      id: '6',
      author: {
        name: 'Jana H.',
        avatar: '🧕',
        verified: true,
      },
      rating: 4,
      date: '2025-09-15',
      product: {
        name: 'TAPE S09 (Velmi tmavá) • 50 cm • EE kvalita',
        method: 'TAPE',
        shade: 'S09',
        length: 50,
      },
      title: 'Skvělé, ale vyžaduje péči',
      content:
        'TAPE extenze miluju! Snadná aplikace, drží dobře, barva perfektní. Jediné co mě překvapilo je, že vyžadují trochu více péče než moje přírodní vlasy. Musím používat speciální šampon bez silikonu a rozčesávat 2x denně. Ale výsledek za to stojí. Za mě jednoznačně doporučuji!',
      pros: [
        'Snadná aplikace',
        'Dobrá fixace',
        'Krásná barva',
        'Přiměřená cena',
      ],
      cons: [
        'Vyžaduje speciální šampon',
        'Musí se denně rozčesávat',
      ],
      helpful: 11,
    },
  ];

  // Filter by method
  const filteredReviews =
    filter === 'all' ? reviews : reviews.filter((r) => r.product.method === filter);

  // Sort
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sort === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (sort === 'highest') {
      return b.rating - a.rating;
    }
    if (sort === 'helpful') {
      return b.helpful - a.helpful;
    }
    return 0;
  });

  const averageRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    stars: rating,
    count: reviews.filter((r) => r.rating === rating).length,
    percentage: (reviews.filter((r) => r.rating === rating).length / reviews.length) * 100,
  }));

  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-serif text-neutral-900 mb-6">Recenze zákaznic</h1>
          <p className="text-lg text-neutral-600">
            Přečti si, co říkají naše spokojené zákaznice
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Average Rating */}
          <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand text-center">
            <div className="text-6xl font-serif text-brand-burgundy mb-2">
              {averageRating}
            </div>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl">
                  {i < Math.round(parseFloat(averageRating)) ? '⭐' : '☆'}
                </span>
              ))}
            </div>
            <p className="text-neutral-600">
              Z {reviews.length} {reviews.length < 5 ? 'recenzí' : 'recenzí'}
            </p>
          </div>

          {/* Rating Distribution */}
          <div className="lg:col-span-2 bg-brand-cream rounded-3xl p-8 border border-brand-sand">
            <h3 className="text-xl font-serif text-neutral-900 mb-6">Rozdělení hodnocení</h3>
            <div className="space-y-3">
              {ratingDistribution.map((dist) => (
                <div key={dist.stars} className="flex items-center gap-4">
                  <div className="flex gap-1 w-24">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm">
                        {i < dist.stars ? '⭐' : '☆'}
                      </span>
                    ))}
                  </div>
                  <div className="flex-1 bg-brand-sand rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-brand-burgundy h-full transition-all"
                      style={{ width: `${dist.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-neutral-600 w-12 text-right">
                    {dist.count}x
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filters & Sort */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
          {/* Filter by method */}
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
                  ? `Vše (${reviews.length})`
                  : `${m} (${reviews.filter((r) => r.product.method === m).length})`}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-neutral-600">Řadit:</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as any)}
              className="px-4 py-2 rounded-full border border-brand-sand bg-brand-cream text-sm focus:outline-none focus:border-brand-burgundy"
            >
              <option value="newest">Nejnovější</option>
              <option value="highest">Nejvyšší hodnocení</option>
              <option value="helpful">Nejužitečnější</option>
            </select>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6 mb-12">
          {sortedReviews.map((review) => (
            <div key={review.id} className="bg-brand-cream rounded-3xl p-8 border border-brand-sand">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{review.author.avatar}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-neutral-900">{review.author.name}</h3>
                      {review.author.verified && (
                        <span
                          className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium"
                          title="Ověřený nákup"
                        >
                          ✓ Ověřeno
                        </span>
                      )}
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">
                          {i < review.rating ? '⭐' : '☆'}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-neutral-600">
                      {new Date(review.date).toLocaleDateString('cs-CZ', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="bg-brand-ivory rounded-2xl p-4 mb-6 border border-brand-sand">
                <p className="text-sm text-neutral-600 mb-1">Zakoupený produkt:</p>
                <p className="font-medium text-neutral-900">{review.product.name}</p>
              </div>

              {/* Review Content */}
              <h4 className="font-medium text-neutral-900 text-lg mb-3">{review.title}</h4>
              <p className="text-neutral-700 mb-6">{review.content}</p>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {review.pros.length > 0 && (
                  <div>
                    <h5 className="font-medium text-neutral-900 mb-3">✅ Plusy:</h5>
                    <ul className="space-y-2">
                      {review.pros.map((pro, idx) => (
                        <li key={idx} className="text-sm text-neutral-700 flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">+</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {review.cons.length > 0 && (
                  <div>
                    <h5 className="font-medium text-neutral-900 mb-3">⚠️ Mínusy:</h5>
                    <ul className="space-y-2">
                      {review.cons.map((con, idx) => (
                        <li key={idx} className="text-sm text-neutral-700 flex items-start gap-2">
                          <span className="text-orange-600 mt-0.5">-</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-brand-sand">
                <button className="text-sm text-neutral-600 hover:text-brand-burgundy transition-colors">
                  👍 Užitečné ({review.helpful})
                </button>
                <Link
                  href={`/obchod?method=${review.product.method}`}
                  className="text-sm text-brand-burgundy hover:underline"
                >
                  Zobrazit podobné produkty →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review CTA */}
        <div className="bg-gradient-to-br from-brand-burgundy to-brand-burgundy-active rounded-3xl p-10 text-brand-ivory text-center">
          <div className="text-5xl mb-4">✍️</div>
          <h3 className="text-3xl font-serif mb-4">Koupila jsi naše extenze?</h3>
          <p className="text-brand-ivory/90 mb-8 max-w-2xl mx-auto">
            Podělte se o své zkušenosti a pomozte ostatním zákaznicím s rozhodnutím
          </p>
          <Link
            href="/ucet/objednavky"
            className="inline-block bg-brand-ivory text-brand-burgundy px-8 py-3 rounded-full font-medium hover:bg-brand-cream transition-all"
          >
            Napsat recenzi
          </Link>
        </div>
      </div>
    </div>
  );
}
