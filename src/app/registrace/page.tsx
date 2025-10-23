'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/Navigation';

export default function RegistracePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    newsletter: true,
    termsAccepted: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Hesla se neshodují');
      return;
    }

    if (!formData.termsAccepted) {
      alert('Musíš souhlasit s obchodními podmínkami');
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // TODO: Firebase Auth createUserWithEmailAndPassword
    console.log('Registration:', formData);

    router.push('/ucet');
  };

  const handleGoogleRegister = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // TODO: Firebase Auth signInWithPopup(GoogleAuthProvider)
    router.push('/ucet');
  };

  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-serif text-neutral-900 mb-4">Registrace</h1>
          <p className="text-neutral-600">
            Už máš účet?{' '}
            <Link href="/prihlasit" className="text-brand-burgundy hover:underline font-medium">
              Přihlas se
            </Link>
          </p>
        </div>

        {/* Google Sign Up */}
        <button
          onClick={handleGoogleRegister}
          disabled={isLoading}
          className="w-full bg-white border-2 border-brand-sand hover:border-brand-burgundy text-neutral-900 py-4 px-6 rounded-2xl text-base font-medium transition-all mb-6 flex items-center justify-center gap-3 disabled:opacity-50"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Registrovat se přes Google
        </button>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-brand-sand"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-brand-ivory text-neutral-600">nebo e-mailem</span>
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Jméno *</label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Příjmení *
              </label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">E-mail *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
              placeholder="tvuj@email.cz"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">Telefon</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
              placeholder="+420 777 888 999"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Heslo *</label>
              <input
                type="password"
                required
                minLength={6}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
                placeholder="Minimálně 6 znaků"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Potvrdit heslo *
              </label>
              <input
                type="password"
                required
                minLength={6}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-brand-sand bg-brand-cream focus:outline-none focus:border-brand-burgundy"
                placeholder="Znovu heslo"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                className="w-4 h-4 rounded accent-brand-burgundy mt-1"
                required
              />
              <span className="text-sm text-neutral-700">
                Souhlasím s{' '}
                <Link
                  href="/obchodni-podminky"
                  className="text-brand-burgundy hover:underline"
                  target="_blank"
                >
                  obchodními podmínkami
                </Link>{' '}
                a{' '}
                <Link
                  href="/ochrana-osobnich-udaju"
                  className="text-brand-burgundy hover:underline"
                  target="_blank"
                >
                  zpracováním osobních údajů
                </Link>
                .
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.newsletter}
                onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                className="w-4 h-4 rounded accent-brand-burgundy mt-1"
              />
              <span className="text-sm text-neutral-700">
                Chci dostávat newsletter s novinkami a exkluzivními nabídkami (můžeš kdykoliv
                odhlásit).
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory py-4 rounded-full text-base font-medium transition-all shadow-soft-lg disabled:opacity-50"
          >
            {isLoading ? 'Vytv\u00e1\u0159\u00edm \u00fa\u010det...' : 'Vytvo\u0159it \u00fa\u010det'}
          </button>
        </form>

        {/* Benefits */}
        <div className="mt-12 bg-brand-cream rounded-3xl p-6 border border-brand-sand">
          <h3 className="text-lg font-serif text-neutral-900 mb-4">Co získáš registrací?</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-neutral-700">
            <li>✓ Rychlejší objednávání</li>
            <li>✓ Sledování objednávek</li>
            <li>✓ Oblíbené produkty</li>
            <li>✓ Exkluzivní slevy</li>
            <li>✓ AI Color-Match historie</li>
            <li>✓ Věrnostní program</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
