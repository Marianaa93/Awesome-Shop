import React, { createContext, useContext, useState, useEffect } from "react";
import {} from "./CartContext";
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
      console.log("somethimg went wrong");
    }
  };

  const removeFromCart = (productId: number) => {
    // const productExists= cart.some(cartProduct=>cartProduct.id === productId)
    const filtredCart = cart.filter((cartItem) => cartItem.id !== productId);
    setCart(filtredCart);
  };

  const updateProductAmount = ({ productId, amount }: UpdateProductAmount) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === productId ? { ...cartItem, amount: amount } : cartItem
    );
    setCart(updatedCart);
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
