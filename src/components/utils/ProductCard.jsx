import bifold_img from '../../assets/bifold section.jpg';
import React, { useState, useRef } from "react";

export default function PCard(props) {
    const [active, setActive] = useState('desc');
    function handleClick(t) {
        console.log(t.target.outerText);
        if (t.target.outerText === "TECHNICAL DATA") {
            setActive('tech')
        }
        else
            setActive('desc')
    }
    return (

        <div class='bg-[#444444] p-10 rounded-xl '>
            <div class=" ">
                <img src={bifold_img} class="w-full h-1/2" alt="" />
                <h1 className='text-white text-xl font-bold uppercase font-Poppins'>
                    {props.title}
                </h1>
            </div>

            <p className='line-clamp-3 text-justify text-white text-s justify font-Open-sans'>{props.descriptions[active]}</p>
            <ul className="p-2 flex gap-2 justify-evenly" >
                <li className='inline-block rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover: bg-slate-300 focus:bg-slate-100 focus:outline-none focus:ring-0 active:bg-slate-200' onClick={handleClick}>Description</li>
                <li className='inline-block rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover: bg-slate-300 focus:bg-slate-100 focus:outline-none focus:ring-0 active:bg-slate-200' onClick={handleClick}>Technical Data</li>

            </ul>
            {/* <button class=" hover:bg-white hover:text-black mx-auto px-4 py-1 font-bold text-white rounded-full border-orange-400 border-2">Read more about us &gt; </button> */}

        </div>


    );
}