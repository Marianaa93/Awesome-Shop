import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./Layout/layout";
import { Home } from "./Home";

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
