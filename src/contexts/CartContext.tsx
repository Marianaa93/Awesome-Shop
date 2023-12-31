import React, { createContext, useContext, useState } from "react";
import { CartContextProps, UpdateProductAmount } from "./CartContextProps";
import { Product } from "../types";
import { api } from "../services/api";

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export function CartProvider({ children }: React.PropsWithChildren<{}>) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = async (productId: number) => {
    try {
      const productAlreadyInCart = cart.find(
        (product) => product.id === productId
      );
      if (!productAlreadyInCart) {
        const { data: product } = await api.get<Product>(
          `products/${productId}`
        );
        setCart([...cart, { ...product, amount: 1 }]);
      }

      if (productAlreadyInCart) {
        const updatedCart = cart.map((cartItem) =>
          cartItem.id === productId
            ? { ...cartItem, amount: Number(cartItem.amount) + 1 }
            : cartItem
        );
        setCart(updatedCart);
        return;
      }
    } catch {
      console.log("something went wrong");
    }
  };

  const removeFromCart = (productId: number) => {
    const filteredCart = cart.filter((cartItem) => cartItem.id !== productId);
    setCart(filteredCart);
  };

  const updateProductAmount = ({ productId, amount }: UpdateProductAmount) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === productId ? { ...cartItem, amount: amount } : cartItem
    );
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateProductAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
