import { AddIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Button,
  Stack,
  Text,
  useDisclosure,
  IconButton,
  Divider,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { ShoppingCart } from "@phosphor-icons/react";
import React, { useState } from "react";
import { CardCart } from "../card-cart";
import { useCartContext } from "../../contexts/CartContext";

export function DrawerComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart, clearCart } = useCartContext();
  const [purchaseData, setPurchaseData] = useState({});

  const total = cart.reduce((sumTotal, product) => {
    sumTotal += product.price * product.amount;
    return sumTotal;
  }, 0);

  const totalQuantity = cart.reduce((sumQuantity, product) => {
    sumQuantity += product.amount;
    return sumQuantity;
  }, 0);

  const transformCartData = () => {
    const productList = cart.map((cartItem) => ({
      id: cartItem.id,
      name: cartItem.name,
      price: cartItem.price,
      amount: cartItem.amount,
    }));

    setPurchaseData({
      productList,
      totalPrice: total.toFixed(2),
    });

    const jsonString = JSON.stringify(purchaseData);
    console.log(jsonString);
    clearCart();
  };

  const handleFinishPurchase = () => {
    transformCartData();
    onClose();
  };

  return (
    <>
      <Flex>
        <IconButton
          aria-label={""}
          variant='ghost'
          backgroundColor='none'
          outline={0}
          _hover={{ opacity: "0.5", background: "none" }}
          _active={{ background: "none" }}
          onClick={onOpen}
          position='relative'
        >
          <ShoppingCart size='40px' />
        </IconButton>
        {cart.length > 0 && (
          <Badge
            position='absolute'
            borderRadius='50%'
            w='20px'
            textAlign='center'
            background='red'
            color='#ffff'
          >
            {totalQuantity}
          </Badge>
        )}
      </Flex>
      <Drawer
        size='md'
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>Cart</DrawerHeader>

          <DrawerBody
            display='flex'
            flexDir='column'
            justifyContent='space-between'
          >
            <Stack spacing='24px'>
              <Box>
                <Text
                  fontSize='lg'
                  fontWeight={"500"}
                >
                  Summary
                </Text>
              </Box>
              {cart.map((cartItem) => (
                <CardCart
                  key={cartItem.id}
                  name={cartItem.name}
                  price={cartItem.price}
                  id={cartItem.id}
                  category={""}
                  image={""}
                  amount={cartItem.amount}
                />
              ))}
            </Stack>
            <Divider />
            <Text
              fontSize='20px'
              fontWeight='500'
              alignSelf='baseline'
            >
              Total:${total.toFixed(2)}
            </Text>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button
              w='100%'
              size='lg'
              backgroundColor={"#111111"}
              color='#ffffff'
              onClick={handleFinishPurchase}
              _hover={{
                backgroundColor: "#ffffff",
                color: "#111111",
                border: "1px solid #111111",
              }}
            >
              Finish Purchase
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
