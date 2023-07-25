import React from "react";
import HandshakeIcon from "@mui/icons-material/Handshake";
import KeyIcon from "@mui/icons-material/Key";
import PeopleIcon from "@mui/icons-material/People";
import Card from "../components/ui/Card";

export default function Overview() {
  return (
    <>
      <Card icon={<HandshakeIcon fontSize="large" />} title="Sales this month">
        <label className="text-4xl font-bold text-neutral-400">321</label>
      </Card>

      <Card icon={<KeyIcon fontSize="large" />} title="Rents this month">
        <label className="text-4xl font-bold text-neutral-400">632</label>
      </Card>

      <Card
        className="col-span-2"
        icon={<PeopleIcon fontSize="large" />}
        title="Visitors"
      >
        <label className="text-4xl font-bold text-neutral-400">12.300</label>
      </Card>
    </>
  );
}
