import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-brand-ivory flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-serif text-brand-burgundy mb-4">404</h1>
        <h2 className="text-3xl font-serif text-neutral-900 mb-4">Produkt nenalezen</h2>
        <p className="text-neutral-600 mb-8">
          Omlouváme se, ale tento produkt neexistuje nebo byl odstraněn.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/obchod"
            className="bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-8 py-3 rounded-full transition-all shadow-soft"
          >
            Zpět do obchodu
          </Link>
          <Link
            href="/"
            className="border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-ivory px-8 py-3 rounded-full transition-all"
          >
            Domů
          </Link>
        </div>
      </div>
    </div>
  );
}
