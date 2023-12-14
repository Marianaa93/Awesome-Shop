import { Box, Flex, Stack, Image, Text, IconButton } from "@chakra-ui/react";
import { randomNumber } from "../product-card/product-card";
import { Trash } from "@phosphor-icons/react";
import { useCartContext } from "../../contexts/CartContext";
import { Product } from "../../types";
import { UpdateProductAmount } from "../../contexts/CartContextProps";
import { NumberInput } from "../../UI/number-input";

export function CardCart({ name, price, id, amount }: Product) {
  const { removeFromCart, updateProductAmount } = useCartContext();

  function handleRemoveProduct(productId: number) {
    removeFromCart(productId);
  }

  function handleUpdateAmount(newAmount: number) {
    const updatedProduct: UpdateProductAmount = {
      productId: id,
      amount: newAmount,
    };
    updateProductAmount(updatedProduct);
  }
  return (
    <Flex
      boxShadow='lg'
      padding='10px'
      borderRadius='15px'
      alignItems='flex-start'
    >
      <Stack
        display='flex'
        boxSize={{ base: "70px", md: "100px" }}
        borderRadius='md'
        overflow='hidden'
        position='relative'
      >
        <Image
          src={`https://source.unsplash.com/800x600/?${encodeURIComponent(
            name
          )}&random=${randomNumber}`}
          alt={`book's cover`}
          w='70px'
          h='95%'
          borderBottomRightRadius='1px'
          borderColor='#CDC5D9'
          objectFit='cover'
          position='absolute'
          left='-2.5%'
          boxShadow={"md"}
        />

        <Box
          position='absolute'
          top='0'
          left='0'
          right='30px'
          bottom='0'
          borderRadius='md'
          background='linear-gradient(rgba(0.2,0.2,0,0.2 ), rgba(0.1,0,0.1,0.2))'
          zIndex={2}
        />
      </Stack>
      <Flex
        flexDir='column'
        flex={1}
        gap={2}
      >
        <Text>{name}</Text> <Text>${price}</Text>
        <Text>Quantity:{amount}</Text>
        <Flex
          flexDir='row'
          justifyContent='space-between'
        >
          <NumberInput
            value={amount}
            onUpdate={handleUpdateAmount}
            productId={id}
          />
          <IconButton
            onClick={() => handleRemoveProduct(id)}
            colorScheme='red'
            mr='20px'
            background='none'
            aria-label='Trash Icon'
            _hover={{ transform: "scale(1.5)" }}
            _active={{ background: "none" }}
          >
            <Trash
              color='red'
              size='20px'
            />
          </IconButton>
        </Flex>
      </Flex>
    </Flex>
  );
}
