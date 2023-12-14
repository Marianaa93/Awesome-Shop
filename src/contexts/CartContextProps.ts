import { ReactNode } from "react";
import { Product } from "../types";

export interface CartProviderProps {
  children: ReactNode;
}

export interface UpdateProductAmount {
  productId: number;
  amount: number;
}
export interface CartContextProps {
  cart: Product[];
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}
