import React from "react";
import { Flex, Button } from "@chakra-ui/react";

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <Flex
      justify='center'
      mt='10'
      mb='10'
    >
      {pageNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          colorScheme={pageNumber === currentPage ? "blue" : "gray"}
          marginRight='2'
        >
          {pageNumber}
        </Button>
      ))}
    </Flex>
  );
};
