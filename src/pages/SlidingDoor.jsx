import React from "react";
import PageCard from "../components/utils/pages-card";
import data from '../backend data/bifold_data.json'
import { sliding_data } from "../backend data/sliding_data";

export default function SlidingDoor() {
  // for(var i in data){
  //   var key = i;
  //   var val = data[i];
  //   for(var j in val){
  //       var sub_key = j;
  //       var sub_val = val[j];
  //       console.log(sub_key);
  //   }
  // console.log(sliding_data);
  // sliding_data.map((key1, index) => {
  //   for (var i in key1) {
  //     var key = i;
  //     var val = key1[i];
  //     console.log(key);
  //     for (var j in val) {
  //       var sub_key = j;
  //       var sub_val = val[j];
  //       // console.log(sub_key);
  //     }
  //   }
  // })

  return (
    <div className='space-y-2 p-2 '>

      {sliding_data.map((data, index) =>
        <PageCard title={data["product-name"]} description={data.description} images={data.images} technical={data} />

      )}
    </div>
  );
}

