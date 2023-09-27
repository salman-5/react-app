import React from "react";
import PageCard from "../components/utils/pages-card";
import { sliding_data } from "../backend data/sliding_data";

export default function SlidingDoor() {
  return (
    <div className="space-y-2 p-2 ">
      {sliding_data.map((data, index) => (
        <PageCard
          key={index}
          title={data["product-name"]}
          description={data.description}
          images={data.images}
          technical={data}
        />
      ))}
    </div>
  );
}
