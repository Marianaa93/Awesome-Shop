import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Text,
  ModalBody,
  ModalFooter,
  Flex,
  Box,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { ModalProps, ProductData } from "./types";
import { CheckCircle } from "@phosphor-icons/react";

type CompletedPurchaseModalProps = ModalProps & {
  productList: ProductData[];
  totalPrice: string;
};

export default function CompletedPurchaseModal({
  onClose,
  productList,
  totalPrice,
}: CompletedPurchaseModalProps) {
  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        size='lg'
        isOpen
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Summary</ModalHeader>
          <ModalCloseButton
            _hover={{ transform: "scale(1.5)" }}
            _active={{ background: "none" }}
          />
          <ModalBody>
            <Flex
              direction='column'
              align='center'
            >
              <CheckCircle
                color='green'
                size={60}
              />
              <Text
                fontSize='lg'
                fontWeight='bold'
                mt={4}
              >
                Thanks for your purchase
              </Text>
              <Box mt={4}>
                {productList.map((product) => (
                  <Flex
                    key={product.id}
                    justifyContent='space-between'
                    borderBottom='1px solid #ccc'
                    py={2}
                    gap={20}
                  >
                    <Text>{product.name}</Text>
                    <Text>
                      {product.amount}x R$ {product.price}
                    </Text>
                  </Flex>
                ))}
              </Box>
              <Text
                mt={4}
                fontSize='lg'
                fontWeight='bold'
              >
                Total: R$ {totalPrice}
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              bg='#11111'
              onClick={onClose}
              color='#fffff'
              _hover={{ bg: "none", border: "1px solid", color: "#11111" }}
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
