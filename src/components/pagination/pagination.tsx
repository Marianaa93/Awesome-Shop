import React from "react";
import { PaginationProps } from "./types";

const Pagination = ({ totalPages, onPageChange }: PaginationProps) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div>
      <h2>Pagination</h2>
      <ul>
        {pageNumbers.map((page) => (
          <li key={page}>
            <button onClick={() => onPageChange(page)}>{page}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
