import { Box, Button, Flex, Grid, Input, Select } from "@chakra-ui/react";
import { Header } from "../components/header";
import { ProductCard } from "../components/product-card/product-card";
import { useEffect, useState } from "react";
import { Product } from "./types";
import { useProductContext } from "../contexts/ProductContext";

const BASE_URL =
  "https://my-json-server.typicode.com/guilhermekuni/fake-products-api";

export function Home() {
  const { products } = useProductContext();
  return (
    <div>
      <Header />

      <Box
        as='main'
        marginTop='36px'
        marginBottom='0'
        display='flex'
        flexDirection='column'
        alignContent='center'
        justifySelf={"center"}
      >
        <Flex
          boxShadow='md'
          padding='10px'
          gap={2}
          border='0.5px solid #CDC5D9'
          width='75%'
          placeSelf='center'
        >
          <Input
            flex='11'
            border='1px solid #CDC5D9'
            lineHeight='37px'
            textAlign='left'
          />
          <Select
            flex='3'
            border='1px solid #CDC5D9'
            lineHeight='37px'
            textAlign='left'
          >
            <option value=''>Category</option>
            <option value='fiction'>Fiction</option>
            <option value='nonFiction'>Non-Fiction</option>
            <option value='biography'>Biography</option>
            <option value='scienceFiction'>Science-Fiction</option>
          </Select>
          <Select
            flex='3'
            border='1px solid #CDC5D9'
            lineHeight='37px'
            textAlign='left'
          />
          <Button
            padding='16px 32px'
            backgroundColor='#111111'
            color='#ffffff'
            _hover={{ backgroundColor: "#2a2a2a", opacity: "0.8" }}
          >
            Search
          </Button>
        </Flex>

        <Grid
          mt='48px'
          justifyItems='center'
          placeContent={"center"}
          templateColumns={{ base: "repeat(2, 300px)", md: "repeat(4, 300px)" }}
          gap='96px'
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              id={product.id}
            />
          ))}
        </Grid>
      </Box>
    </div>
  );
}
