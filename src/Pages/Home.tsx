import React, { useEffect, useState } from "react";
import { Box, Flex, Grid, Input, Select } from "@chakra-ui/react";
import { Header } from "../components/header";
import { ProductCard } from "../components/product-card/product-card";
import { Product } from "./types";
import { api } from "../services/api";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTittle, setSearchTittle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        let queryParams: Record<string, string | undefined> = {};

        if (searchTittle) {
          queryParams.name_like = searchTittle;
        }

        if (selectedCategory) {
          queryParams.category = selectedCategory;
        }

        if (selectedPrice) {
          if (selectedPrice.includes("-")) {
            const [min, max] = selectedPrice.split("-");
            queryParams.price_gte = min;
            queryParams.price_lte = max;
          } else {
            queryParams.price_eq = selectedPrice;
          }
        }

        const response = await api.get("/products", { params: queryParams });
        const data: Product[] = response.data;
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    }

    loadProducts();
  }, [searchTittle, selectedCategory, selectedPrice]);

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
        justifySelf='center'
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
            placeholder='Search by name...'
            value={searchTittle}
            onChange={(e) => setSearchTittle(e.target.value)}
          />
          <Select
            flex='3'
            border='1px solid #CDC5D9'
            lineHeight='37px'
            textAlign='left'
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value=''>All Categories</option>
            <option value='fiction'>Fiction</option>
            <option value='non-fiction'>Non-Fiction</option>
            <option value='biography'>Biography</option>
            <option value='science-fiction'>Science-Fiction</option>
          </Select>
          <Select
            flex='3'
            border='1px solid #CDC5D9'
            lineHeight='37px'
            textAlign='left'
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            <option value=''>Select Price Range</option>
            <option value='0-20'>$0 - $20</option>
            <option value='20-40'>$20 - $40</option>
            <option value='40-50'>$40 - $50</option>
            <option value='51-200'>$50 +</option>
          </Select>
        </Flex>

        <Grid
          mt='48px'
          justifyItems='center'
          placeContent='center'
          templateColumns={{
            base: "repeat(2, 300px)",
            md: "repeat(4, 300px)",
          }}
          gap='96px'
        >
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              id={product.id}
              amount={product.amount}
            />
          ))}
        </Grid>
      </Box>
    </div>
  );
}
