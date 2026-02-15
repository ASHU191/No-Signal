import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export type CartItem = {
  productId: string;
  name: string;
  price: number;
  color: string;
  colorName: string;
  image: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (productId: string, color: string) => void;
  updateQuantity: (productId: string, color: string, quantity: number) => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("ns-cart");
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("ns-cart", JSON.stringify(items));
  }, [items]);

  const addToCart = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems(prev => {
      const existing = prev.find(i => i.productId === item.productId && i.color === item.color);
      if (existing) {
        return prev.map(i =>
          i.productId === item.productId && i.color === item.color
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId: string, color: string) => {
    setItems(prev => prev.filter(i => !(i.productId === productId && i.color === color)));
  }, []);

  const updateQuantity = useCallback((productId: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, color);
      return;
    }
    setItems(prev =>
      prev.map(i =>
        i.productId === productId && i.color === color ? { ...i, quantity } : i
      )
    );
  }, [removeFromCart]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};
