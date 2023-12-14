import React, { useState, ChangeEvent } from "react";
import { useCartContext } from "../../contexts/CartContext";
import { NumberInputProps } from "./types";
import { Button, ButtonGroup, Input } from "@chakra-ui/react";

export function NumberInput({ value, onUpdate, productId }: NumberInputProps) {
  const [inputValue, setInputValue] = useState<number>(value);
  const { removeFromCart } = useCartContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(Number(newValue));
  };

  const handleIncrement = () => {
    const newValue = inputValue + 1;
    setInputValue(newValue);
    onUpdate(newValue);
  };

  const handleDecrement = () => {
    const newValue = inputValue - 1;
    if (newValue >= 0) {
      setInputValue(newValue);
      onUpdate(newValue);
    }
    if (newValue === 0) {
      removeFromCart(productId);
    }
  };

  const handleBlur = () => {
    onUpdate(inputValue);
  };

  return (
    <ButtonGroup display='flex'>
      <Button
        color='black'
        variant='ghost'
        onClick={handleDecrement}
        border='none'
        _hover={{
          border: "1px solid #CDC5D9",
        }}
        _active={{ opacity: "0.3" }}
      >
        -
      </Button>
      <Input
        type='number'
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        w='50px'
      />
      <Button
        backgroundColor={"#111111"}
        color='#ffffff'
        _hover={{
          opacity: "0.8",
        }}
        onClick={handleIncrement}
      >
        +
      </Button>
    </ButtonGroup>
  );
}
