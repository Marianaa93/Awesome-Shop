import React, { createContext, useContext, useState, useEffect } from "react";
import { ProductProps, ProductContextProps } from "./ProductContextProps";

const ProductContext = createContext<ProductContextProps>({
  products: [],
  selectedProduct: null,
  setSelectedProduct: () => {},
});

export function ProductProvider({ children }: React.PropsWithChildren<{}>) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(
    null
  );

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

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, selectedProduct, setSelectedProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
