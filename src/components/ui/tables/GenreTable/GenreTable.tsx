import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import TableHeader from "./TableHeader";
import { isContinueStatement } from "typescript";

export default function GenreTable() {
  const [rows, setRows] = useState([
    { id: 1, genre: "Self Development", sales: 130, rentals: 451 },
    { id: 2, genre: "Action", sales: 97, rentals: 224 },
    { id: 3, genre: "Drama", sales: 81, rentals: 182 },
  ]);

  const [pageSize, setPageSize] = useState(2);
  const [page, setPage] = useState(0);
  const [sortingField, setSortingField] = useState("id");
  const [sortingDirection, setSortingDirection] = useState("asc");

  const handleSortClick = (e: any, field: any) => {
    const isAscendenting = sortingField == field && sortingDirection == "asc";
    setSortingField(field);
    setSortingDirection(isAscendenting ? "desc" : "asc");
  };

  const handlePageSizeChange = (e: any) => {
    const { value } = e.target;
    setPageSize(value);
    setPage(0);
  };

  const handlePageChange = (e: any, page: number) => {
    setPage(page);
  };

  const removeRow = (id: number) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Sure?")) {
      // await fetch("server_url", {
      //   method: "DELETE",
      // });
      setRows(rows.filter((m: any) => m.id == id));
    }
  };

  const sortRows = () => {
    const array = rows;
    for (var i = 0; i < rows.length; i++) {
      for (var j = i + 1; j < rows.length; j++) {
        const variableName =
          sortingField == "id"
            ? "id"
            : sortingField == "genre"
            ? "genre"
            : sortingField == "sales"
            ? "sales"
            : "rentals";
        if (sortingDirection == "asc") {
          if (array[i][variableName] > array[j][variableName]) {
            const aux = array[i];
            array[i] = array[j];
            array[j] = aux;
          }
        } else {
          if (array[i][variableName] < array[j][variableName]) {
            const aux = array[i];
            array[i] = array[j];
            array[j] = aux;
          }
        }
      }
    }
    return array;
  };

  return (
    <TableContainer>
      <Table>
        <TableHeader
          handleSortClick={handleSortClick}
          handlePageSizeChange={handlePageSizeChange}
          sortingField={sortingField}
          sortingDirection={sortingDirection}
        />
        {sortRows()
          .slice(page * pageSize, page * pageSize + pageSize)
          .map((row) => {
            return (
              <TableRow>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.genre}</TableCell>
                <TableCell>{row.sales}</TableCell>
                <TableCell>{row.rentals}</TableCell>
                <TableCell>
                  <a
                    onClick={() => removeRow(row.id)}
                    className="text-blue-400"
                  >
                    Remove Genre
                  </a>
                </TableCell>
              </TableRow>
            );
          })}
      </Table>
      <TablePagination
        count={rows.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handlePageSizeChange}
        page={page}
        rowsPerPage={pageSize}
        rowsPerPageOptions={[2, 5, 10, 15]}
      />
    </TableContainer>
  );
}
