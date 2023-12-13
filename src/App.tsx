import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./Layout/layout";
import { Home } from "./Pages/Home";
import "./style.css";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <ProductProvider>
          <Home />
        </ProductProvider>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
