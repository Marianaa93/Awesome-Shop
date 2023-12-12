import React, { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";
import { PaginationProps } from "./types";

const Pagination = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <HStack
      spacing={2}
      mt={5}
      alignSelf={"center"}
    >
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
      >
        Anterior
      </Button>
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          colorScheme={currentPage === index + 1 ? "teal" : "gray"}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
      >
        Próximo
      </Button>
    </HStack>
  );
};

export default Pagination;
