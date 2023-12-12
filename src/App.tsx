import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./Layout/layout";
import { Home } from "./Pages/Home";
import "./style.css";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Home />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
