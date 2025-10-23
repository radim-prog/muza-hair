// TypeScript Types for Múza Hair E-shop

// S-Shade color codes (10 standardized shades)
export type ShadeCode =
  | 'S01' // Černá
  | 'S02' // Tmavě hnědá
  | 'S03' // Středně hnědá
  | 'S04' // Světle hnědá
  | 'S05' // Tmavá blond
  | 'S06' // Přírodní blond
  | 'S07' // Popelavá blond
  | 'S08' // Platinová blond
  | 'S09' // Medová blond
  | 'S10'; // Bronde/Beige

// Application methods
export type ApplicationMethod = 'TAPE' | 'ITIP' | 'WEFT';

// Hair quality grades
export type HairQuality = 'EE' | 'EU' | 'REMY';

// Product status
export type ProductStatus = 'active' | 'draft' | 'archived' | 'out_of_stock';

// Order status
export type OrderStatus =
  | 'pending'        // Čeká na platbu
  | 'paid'           // Zaplaceno
  | 'processing'     // Zpracovává se
  | 'shipped'        // Odesláno
  | 'delivered'      // Doručeno
  | 'cancelled'      // Zrušeno
  | 'refunded';      // Vráceno

// User role
export type UserRole = 'customer' | 'b2b' | 'admin';

// ===================================
// PRODUCT TYPES
// ===================================

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;

  // Product details
  method: ApplicationMethod;
  shade: ShadeCode;
  length: number; // cm (e.g., 40, 50, 60)
  quality: HairQuality;

  // Pricing (per gram)
  pricePerGram: number; // Kč per gram
  minGrams: number; // Minimum purchase (e.g., 50g)
  maxGrams: number; // Maximum purchase (e.g., 500g)
  stepGrams: number; // Increment step (e.g., 10g)

  // Stock
  stockGrams: number; // Available stock in grams
  status: ProductStatus;

  // Images
  images: string[]; // Array of image URLs
  thumbnail: string; // Main thumbnail URL

  // SEO
  metaTitle?: string;
  metaDescription?: string;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

// Shade information (for display)
export interface ShadeInfo {
  code: ShadeCode;
  name: string;
  nameEn: string;
  color: string; // Hex color
  description?: string;
}

// ===================================
// USER TYPES
// ===================================

export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;

  // Contact info
  phone?: string;

  // Shipping address
  address?: {
    street: string;
    city: string;
    zip: string;
    country: string;
  };

  // B2B info (if role === 'b2b')
  businessInfo?: {
    companyName: string;
    ico: string;
    dic?: string;
    discountPercent: number; // B2B discount (e.g., 15%)
  };

  // Timestamps
  createdAt: Date;
  lastLogin: Date;
}

// ===================================
// CART TYPES
// ===================================

export interface CartItem {
  productId: string;
  product: Product; // Denormalized for quick access
  grams: number;
  pricePerGram: number;
}

export interface Cart {
  items: CartItem[];
  totalGrams: number;
  subtotal: number; // Kč
  discount: number; // Kč (B2B discount)
  shippingCost: number; // Kč
  total: number; // Kč
}

// ===================================
// ORDER TYPES
// ===================================

export interface OrderItem {
  productId: string;
  productName: string;
  productSlug: string;
  method: ApplicationMethod;
  shade: ShadeCode;
  length: number;
  grams: number;
  pricePerGram: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  orderNumber: string; // e.g., "MH-2025-0001"

  // User info
  userId: string;
  userEmail: string;
  userName: string;

  // Items
  items: OrderItem[];

  // Pricing
  subtotal: number;
  discount: number;
  shippingCost: number;
  total: number;

  // Shipping
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    zip: string;
    country: string;
    phone: string;
  };

  // Status
  status: OrderStatus;

  // Payment
  paymentMethod: 'card' | 'bank_transfer' | 'cash_on_delivery';
  paymentId?: string; // Stripe payment ID
  paidAt?: Date;

  // Tracking
  trackingNumber?: string;
  shippedAt?: Date;
  deliveredAt?: Date;

  // Notes
  customerNote?: string;
  adminNote?: string;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

// ===================================
// FILTERS (for Product Listing Page)
// ===================================

export interface ProductFilters {
  method?: ApplicationMethod[];
  shade?: ShadeCode[];
  length?: number[]; // e.g., [40, 50, 60]
  quality?: HairQuality[];
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
}

export interface ProductSort {
  field: 'name' | 'pricePerGram' | 'createdAt' | 'popularity';
  direction: 'asc' | 'desc';
}
