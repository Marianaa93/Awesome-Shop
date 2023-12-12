import { Box, Text } from "@chakra-ui/react";
import { DrawerComponent } from "../drawer/drawer";

export function Header() {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      backgroundColor='#ffff'
      boxShadow={"lg"}
      width='100%'
      padding='0 24px'
      height='64px'
    >
      <Text
        fontWeight='bold'
        color=''
      >
        Awesome Shop
      </Text>
      <DrawerComponent />
    </Box>
  );
}
