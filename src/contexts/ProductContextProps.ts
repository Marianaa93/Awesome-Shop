import { Product } from "../Pages/types";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

export type ProductContextProps = {
  products: ProductProps[];
  cartItems: CartItemsProps[];
  addToCart: (productCart: CartItemsProps) => void;
  removeFromCart: (id: number) => void;
};
export type CartItemsProps = {
  id: number;
  name: string;
  price: number;
};
