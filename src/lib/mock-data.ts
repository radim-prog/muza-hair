// Mock Data for Development
// TODO: Replace with Firestore queries when Firebase is connected

import { Product, ShadeInfo, ShadeCode } from './types';

// ===================================
// SHADE INFORMATION
// ===================================

export const SHADES: ShadeInfo[] = [
  { code: 'S01', name: 'Černá', nameEn: 'Black', color: '#1A1A1A' },
  { code: 'S02', name: 'Tmavě hnědá', nameEn: 'Dark Brown', color: '#3B2B20' },
  { code: 'S03', name: 'Středně hnědá', nameEn: 'Medium Brown', color: '#6A4B34' },
  { code: 'S04', name: 'Světle hnědá', nameEn: 'Light Brown', color: '#8C6A4F' },
  { code: 'S05', name: 'Tmavá blond', nameEn: 'Dark Blonde', color: '#B28A63' },
  { code: 'S06', name: 'Přírodní blond', nameEn: 'Natural Blonde', color: '#D1B48C' },
  { code: 'S07', name: 'Popelavá blond', nameEn: 'Ash Blonde', color: '#C2C0B5' },
  { code: 'S08', name: 'Platinová blond', nameEn: 'Platinum Blonde', color: '#E8E6E2' },
  { code: 'S09', name: 'Medová blond', nameEn: 'Honey Blonde', color: '#E0C27A' },
  { code: 'S10', name: 'Bronde/Beige', nameEn: 'Bronde/Beige', color: '#BFA684' },
];

// Helper to get shade info by code
export const getShadeInfo = (code: ShadeCode): ShadeInfo | undefined => {
  return SHADES.find((s) => s.code === code);
};

// ===================================
// MOCK PRODUCTS
// ===================================

