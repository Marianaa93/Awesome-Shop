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
  selectedProduct: ProductProps | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<ProductProps | null>>;
};
