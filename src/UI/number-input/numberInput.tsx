import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";

export function NumberInput() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 50,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW='150px'>
      <Button
        outline={0}
        background='none'
        {...dec}
      >
        -
      </Button>
      <Input {...input} />
      <Button
        outline={0}
        background='none'
        {...inc}
      >
        +
      </Button>
    </HStack>
  );
}
