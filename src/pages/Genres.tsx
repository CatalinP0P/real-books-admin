import React from "react";
import Card from "../components/ui/Card";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function Genres() {
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
    </>
  );
}
