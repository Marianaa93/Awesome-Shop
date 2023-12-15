export interface ModalProps {
  onClose: () => void;
}

export interface CompletedPurchaseModalProps extends ModalProps {
  purchaseSummary: PurchaseData;
}

export type ProductData = {
  id: number;
  name: string;
  price: number;
  amount: number;
};

export interface PurchaseData {
  productList: ProductData[];
  totalPrice: string;
}
