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
} from "@chakra-ui/react";
import { ShoppingCart, ShoppingCartSimple } from "@phosphor-icons/react";
import React from "react";

export function DrawerComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <IconButton
        colorScheme='teal'
        aria-label={""}
        onClick={onOpen}
      >
        <ShoppingCart />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement='right'
        // initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>Cart</DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <Text>teste</Text>
              </Box>
              <Box></Box>
            </Stack>
            <Text>Total: $200</Text>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button
              w='100%'
              colorScheme='red'
            >
              Finish Purchase
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
