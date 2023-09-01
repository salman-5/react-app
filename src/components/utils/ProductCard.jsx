import bifold_img from '../../assets/bifold section.jpg';
import React, { useState, useRef } from "react";

export default function PCard(props) {

  const [active, setActive] = useState("desc");
  function handleClick(t) {
    console.log(t.target.outerText);
    if (t.target.outerText === "TECHNICAL DATA") {
      setActive("tech");
    } else setActive("desc");
  }
  return (
    <div class="bg-[#444444] h-full p-5 rounded-xl flex flex-col">
      <div class="h-1/2">
        <img src={bifold_img} class="w-full h-full rounded-t-xl " alt="" />
      </div>
      <h1 className="text-white text-xl font-bold uppercase font-Poppins pt-2">
        {props.title}
      </h1>
      <div className="flex flex-col justify-between pt-3 grow">
        <div className="line-clamp-3 text-justify text-white text-s justify font-Open-sans">
          {props.descriptions[active]}
        </div>
        </div>
    );
}