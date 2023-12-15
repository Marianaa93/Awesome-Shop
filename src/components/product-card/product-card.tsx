import {
  Box,
  Card,
  Text,
  CardBody,
  CardFooter,
  Button,
  Divider,
  Image,
  Stack,
  Badge,
  CardHeader,
  useMediaQuery,
} from "@chakra-ui/react";
import { Product } from "../../types";
import { useCartContext } from "../../contexts/CartContext";

export const randomNumber = Math.floor(Math.random() * 1000);

export function ProductCard({ name, id, category, price }: Product) {
  const [isLargerThan767] = useMediaQuery("(min-width: 767px)");
  const { addToCart } = useCartContext();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "fiction":
        return "blue";
      case "non-fiction":
        return "green";
      case "science-fiction":
        return "purple";
      case "biography":
        return "orange";
      default:
        return "gray";
    }
  };

  function handleAddCart(id: number) {
    addToCart(id);
  }

  return (
    <Card
      display='flex'
      maxW='300px'
      w='400px'
      maxH='400px'
      boxShadow='xl'
      justifyContent='center'
      alignContent='center'
      border='0.5px solid #CDC5D9'
    >
      <CardHeader
        textAlign='center'
        fontWeight='semibold'
        fontSize='18px'
        paddingTop='5px 5px 5px 10px'
        h='100px'
        display='flex'
        justifyContent='center'
      >
        {name}
      </CardHeader>
      <Divider />
      <Badge
        alignSelf='start'
        mt='5px'
        fontSize='0.8em'
        w='fit-content'
        colorScheme={getCategoryColor(category)}
      >
        {category}
      </Badge>

      <CardBody w='100%'>
        <Stack
          display='flex'
          boxSize={{ base: "80px", md: "150px" }}
          borderRadius='md'
          overflow='hidden'
          position='relative'
          ml={isLargerThan767 ? "25%" : "35%"}
        >
          <Image
            src={`https://source.unsplash.com/800x600/?${encodeURIComponent(
              name
            )}&random=${randomNumber}`}
            alt={`${name}'s cover`}
            w={isLargerThan767 ? "120px" : "66px"}
            h={isLargerThan767 ? "140px" : "75px"}
            borderBottomRightRadius='1px'
            borderColor='#CDC5D9'
            objectFit='cover'
            position='absolute'
            left={isLargerThan767 ? "-3%" : "-1.5%"}
            boxShadow='md'
          />

          <Box
            position='absolute'
            top='0'
            left='0'
            right={isLargerThan767 ? "30px" : "10px"}
            bottom='0'
            borderRadius='md'
            background='linear-gradient(rgba(0.2,0.2,0,0.2 ), rgba(0.1,0,0.1,0.2))'
            zIndex={2}
          />
        </Stack>
      </CardBody>
      <Divider color='#CDC5D9' />
      <CardFooter
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        h='100px'
      >
        <Text
          textAlign='right'
          color='blue.600'
          fontSize='2xl'
        >
          ${price}
        </Text>
        <Button
          size='sm'
          variant='solid'
          backgroundColor={"#111111"}
          color='#ffffff'
          _hover={{
            backgroundColor: "#ffffff",
            color: "#111111",
            border: "1px solid #111111",
          }}
          onClick={() => handleAddCart(id)}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
