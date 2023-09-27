import bifold_img from "../../assets/bifold section.jpg";
import React, { useState } from "react";

export default function PCard(props) {
  const [active, setActive] = useState("desc");
  function handleClick(t) {
    console.log(t.target.outerText);
    if (t.target.outerText === "TECHNICAL DATA") {
      setActive("tech");
    } else setActive("desc");
  }
  return (
    <div className="bg-[#444444] h-full p-5 rounded-xl flex flex-col">
      <div className="h-1/2">
        <img src={bifold_img} className="w-full h-full rounded-t-xl " alt="" />
      </div>
      <h1 className="text-white text-xl font-bold uppercase font-Poppins pt-2">
        {props.title}
      </h1>
      <div className="flex flex-col justify-between pt-3 grow">
        <div className="line-clamp-3 text-justify text-white text-s justify font-Open-sans">
          {props.descriptions[active]}
        </div>
      </div>

      <div className="">
        <ul className="p-2 flex gap-2 justify-evenly">
          <li
            className="inline-block rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover: bg-slate-300 focus:bg-slate-100 focus:outline-none focus:ring-0 active:bg-slate-200"
            onClick={handleClick}
          >
            Description
          </li>
          <li
            className="inline-block rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover: bg-slate-300 focus:bg-slate-100 focus:outline-none focus:ring-0 active:bg-slate-200"
            onClick={handleClick}
          >
            Technical Data
          </li>
        </ul>
      </div>
    </div>
  );
}
