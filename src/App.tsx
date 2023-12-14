import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./Layout/layout";
import { Home } from "./Pages/Home";
import "./style.css";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <CartProvider>
          <Home />
        </CartProvider>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
