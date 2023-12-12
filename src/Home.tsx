import { Box, Grid, Text } from "@chakra-ui/react";
import { Header } from "./components/header";
import { ProductCard } from "./components/product-card/product-card";
import Pagination from "./components/pagination/pagination";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Whispers of Eternity",
    price: 20,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 2,
    name: "Chronicles of the Silver Serpent",
    price: 45.99,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 3,
    name: "The Enigma of Nebula's Veil",
    price: 32,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 4,
    name: "Echoes in the Shadows",
    price: 99.99,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 5,
    name: "The Labyrinth of Dreams",
    price: 120,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 6,
    name: "The Art of Mindful Living",
    price: 25.5,
    category: "non-fiction",
    image: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 7,
    name: "Exploring Quantum Realities",
    price: 79.99,
    category: "non-fiction",
    image: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 8,
    name: "From Pixels to Paint: The Digital Art Revolution",
    price: 200,
    category: "non-fiction",
    image: "https://source.unsplash.com/random/800x600",
  },
];
export function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalItems = products.length;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <Header />
      <Box
        as='main'
        height='100px'
        padding='0 100px'
        marginTop='96px'
        marginBottom='200px'
        display='flex'
        flexDirection='column'
        alignContent='center'
      >
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={8}
        >
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              src={product.image}
            />
          ))}
        </Grid>
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={onPageChange}
        />
      </Box>
    </>
  );
}
