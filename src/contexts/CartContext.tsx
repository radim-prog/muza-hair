'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '@/lib/types';

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  totalGrams: number;
  subtotal: number;
  total: number;
  addItem: (product: Product, grams: number) => void;
  removeItem: (productId: string) => void;
  updateItemGrams: (productId: string, grams: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'muza-hair-cart';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setItems(parsed);
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, isHydrated]);

  // Calculate totals
  const itemCount = items.length;
  const totalGrams = items.reduce((sum, item) => sum + item.grams, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.grams * item.pricePerGram,
    0
  );
  const total = subtotal; // Later: add shipping, discounts

  // Add item to cart
  const addItem = (product: Product, grams: number) => {
    setItems((prev) => {
      // Check if product already in cart
      const existingIndex = prev.findIndex((item) => item.productId === product.id);

      if (existingIndex >= 0) {
        // Update existing item
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          grams: updated[existingIndex].grams + grams,
        };
        return updated;
      } else {
        // Add new item
        return [
          ...prev,
          {
            productId: product.id,
            product,
            grams,
            pricePerGram: product.pricePerGram,
          },
        ];
      }
    });
  };

  // Remove item from cart
  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  // Update item grams
  const updateItemGrams = (productId: string, grams: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, grams } : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        totalGrams,
        subtotal,
        total,
        addItem,
        removeItem,
        updateItemGrams,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook to use cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
