'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

interface Order {
  id: string;
  date: string;
  total: number;
  status: OrderStatus;
  items: {
    name: string;
    grams: number;
    price: number;
    image: string;
  }[];
  shipping: {
    name: string;
    address: string;
    city: string;
    zip: string;
  };
  tracking?: string;
}

export default function ObjednavkyPage() {
  const [filter, setFilter] = useState<'all' | OrderStatus>('all');

  // TODO: Get from Firebase Firestore
  const orders: Order[] = [
    {
      id: 'OBJ-2025-001',
      date: '2025-10-15T14:30:00',
      total: 4200,
      status: 'delivered',
      items: [
        {
          name: 'TAPE S05 (Karamelová) • 50 cm • EE kvalita',
          grams: 100,
          price: 4200,
          image: '/placeholder-product.jpg',
        },
      ],
      shipping: {
        name: 'Jana Nováková',
        address: 'Hlavní 123',
        city: 'Praha',
        zip: '110 00',
      },
      tracking: 'Z123456789CZ',
    },
    {
      id: 'OBJ-2025-002',
      date: '2025-09-22T10:15:00',
      total: 6820,
      status: 'delivered',
      items: [
        {
          name: 'ITIP S06 (Medová) • 55 cm • EU kvalita',
          grams: 100,
          price: 4800,
          image: '/placeholder-product.jpg',
        },
        {
          name: 'WEFT S05 (Karamelová) • 50 cm • REMY',
          grams: 80,
          price: 2020,
          image: '/placeholder-product.jpg',
        },
      ],
      shipping: {
        name: 'Jana Nováková',
        address: 'Hlavní 123',
        city: 'Praha',
        zip: '110 00',
      },
      tracking: 'Z987654321CZ',
    },
    {
      id: 'OBJ-2025-003',
      date: '2025-08-10T16:45:00',
      total: 4400,
      status: 'delivered',
      items: [
        {
          name: 'TAPE S07 (Středně hnědá) • 60 cm • EE kvalita',
          grams: 100,
          price: 4400,
          image: '/placeholder-product.jpg',
        },
      ],
      shipping: {
        name: 'Jana Nováková',
        address: 'Hlavní 123',
        city: 'Praha',
        zip: '110 00',
      },
      tracking: 'Z555444333CZ',
    },
  ];

  const getStatusLabel = (status: OrderStatus) => {
    const labels = {
      pending: 'Čeká na zpracování',
      processing: 'Zpracovává se',
      shipped: 'Odesláno',
      delivered: 'Doručeno',
      cancelled: 'Zrušeno',
    };
    return labels[status];
  };

  const getStatusColor = (status: OrderStatus) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      processing: 'bg-blue-100 text-blue-800 border-blue-200',
      shipped: 'bg-purple-100 text-purple-800 border-purple-200',
      delivered: 'bg-green-100 text-green-800 border-green-200',
      cancelled: 'bg-red-100 text-red-800 border-red-200',
    };
    return colors[status];
  };

  const filteredOrders = filter === 'all' ? orders : orders.filter((o) => o.status === filter);

  const filterButtons: Array<{ label: string; value: 'all' | OrderStatus }> = [
    { label: 'Vše', value: 'all' },
    { label: 'Čeká', value: 'pending' },
    { label: 'Zpracovává se', value: 'processing' },
    { label: 'Odesláno', value: 'shipped' },
    { label: 'Doručeno', value: 'delivered' },
  ];

  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/ucet"
            className="text-sm text-brand-burgundy hover:underline mb-4 inline-block"
          >
            ← Zpět na můj účet
          </Link>
          <h1 className="text-5xl font-serif text-neutral-900 mb-2">Moje objednávky</h1>
          <p className="text-neutral-600">
            Celkem {orders.length}{' '}
            {orders.length === 1
              ? 'objednávka'
              : orders.length < 5
              ? 'objednávky'
              : 'objednávek'}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-3">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === btn.value
                  ? 'bg-brand-burgundy text-brand-ivory'
                  : 'bg-brand-cream text-neutral-700 hover:bg-brand-sand border border-brand-sand'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="bg-brand-cream rounded-3xl p-16 border border-brand-sand text-center">
            <div className="text-6xl mb-4">📦</div>
            <p className="text-neutral-600 mb-6">Žádné objednávky s tímto filtrem</p>
            <button
              onClick={() => setFilter('all')}
              className="text-brand-burgundy hover:underline font-medium"
            >
              Zobrazit vše
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-brand-cream rounded-3xl p-6 md:p-8 border border-brand-sand"
              >
                {/* Order Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brand-sand">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-serif text-neutral-900">
                        {order.id}
                      </h2>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {getStatusLabel(order.status)}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600">
                      Objednáno{' '}
                      {new Date(order.date).toLocaleDateString('cs-CZ', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-neutral-600 mb-1">Celkem</p>
                    <p className="text-3xl font-serif text-brand-burgundy">
                      {order.total.toLocaleString('cs-CZ')} Kč
                    </p>
                  </div>
                </div>

                {/* Order Items */}
                <div className="py-6 space-y-4">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-2xl bg-brand-sand flex items-center justify-center text-neutral-400 flex-shrink-0">
                        📷
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-neutral-900 mb-1 truncate">
                          {item.name}
                        </h3>
                        <p className="text-sm text-neutral-600">
                          {item.grams} g • {item.price.toLocaleString('cs-CZ')} Kč
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shipping Info */}
                <div className="pt-6 border-t border-brand-sand">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-neutral-900 mb-2">
                        Doručovací adresa
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {order.shipping.name}
                        <br />
                        {order.shipping.address}
                        <br />
                        {order.shipping.zip} {order.shipping.city}
                      </p>
                    </div>
                    {order.tracking && (
                      <div>
                        <h4 className="text-sm font-medium text-neutral-900 mb-2">
                          Sledování zásilky
                        </h4>
                        <p className="text-sm text-neutral-600 mb-2">
                          Číslo: <span className="font-mono">{order.tracking}</span>
                        </p>
                        <a
                          href={`https://tracking.packeta.com/cs/?id=${order.tracking}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-brand-burgundy hover:underline"
                        >
                          Sledovat na Packeta.cz →
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-brand-sand mt-6 flex flex-wrap gap-3">
                  {order.status === 'delivered' && (
                    <>
                      <button className="px-6 py-2 rounded-full bg-brand-burgundy text-brand-ivory hover:bg-brand-burgundy-hover transition-all text-sm font-medium">
                        Objednat znovu
                      </button>
                      <button className="px-6 py-2 rounded-full border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-ivory transition-all text-sm font-medium">
                        Napsat recenzi
                      </button>
                    </>
                  )}
                  {order.status === 'shipped' && (
                    <a
                      href={`https://tracking.packeta.com/cs/?id=${order.tracking}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 rounded-full bg-brand-burgundy text-brand-ivory hover:bg-brand-burgundy-hover transition-all text-sm font-medium inline-block"
                    >
                      Sledovat zásilku
                    </a>
                  )}
                  {(order.status === 'pending' || order.status === 'processing') && (
                    <button className="px-6 py-2 rounded-full border-2 border-red-500 text-red-600 hover:bg-red-50 transition-all text-sm font-medium">
                      Zrušit objednávku
                    </button>
                  )}
                  <button className="px-6 py-2 rounded-full border-2 border-brand-sand text-neutral-700 hover:bg-brand-sand transition-all text-sm font-medium">
                    Stáhnout fakturu
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Help CTA */}
        {orders.length > 0 && (
          <div className="mt-12 bg-brand-cream rounded-3xl p-8 border border-brand-sand text-center">
            <h3 className="text-2xl font-serif text-neutral-900 mb-3">
              Problém s objednávkou?
            </h3>
            <p className="text-neutral-700 mb-6">
              48h Guarantee - Odpovíme do 48 hodin, garantováno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@muzahair.cz"
                className="bg-brand-burgundy hover:bg-brand-burgundy-hover text-brand-ivory px-8 py-3 rounded-full transition-all inline-block"
              >
                info@muzahair.cz
              </a>
              <Link
                href="/reklamacni-rad"
                className="border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-ivory px-8 py-3 rounded-full transition-all inline-block"
              >
                Reklamační řád
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
