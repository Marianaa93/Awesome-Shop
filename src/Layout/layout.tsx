import { Box } from "@chakra-ui/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      backgroundColor='#FFFF'
      display='Flex'
      flexDirection='column'
      w='100%'
      minHeight='100vh'
    >
      {children}
    </Box>
  );
}
