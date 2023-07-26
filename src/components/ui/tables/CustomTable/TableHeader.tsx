import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import React from "react";
import { TableColProps } from "./CustomTable";

export default function TableHeader(props: any) {
  const {
    cols,
    removeRow,
    handlePageSizeChange,
    handleSortClick,
    sortingField,
    sortingDirection,
  } = props;

  return (
    <TableHead>
      <TableRow>
        {cols.map((col: TableColProps) => (
          <TableCell>
            {col.sortable ? (
              <TableSortLabel
                style={{ color: "white", fontWeight: "bold", opacity: ".6" }}
                active={sortingField == col.title}
                className="first-letter:uppercase"
                direction={sortingField == col.title ? sortingDirection : "asc"}
                onClick={(e) => handleSortClick(e, col.title)}
              >
                <label className=" first-letter:uppercase">{col.title}</label>
              </TableSortLabel>
            ) : (
              <label className="first-letter:uppercase">{col.title}</label>
            )}
          </TableCell>
        ))}
        {removeRow && (
          <TableCell
            style={{ color: "white", fontWeight: "bold", opacity: ".6" }}
          >
            Remove
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  );
}
