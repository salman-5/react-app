import React from "react";
import PageCard from "../components/utils/pages-card";
import data from "../backend data/bifold_data.json";
import { mill_data } from "../backend data/mill_data";

function MilleniumDoor() {
  return (
    <div className="space-y-2 p-2 ">
      {mill_data.map((data, index) => (
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

export default MilleniumDoor;
