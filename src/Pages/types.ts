export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  amount: number;
}

export interface CartItemsAmount {
  [key: number]: number;
}
