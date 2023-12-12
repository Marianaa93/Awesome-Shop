import React from "react";
import { Header } from "./components/header";
import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import { Layout } from "./Layout/layout";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Header />
        <Box
          as='main'
          padding='0 24px'
          marginTop='96px'
        >
          <Text>OI</Text>
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
