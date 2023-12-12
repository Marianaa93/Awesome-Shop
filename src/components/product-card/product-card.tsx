import {
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
} from "@chakra-ui/react";
import { Props } from "./types";

export function ProductCard({ name, src, category, price }: Props) {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={src}
          alt={`${name}'s cover`}
          borderRadius='lg'
        />
        <Stack
          mt='6'
          spacing='3'
        >
          <Heading size='md'>{category}</Heading>
          <Text>{name}</Text>
          <Text
            color='blue.600'
            fontSize='2xl'
          >
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button
            variant='solid'
            colorScheme='blue'
          >
            Buy now
          </Button>
          <Button
            variant='ghost'
            colorScheme='blue'
          >
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
