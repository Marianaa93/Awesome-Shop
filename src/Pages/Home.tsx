import { Box, Button, Flex, Grid, Input, Select } from "@chakra-ui/react";
import { Header } from "../components/header";
import { ProductCard } from "../components/product-card/product-card";
import { useEffect, useState } from "react";
import { Product } from "./types";

const BASE_URL =
  "https://my-json-server.typicode.com/guilhermekuni/fake-products-api";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Flex flexDir='column'>
      <Header />

      <Box
        as='main'
        height='100px'
        padding='0 100px'
        marginTop='36px'
        marginBottom='200px'
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
          width='100%' // Defina a largura para ocupar 100% do container
          boxSizing='border-box' // Certifique-se de que a largura inclua padding e borda
        >
          <Input
            flex='1' // Faça o Input ocupar todo o espaço disponível
            border='1px solid #CDC5D9'
            lineHeight='37px'
            textAlign='left'
          />
          <Select
            flex='1' // Faça o Select ocupar todo o espaço disponível
            border='1px solid #CDC5D9'
            lineHeight='37px'
            textAlign='left'
          />
          <Select
            flex='1' // Faça o Select ocupar todo o espaço disponível
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
          mt='20px'
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap='25px'
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              src={product.image}
            />
          ))}
        </Grid>
      </Box>
    </Flex>
  );
}
