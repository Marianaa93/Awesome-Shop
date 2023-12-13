import { Box, Flex, Stack, Image, Text, IconButton } from "@chakra-ui/react";
import { randomNumber } from "../product-card/product-card";
import { NumberInput } from "../../UI/number-input";
import { Trash } from "@phosphor-icons/react";
import { CartItemsProps } from "../../contexts/ProductContextProps";
import { useProductContext } from "../../contexts/ProductContext";

export function CardCart({ name, price, id }: CartItemsProps) {
  const { removeFromCart } = useProductContext();
  return (
    <Flex
      boxShadow='lg'
      padding='10px'
      borderRadius='15px'
      alignItems='center'
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
        <Flex
          flexDir='row'
          justifyContent='space-between'
        >
          <NumberInput />
          <IconButton
            onClick={() => removeFromCart(id)}
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
