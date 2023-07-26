import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import React from "react";

export default function TableHeader(props: any) {
  const {
    handlePageSizeChange,
    handleSortClick,
    sortingField,
    sortingDirection,
  } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <TableSortLabel
            style={{ color: "white", fontWeight: "bold", opacity: ".6" }}
            active={sortingField == "id"}
            direction={sortingField == "id" ? sortingDirection : "asc"}
            onClick={(e) => handleSortClick(e, "id")}
          >
            Id
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            style={{ color: "white", fontWeight: "bold", opacity: ".6" }}
            active={sortingField == "genre"}
            direction={sortingField == "genre" ? sortingDirection : "asc"}
            onClick={(e) => handleSortClick(e, "genre")}
          >
            Genre
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            style={{ color: "white", fontWeight: "bold", opacity: ".6" }}
            active={sortingField == "sales"}
            direction={sortingField == "sales" ? sortingDirection : "asc"}
            onClick={(e) => handleSortClick(e, "sales")}
          >
            Sales
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            style={{ color: "white", fontWeight: "bold", opacity: ".6" }}
            active={sortingField == "rentals"}
            direction={sortingField == "rentals" ? sortingDirection : "asc"}
            onClick={(e) => handleSortClick(e, "rentals")}
          >
            Rentals
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            style={{ color: "white", fontWeight: "bold", opacity: ".6" }}
          >
            Remove
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
