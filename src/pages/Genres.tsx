import React, { useState } from "react";
import Card from "../components/ui/Card";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import AddIcon from "@mui/icons-material/Add";
import Input from "../components/ui/forms/Input";
import Button from "../components/ui/Button";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import CustomTable from "../components/ui/tables/CustomTable/CustomTable";

export default function Genres() {
  const [rows, setRows] = useState([
    { id: 1, genre: "Drama", sales: 131, rentals: 413 },
    { id: 2, genre: "Action", sales: 213, rentals: 242 },
    { id: 3, genre: "Self Development", sales: 325, rentals: 161 },
  ]);

  const cols = [
    {
      title: "id",
      sortable: true,
    },
    {
      title: "genre",
      sortable: true,
    },
    {
      title: "sales",
      sortable: true,
    },
    {
      title: "rentals",
      sortable: true,
    },
  ];

  const removeRow = (id: number) => {
    if (window.confirm("Sure?")) setRows(rows.filter((m) => m.id != id));
  };

  const createSortHandler = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <Card
        title="Trending Genres this Month"
        icon={<TrendingUpIcon fontSize="large" />}
        className="col-span-2"
      >
        <ul className="text-xl text-neutral-400">
          <li className="w-full flex flex-row justify-between">
            <label>Personal Development</label>
            <label>164 Rentals</label>
          </li>

          <li className="w-full flex flex-row justify-between">
            <label>Action</label>
            <label>89 Rentals</label>
          </li>

          <li className="w-full flex flex-row justify-between">
            <label>Drama</label>
            <label>73 Rentals</label>
          </li>
        </ul>
      </Card>
      <Card title="Blank Card"></Card>
      <Card title="Blank Card"></Card>
      <Card
        title="Genres"
        className="col-span-2 flex flex-col gap-4"
        icon={<AddIcon fontSize="large" />}
      >
        <div className="grid grid-cols-2">
          <div />
          <div className="col-span-2 xl:col-span-1 flex flex-row justify-end">
            <Input
              name="genre"
              placeholder="Genre name..."
              className=" outline-none"
            />
            <Button variant="primary" className="h-full px-8" rounded={false}>
              Add
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-0 w-full bg-neutral-600 text-neutral-200">
          <CustomTable cols={cols} rows={rows} removeRow={removeRow} />
        </div>
      </Card>
    </>
  );
}
