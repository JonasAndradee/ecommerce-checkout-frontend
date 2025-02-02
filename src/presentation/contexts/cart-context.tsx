"use client";

import { createContext, useContext, PropsWithChildren } from "react";
import { Item } from "@/domain/entities/common";

interface CartContextType {
  items: Item[];
  total: number;
}

const CartContext = createContext<CartContextType>({
  items: [
    {
      name: "Smartphone Galaxy A54",
      quantity: 1,
      amount: 1999.99,
    },
    {
      name: "Fone de Ouvido Bluetooth",
      quantity: 1,
      amount: 299.99,
    },
  ],
  total: 2299.98,
});

export function CartProvider({ children }: PropsWithChildren) {
  const value = {
    items: [
      {
        name: "Smartphone Galaxy A54",
        quantity: 1,
        amount: 1999.99,
      },
      {
        name: "Fone de Ouvido Bluetooth",
        quantity: 1,
        amount: 299.99,
      },
    ],
    total: 2299.98,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};
