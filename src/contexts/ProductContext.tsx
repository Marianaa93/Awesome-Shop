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
});

export function ProductProvider({ children }: React.PropsWithChildren<{}>) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [cartItems, setCartItems] = useState<CartItemsProps[]>([]);

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
    setCartItems([...cartItems, productCart]);
    // setTotal(total + product.price);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, cartItems, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
