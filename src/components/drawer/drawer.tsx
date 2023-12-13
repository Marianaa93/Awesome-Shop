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
} from "@chakra-ui/react";
import { ShoppingCart } from "@phosphor-icons/react";
import React from "react";
import { CardCart } from "../card-cart";
import { useProductContext } from "../../contexts/ProductContext";

export function DrawerComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartItems } = useProductContext();

  return (
    <>
      <IconButton
        aria-label={""}
        variant='ghost'
        backgroundColor='none'
        outline={0}
        _hover={{ transform: "scale(1.5)", background: "none" }}
        _active={{ background: "none" }}
        onClick={onOpen}
      >
        <ShoppingCart size='40px' />
      </IconButton>
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
              {cartItems.map((cartItem) => (
                <CardCart
                  key={cartItem.id}
                  name={cartItem.name}
                  price={cartItem.price}
                  id={cartItem.id}
                />
              ))}
            </Stack>
            <Divider />
            <Text
              fontSize='20px'
              fontWeight='500'
              alignSelf='baseline'
            >
              Total: $200
            </Text>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button
              w='100%'
              size='lg'
              backgroundColor={"#111111"}
              color='#ffffff'
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
