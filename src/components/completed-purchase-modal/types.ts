export interface ModalProps {
  onClose: () => void;
}

export interface CompletedPurchaseModalProps extends ModalProps {
  purchaseSummary: PurchaseData;
}
export interface PurchaseData {
  productList: Array<{
    id: number;
    name: string;
    price: number;
    amount: number;
  }>;
  totalPrice: string;
}
