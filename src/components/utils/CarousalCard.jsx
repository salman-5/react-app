import React from "react";

function CarousalCard({ title, imageUrl, desc }) {
  return (
    <div class="h-[550px] w-[4500px] justify-between  items-start flex flex-col  shadow-2xl  ">
      <img className="h-[350px]" src={imageUrl} alt="" />
      <h1>{title}</h1>
      {/* <p className="overflow-hidden">{desc}</p> */}
      <p className="">asd</p>

      <button>Read More</button>
    </div>
  );
}

export default CarousalCard;
