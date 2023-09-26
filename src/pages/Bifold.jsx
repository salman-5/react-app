import React from "react";
import Bifold from '../components/sections/Bifold'
import { bifold_data } from "../backend data/bifold_data";
import PageCard from "../components/utils/pages-card";

function Bifold_page() {
  return (
  <>
    <Bifold/>
    <div className='space-y-2 p-2 '>
      {bifold_data.map((data, index) => 
        <PageCard title={data["product-name"]} description={data.description} images={data.images} technical={data}/>
        
        )}
    </div>
        </>
      

  );
}

export default Bifold_page;
