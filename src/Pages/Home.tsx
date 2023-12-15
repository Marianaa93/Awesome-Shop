import React, { useEffect, useState } from "react";
import { Box, Flex, Grid, Input, Select } from "@chakra-ui/react";
import { Header } from "../components/header";
import { ProductCard } from "../components/product-card/product-card";
import { Pagination } from "../components/pagination/pagination";
import { Product } from "./types";
import { api } from "../services/api";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    async function loadProducts() {
      try {
        const queryParams: Record<string, string | undefined> = {
          ...(searchTitle && { name_like: searchTitle }),
          ...(selectedCategory && { category: selectedCategory }),
          ...(selectedPrice && { price_lte: selectedPrice }),
          _page: String(currentPage),
          _limit: String(itemsPerPage),
        };

        const response = await api.get("/products", { params: queryParams });

        const totalCount = Number(response.headers["x-total-count"]);
        setTotalPages(Math.ceil(totalCount / itemsPerPage));

        const data: Product[] = response.data;
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    }

    loadProducts();
  }, [searchTitle, selectedCategory, selectedPrice, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

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
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
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
            <option value='20'>$0 - $20</option>
            <option value='40'>$20 - $40</option>
            <option value='50'>$40 - $50</option>
            <option value='60'>$50 +</option>
          </Select>
        </Flex>

        <Grid
          mt='48px'
          justifyItems='center'
          placeContent='center'
          templateColumns={{
            base: "repeat(2, 1/3)",
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

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Box>
    </div>
  );
}
