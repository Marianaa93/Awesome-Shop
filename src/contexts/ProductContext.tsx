import React, { createContext, useContext, useState, useEffect } from "react";
import {
  ProductProps,
  ProductContextProps,
  CartItemsProps,
} from "./ProductContextProps";

const ProductContext = createContext<ProductContextProps>({
  products: [],
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export function ProductProvider({ children }: React.PropsWithChildren<{}>) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [cartItems, setCartItems] = useState<CartItemsProps[]>([]);
  const [total, setTotal] = useState<number>(0);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/guilhermekuni/fake-products-api/products"
      );
      const data: ProductProps[] = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addToCart = (productCart: CartItemsProps) => {
    // const isProductInCart = cartItems.find(
    //   (item) => item.id === productCart.id
    // );
    // if (!isProductInCart) {
    setCartItems([...cartItems, productCart]);
    setTotal(total + productCart.price);
    // }
  };

  const removeFromCart = (id: number) => {
    const filteredCart = cartItems.filter((item) => item.id !== id);
    console.log(filteredCart);
    setCartItems(filteredCart);
    // setTotal(total - filteredCart.price);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, cartItems, addToCart, removeFromCart }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
