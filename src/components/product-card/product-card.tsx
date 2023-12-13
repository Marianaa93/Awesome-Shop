import {
  Box,
  Card,
  Text,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Image,
  Stack,
  Badge,
  CardHeader,
} from "@chakra-ui/react";
import { Props } from "./types";
const randomNumber = Math.floor(Math.random() * 1000);

export function ProductCard({ name, src, category, price }: Props) {
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

  return (
    <Card
      display='flex'
      maxW='300px'
      w='300px'
      h='350px'
      boxShadow='md'
      justifyContent='center'
    >
      <CardHeader
        textAlign='center'
        fontWeight='semibold'
        fontSize='18px'
      >
        {name}
      </CardHeader>
      <Badge
        fontSize='0.8em'
        w='fit-content '
        colorScheme={getCategoryColor(category)}
      >
        {category}
      </Badge>

      <CardBody
        w='100%'
        backgroundColor='#F4F6F6'
      >
        <Stack
          display='flex'
          boxSize={{ base: "80px", md: "150px" }}
          borderRadius='md'
          overflow='hidden'
          position='relative'
          ml='25%'
        >
          <Image
            src={`https://source.unsplash.com/800x600/?${encodeURIComponent(
              name
            )}&random=${randomNumber}`}
            alt={`${name}'s cover`}
            w='120px'
            h='95%'
            borderBottomRightRadius='1px'
            borderColor='#CDC5D9'
            objectFit='cover'
            position='absolute'
            left='-2.5%'
          />

          <Box
            position='absolute'
            top='0'
            left='0'
            right='20px'
            bottom='0'
            borderRadius='md'
            background='linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))' // Gradiente simulando sombra
            zIndex={2}
          />
        </Stack>
      </CardBody>
      <Divider color='#CDC5D9' />
      <CardFooter
        display='flex'
        justifyContent='space-between'
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
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
