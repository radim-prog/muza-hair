'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/Navigation';

export default function UcetPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Get from Firebase Auth
  const user = {
    firstName: 'Jana',
    lastName: 'Nováková',
    email: 'jana@email.cz',
    phone: '+420 777 888 999',
    memberSince: '2024-01-15',
    totalOrders: 3,
    totalSpent: 15420,
    favoriteCount: 5,
  };

  // TODO: Get from Firebase Firestore
  const recentOrders = [
    {
      id: 'OBJ-2025-001',
      date: '2025-10-15',
      total: 4200,
      status: 'delivered' as const,
      items: 2,
    },
    {
      id: 'OBJ-2025-002',
      date: '2025-09-22',
      total: 6820,
      status: 'delivered' as const,
      items: 3,
    },
    {
      id: 'OBJ-2025-003',
      date: '2025-08-10',
      total: 4400,
      status: 'delivered' as const,
      items: 1,
    },
  ];

  const handleLogout = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    // TODO: Firebase Auth signOut()
    router.push('/');
  };

  const getStatusLabel = (status: string) => {
    const labels = {
      pending: 'Čeká na zpracování',
      processing: 'Zpracovává se',
      shipped: 'Odesláno',
      delivered: 'Doručeno',
      cancelled: 'Zrušeno',
    };
    return labels[status as keyof typeof labels] || status;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-serif text-neutral-900 mb-2">
            Můj účet
          </h1>
          <p className="text-neutral-600">
            Vítej zpět, {user.firstName}! 👋
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-brand-cream rounded-3xl p-6 border border-brand-sand sticky top-24">
              {/* User Info */}
              <div className="mb-6 pb-6 border-b border-brand-sand">
                <div className="w-20 h-20 rounded-full bg-brand-burgundy text-brand-ivory flex items-center justify-center text-2xl font-serif mb-4">
                  {user.firstName[0]}{user.lastName[0]}
                </div>
                <h3 className="text-xl font-serif text-neutral-900 mb-1">
                  {user.firstName} {user.lastName}
                </h3>
                <p className="text-sm text-neutral-600 mb-1">{user.email}</p>
                <p className="text-sm text-neutral-600">{user.phone}</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                <Link
                  href="/ucet"
                  className="block px-4 py-3 rounded-2xl bg-brand-burgundy text-brand-ivory font-medium"
                >
                  Přehled
                </Link>
                <Link
                  href="/ucet/objednavky"
                  className="block px-4 py-3 rounded-2xl text-neutral-700 hover:bg-brand-sand transition-all"
                >
                  Moje objednávky
                </Link>
                <Link
                  href="/ucet/oblibene"
                  className="block px-4 py-3 rounded-2xl text-neutral-700 hover:bg-brand-sand transition-all"
                >
                  Oblíbené produkty
                </Link>
                <Link
                  href="/ucet/nastaveni"
                  className="block px-4 py-3 rounded-2xl text-neutral-700 hover:bg-brand-sand transition-all"
                >
                  Nastavení účtu
                </Link>
                <button
                  onClick={handleLogout}
                  disabled={isLoading}
                  className="w-full text-left px-4 py-3 rounded-2xl text-neutral-700 hover:bg-red-50 hover:text-red-600 transition-all disabled:opacity-50"
                >
                  Odhlásit se
                </button>
              </nav>

              {/* Member Since */}
              <div className="mt-6 pt-6 border-t border-brand-sand">
                <p className="text-xs text-neutral-600">
                  Členem od{' '}
                  {new Date(user.memberSince).toLocaleDateString('cs-CZ', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-brand-ivory rounded-3xl p-6 border border-brand-sand text-center">
                <div className="text-4xl font-serif text-brand-burgundy mb-2">
                  {user.totalOrders}
                </div>
                <p className="text-sm text-neutral-600">Celkem objednávek</p>
              </div>
              <div className="bg-brand-ivory rounded-3xl p-6 border border-brand-sand text-center">
                <div className="text-4xl font-serif text-brand-burgundy mb-2">
                  {user.totalSpent.toLocaleString('cs-CZ')} Kč
                </div>
                <p className="text-sm text-neutral-600">Celková útrata</p>
              </div>
              <div className="bg-brand-ivory rounded-3xl p-6 border border-brand-sand text-center">
                <div className="text-4xl font-serif text-brand-burgundy mb-2">
                  {user.favoriteCount}
                </div>
                <p className="text-sm text-neutral-600">Oblíbených produktů</p>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-brand-cream rounded-3xl p-8 border border-brand-sand">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-serif text-neutral-900">
                  Nedávné objednávky
                </h2>
                <Link
                  href="/ucet/objednavky"
                  className="text-sm text-brand-burgundy hover:underline"
                >
                  Zobrazit vše →
                </Link>
              </div>

              {recentOrders.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📦</div>
                  <p className="text-neutral-600 mb-6">Zatím jsi nic neobjednala</p>
                  <Link
                    href="/obchod"
                    className="inline-block bg-brand-burgundy text-brand-ivory px-8 py-3 rounded-full hover:bg-brand-burgundy-hover transition-all"
                  >
                    Prohlédnout produkty
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="bg-brand-ivory rounded-2xl p-6 border border-brand-sand hover:border-brand-burgundy transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-medium text-neutral-900">
                              Objednávka {order.id}
                            </h3>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                order.status
                              )}`}
                            >
                              {getStatusLabel(order.status)}
                            </span>
                          </div>
                          <p className="text-sm text-neutral-600">
                            {new Date(order.date).toLocaleDateString('cs-CZ', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}{' '}
                            • {order.items} {order.items === 1 ? 'položka' : order.items < 5 ? 'položky' : 'položek'}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-lg font-medium text-neutral-900">
                              {order.total.toLocaleString('cs-CZ')} Kč
                            </p>
                          </div>
                          <Link
                            href={`/ucet/objednavky/${order.id}`}
                            className="px-4 py-2 rounded-full border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-ivory transition-all text-sm font-medium whitespace-nowrap"
                          >
                            Detail
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/ucet/oblibene"
                className="bg-brand-ivory rounded-3xl p-8 border border-brand-sand hover:border-brand-burgundy transition-all group"
              >
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-2xl font-serif text-neutral-900 mb-2 group-hover:text-brand-burgundy transition-colors">
                  Oblíbené produkty
                </h3>
                <p className="text-neutral-600 text-sm">
                  Máš {user.favoriteCount} uložených produktů
                </p>
              </Link>

              <Link
                href="/ai-color-match"
                className="bg-brand-ivory rounded-3xl p-8 border border-brand-sand hover:border-brand-burgundy transition-all group"
              >
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-2xl font-serif text-neutral-900 mb-2 group-hover:text-brand-burgundy transition-colors">
                  AI Color-Match
                </h3>
                <p className="text-neutral-600 text-sm">
                  Najdi svůj perfektní odstín
                </p>
              </Link>
            </div>

            {/* B2B Upgrade */}
            <div className="bg-gradient-to-br from-brand-burgundy to-brand-burgundy-active rounded-3xl p-8 text-brand-ivory">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💼</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif mb-3">
                    Jsi kadeřnice? Přejdi na B2B
                  </h3>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li>• Sleva 15-30% na všechny produkty</li>
                    <li>• Doprava zdarma vždy</li>
                    <li>• Platba fakturou 14 dní</li>
                    <li>• Osobní account manager</li>
                  </ul>
                  <Link
                    href="/pro-kadernice#registrace"
                    className="inline-block bg-brand-ivory text-brand-burgundy px-6 py-3 rounded-full font-medium hover:bg-brand-cream transition-all"
                  >
                    Zjistit více o B2B
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
