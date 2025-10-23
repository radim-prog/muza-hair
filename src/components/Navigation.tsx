'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export function Navigation() {
  const { itemCount, total } = useCart();

  return (
    <nav className="border-b border-brand-sand bg-brand-ivory/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-12">
            <Link href="/" className="text-2xl font-serif text-brand-burgundy">
              Múza Hair
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/obchod"
                className="text-neutral-700 hover:text-brand-burgundy transition-colors text-sm"
              >
                Obchod
              </Link>
              <Link
                href="/ai-color-match"
                className="text-neutral-700 hover:text-brand-burgundy transition-colors text-sm"
              >
                AI Color-Match
              </Link>
              <Link
                href="/pro-kadernice"
                className="text-neutral-700 hover:text-brand-burgundy transition-colors text-sm"
              >
                Pro kadeřnice
              </Link>
              <Link
                href="/o-nas"
                className="text-neutral-700 hover:text-brand-burgundy transition-colors text-sm"
              >
                O nás
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/prihlasit"
              className="text-neutral-700 hover:text-brand-burgundy transition-colors text-sm hidden sm:block"
            >
              Přihlásit se
            </Link>
            <Link
              href="/kosik"
              className="bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-6 py-2.5 rounded-full transition-all shadow-soft text-sm relative"
            >
              Košík ({itemCount})
              {total > 0 && (
                <span className="hidden sm:inline ml-2 text-xs opacity-80">
                  • {Math.round(total).toLocaleString('cs-CZ')} Kč
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
