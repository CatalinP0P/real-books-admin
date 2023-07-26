import React, { useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import CustomTable, {
  TableColProps,
} from "../components/ui/tables/CustomTable/CustomTable";
import Input from "../components/ui/forms/Input";

export default function Authors() {
  const [rows, setRows] = useState([
    { id: 1, name: "James Clear", sales: 140, rentals: 314 },
    { id: 2, name: "David Goggins", sales: 97, rentals: 265 },
    { id: 3, name: "Ion Creanga", sales: 90, rentals: 120 },
  ]);

  const cols: TableColProps[] = [
    { title: "id", sortable: true },
    { title: "name", sortable: true },
    { title: "sales", sortable: true },
    { title: "rentals", sortable: true },
  ];

  const removeRow = (id: number) => {
    if (window.confirm("Sure?")) setRows(rows.filter((m) => m.id != id));
  };

  return (
    <>
      <Card title="Authors" className="col-span-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div />
          <div className="flex flex-row">
            <Input placeholder="Author Name" />
            <Button variant="primary" className="px-8" rounded={false}>
              Add
            </Button>
          </div>
        </div>
        <CustomTable removeRow={removeRow} rows={rows} cols={cols} />
      </Card>
    </>
  );
}
