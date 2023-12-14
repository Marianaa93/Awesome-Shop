import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
import { Product } from "../../types";
import { useCartContext } from "../../contexts/CartContext";

export function NumberInput() {
  const { updateProductAmount } = useCartContext();

  function handleIncrease(product: Product) {
    const IncrementArguments = {
      productId: product.id,
      amount: product.amount + 1,
    };
    updateProductAmount(IncrementArguments);
  }

  function handleDecrease(product: Product) {
    const IncrementArguments = {
      productId: product.id,
      amount: product.amount - 1,
    };
    updateProductAmount(IncrementArguments);
  }

  return (
    <HStack maxW='150px'>
      <Button
        outline={0}
        background='none'
        // onClick={() => handleDecrease(product)}
      >
        -
      </Button>
      <Input />
      <Button
        outline={0}
        background='none'
        // onClick={() => handleIncrease(product)}
      >
        +
      </Button>
    </HStack>
  );
}