export const MOCK_PRODUCTS: Product[] = [
  // TAPE Extensions
  {
    id: 'tape-s03-50',
    name: 'Tape Extensions 50cm - Středně hnědá',
    slug: 'tape-extensions-50cm-stredne-hneda-s03',
    description:
      'Kvalitní lepící extenze pro rychlou aplikaci. 100% lidské vlasy EE kvality, délka 50cm. Výdrž 4-8 týdnů.',
    method: 'TAPE',
    shade: 'S03',
    length: 50,
    quality: 'EE',
    pricePerGram: 15,
    minGrams: 50,
    maxGrams: 300,
    stepGrams: 10,
    stockGrams: 500,
    status: 'active',
    images: ['/products/tape-s03-50-1.jpg', '/products/tape-s03-50-2.jpg'],
    thumbnail: '/products/tape-s03-50-1.jpg',
    createdAt: new Date('2025-10-01'),
    updatedAt: new Date('2025-10-20'),
  },
  {
    id: 'tape-s06-60',
    name: 'Tape Extensions 60cm - Přírodní blond',
    slug: 'tape-extensions-60cm-prirodni-blond-s06',
    description:
      'Luxusní lepící extenze v přírodní blond barvě. EU kvalita, délka 60cm. Ideální pro dlouhé vlasy.',
    method: 'TAPE',
    shade: 'S06',
    length: 60,
    quality: 'EU',
    pricePerGram: 18,
    minGrams: 50,
    maxGrams: 300,
    stepGrams: 10,
    stockGrams: 350,
    status: 'active',
    images: ['/products/tape-s06-60-1.jpg'],
    thumbnail: '/products/tape-s06-60-1.jpg',
    createdAt: new Date('2025-09-15'),
    updatedAt: new Date('2025-10-18'),
  },
  {
    id: 'tape-s01-40',
    name: 'Tape Extensions 40cm - Černá',
    slug: 'tape-extensions-40cm-cerna-s01',
    description: 'Krátké tape extenze v černé barvě. Perfektní pro bob účesy a střední délky.',
    method: 'TAPE',
    shade: 'S01',
    length: 40,
    quality: 'EE',
    pricePerGram: 14,
    minGrams: 50,
    maxGrams: 200,
    stepGrams: 10,
    stockGrams: 280,
    status: 'active',
    images: ['/products/tape-s01-40-1.jpg'],
    thumbnail: '/products/tape-s01-40-1.jpg',
    createdAt: new Date('2025-09-20'),
    updatedAt: new Date('2025-10-19'),
  },

  // ITIP Extensions
  {
    id: 'itip-s05-55',
    name: 'Itip Extensions 55cm - Tmavá blond',
    slug: 'itip-extensions-55cm-tmava-blond-s05',
    description:
      'Keratin bonding extenze pro přirozený vzhled. REMY kvalita, délka 55cm. Výdrž 3-6 měsíců.',
    method: 'ITIP',
    shade: 'S05',
    length: 55,
    quality: 'REMY',
    pricePerGram: 22,
    minGrams: 100,
    maxGrams: 500,
    stepGrams: 25,
    stockGrams: 600,
    status: 'active',
    images: ['/products/itip-s05-55-1.jpg', '/products/itip-s05-55-2.jpg'],
    thumbnail: '/products/itip-s05-55-1.jpg',
    createdAt: new Date('2025-08-10'),
    updatedAt: new Date('2025-10-15'),
  },
  {
    id: 'itip-s02-50',
    name: 'Itip Extensions 50cm - Tmavě hnědá',
    slug: 'itip-extensions-50cm-tmave-hneda-s02',
    description:
      'Prémiové keratin extenze v tmavě hnědé. EE kvalita, přirozený vzhled, dlouhá výdrž.',
    method: 'ITIP',
    shade: 'S02',
    length: 50,
    quality: 'EE',
    pricePerGram: 20,
    minGrams: 100,
    maxGrams: 500,
    stepGrams: 25,
    stockGrams: 450,
    status: 'active',
    images: ['/products/itip-s02-50-1.jpg'],
    thumbnail: '/products/itip-s02-50-1.jpg',
    createdAt: new Date('2025-08-25'),
    updatedAt: new Date('2025-10-12'),
  },
  {
    id: 'itip-s08-60',
    name: 'Itip Extensions 60cm - Platinová blond',
    slug: 'itip-extensions-60cm-platinova-blond-s08',
    description:
      'Exkluzivní platinová blond. REMY kvalita, extra dlouhé 60cm. Pro náročné klientky.',
    method: 'ITIP',
    shade: 'S08',
    length: 60,
    quality: 'REMY',
    pricePerGram: 28,
    minGrams: 100,
    maxGrams: 400,
    stepGrams: 25,
    stockGrams: 200,
    status: 'active',
    images: ['/products/itip-s08-60-1.jpg', '/products/itip-s08-60-2.jpg'],
    thumbnail: '/products/itip-s08-60-1.jpg',
    createdAt: new Date('2025-07-15'),
    updatedAt: new Date('2025-10-10'),
  },

  // WEFT Extensions
  {
    id: 'weft-s04-55',
    name: 'Weft Extensions 55cm - Světle hnědá',
    slug: 'weft-extensions-55cm-svetle-hneda-s04',
    description:
      'Tresy na přišití pro dlouhodobé nošení. EU kvalita, délka 55cm. Výdrž až 1 rok.',
    method: 'WEFT',
    shade: 'S04',
    length: 55,
    quality: 'EU',
    pricePerGram: 12,
    minGrams: 100,
    maxGrams: 600,
    stepGrams: 50,
    stockGrams: 800,
    status: 'active',
    images: ['/products/weft-s04-55-1.jpg'],
    thumbnail: '/products/weft-s04-55-1.jpg',
    createdAt: new Date('2025-07-01'),
    updatedAt: new Date('2025-10-08'),
  },
  {
    id: 'weft-s09-50',
    name: 'Weft Extensions 50cm - Medová blond',
    slug: 'weft-extensions-50cm-medova-blond-s09',
    description: 'Teplá medová blond v weft variantě. REMY kvalita, snadné přišití.',
    method: 'WEFT',
    shade: 'S09',
    length: 50,
    quality: 'REMY',
    pricePerGram: 16,
    minGrams: 100,
    maxGrams: 600,
    stepGrams: 50,
    stockGrams: 550,
    status: 'active',
    images: ['/products/weft-s09-50-1.jpg', '/products/weft-s09-50-2.jpg'],
    thumbnail: '/products/weft-s09-50-1.jpg',
    createdAt: new Date('2025-06-20'),
    updatedAt: new Date('2025-10-05'),
  },
  {
    id: 'weft-s10-60',
    name: 'Weft Extensions 60cm - Bronde/Beige',
    slug: 'weft-extensions-60cm-bronde-beige-s10',
    description:
      'Trendy bronde odstín v weft metodě. EE kvalita, extra dlouhé 60cm pro maximální objem.',
    method: 'WEFT',
    shade: 'S10',
    length: 60,
    quality: 'EE',
    pricePerGram: 14,
    minGrams: 100,
    maxGrams: 600,
    stepGrams: 50,
    stockGrams: 400,
    status: 'active',
    images: ['/products/weft-s10-60-1.jpg'],
    thumbnail: '/products/weft-s10-60-1.jpg',
    createdAt: new Date('2025-06-10'),
    updatedAt: new Date('2025-10-03'),
  },

  // Special/Featured
  {
    id: 'tape-s07-50-special',
    name: 'Tape Extensions 50cm - Popelavá blond (NOVINKA)',
    slug: 'tape-extensions-50cm-popelava-blond-s07',
    description:
      'NOVÁ kolekce! Popelavá blond - nejžádanější odstín sezóny. REMY kvalita, jemné vlasy.',
    method: 'TAPE',
    shade: 'S07',
    length: 50,
    quality: 'REMY',
    pricePerGram: 24,
    minGrams: 50,
    maxGrams: 300,
    stepGrams: 10,
    stockGrams: 150,
    status: 'active',
    images: ['/products/tape-s07-50-1.jpg', '/products/tape-s07-50-2.jpg'],
    thumbnail: '/products/tape-s07-50-1.jpg',
    createdAt: new Date('2025-10-15'),
    updatedAt: new Date('2025-10-22'),
  },
];

// ===================================
// HELPER FUNCTIONS
// ===================================

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  return MOCK_PRODUCTS.find((p) => p.id === id);
};

// Get product by slug
export const getProductBySlug = (slug: string): Product | undefined => {
  return MOCK_PRODUCTS.find((p) => p.slug === slug);
};

// Get all active products
export const getActiveProducts = (): Product[] => {
  return MOCK_PRODUCTS.filter((p) => p.status === 'active');
};

// Get products by method
export const getProductsByMethod = (method: string): Product[] => {
  return MOCK_PRODUCTS.filter((p) => p.method === method && p.status === 'active');
};

// Get products by shade
export const getProductsByShade = (shade: ShadeCode): Product[] => {
  return MOCK_PRODUCTS.filter((p) => p.shade === shade && p.status === 'active');
};

// Get featured/new products
export const getFeaturedProducts = (limit: number = 3): Product[] => {
  return MOCK_PRODUCTS.filter((p) => p.status === 'active')
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, limit);
};
