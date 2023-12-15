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
import CompletedPurchaseModal from "../completed-purchase-modal/completed-purchase-modal";

interface PurchaseData {
  productList: Product[];
  totalPrice: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}

export function DrawerComponent() {
  const [isCompletedPurchaseModalOpen, setCompletedPurchaseModalOpen] =
    useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart, clearCart } = useCartContext();
  const [purchaseData, setPurchaseData] = useState<PurchaseData>();

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

    const totalPrice = total.toFixed(2);

    setPurchaseData({ productList, totalPrice });

    const jsonString = JSON.stringify({ productList, totalPrice });
    console.log(jsonString);
  };
  const openCompletedPurchaseModal = () => {
    setCompletedPurchaseModalOpen(true);
  };

  const closeCompletedPurchaseModal = () => {
    setCompletedPurchaseModalOpen(false);
  };

  const handleFinishPurchase = () => {
    transformCartData();
    clearCart();
    openCompletedPurchaseModal();
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
            <Stack
              spacing='24px'
              maxH='100%'
              overflowY='auto'
            >
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
          </DrawerBody>
          <Divider />
          <Text
            m='10px 0 0 30px'
            fontSize='20px'
            fontWeight='500'
            alignSelf='baseline'
          >
            Total:${total.toFixed(2)}
          </Text>

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
              isDisabled={cart.length === 0}
            >
              Finish Purchase
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {isCompletedPurchaseModalOpen && (
        <CompletedPurchaseModal
          productList={purchaseData.productList}
          totalPrice={purchaseData.totalPrice}
          onClose={closeCompletedPurchaseModal}
        />
      )}
    </>
  );
}
