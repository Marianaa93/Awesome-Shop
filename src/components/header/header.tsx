import { Box, Image } from "@chakra-ui/react";
import { DrawerComponent } from "../drawer/drawer";
import logo from "../../assets/logo.png";

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
      <Image
        src={logo}
        height='50px'
        alt='Awesome store logo'
      />
      <DrawerComponent />
    </Box>
  );
}
