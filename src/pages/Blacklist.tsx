import React, { useState } from "react";
import Card from "../components/ui/Card";
import CustomTable, {
  TableColProps,
} from "../components/ui/tables/CustomTable/CustomTable";

export default function Blacklist() {
  const cols: TableColProps[] = [
    {
      title: "id",
      sortable: true,
    },
    {
      title: "email",
      sortable: true,
    },
    {
      title: "reason",
      sortable: false,
    },
  ];

  const [rows, setRows] = useState([
    { id: "dsajf9h3jebra0f", email: "catalinpce@gmail.com", reason: "Spam" },
    { id: "fadsfhu81g412yu", email: "john@gmail.com", reason: "Bad Language" },
    { id: "fa782j3obudu2jd", email: "max@gmail.com", reason: "Spam" },
  ]);

  const removeRow = (id: string) => {
    if (window.confirm("Sure?")) setRows(rows.filter((m) => m.id != id));
  };

  return (
    <>
      <Card title="Users on blacklist" className="col-span-full">
        <CustomTable rows={rows} cols={cols} removeRow={removeRow} />
      </Card>
    </>
  );
}
