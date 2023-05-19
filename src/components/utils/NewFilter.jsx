import React, { useEffect, useState } from "react";
import { images, btns } from "../Data";

const Filter = () => {
  const [filterImages, setFilterImages] = useState(null);
  const [active, setActive] = useState(false);
  console.log(filterImages);

  useEffect(() => {
    setFilterImages(images);
  }, []);

  const handleClick = (e) => {
    const btnValue = e.target.value;
    setActive(btnValue);
    const newFilterImages = images.filter((item) => item.category === btnValue);
    if (btnValue === "all") {
      setFilterImages(images);
    } else {
      setFilterImages(newFilterImages);
    }
  };

  const fullScreen = (e) =>{

    console.log(e);
  };

  return (
    <div className="wrapper p-8">
      {/* heading */}
      <h1 className="text-5xl text-center font-bold text-primary mb-10">
        Gallery
      </h1>

      {/* button */}
      <div className="grid grid-cols-3 md:grid-cols-6 mb-10 gap-5">
        {btns.map((item, id) => {
          const { name, value } = item;
          return (
            <button
              onClick={handleClick}
              key={id}
              value={value}
              className={`${
                active === value ? "bg-black" : ""
              } py-3 px-5 inline-block rounded-full border-[3px] transition-all duration-300 hover:bg-gray-400 border-solid border-fourth text-sm  md:text-lg font-semibold text-white`}
            >
              {name}
            </button>
          );
        })}
      </div>

      {/* images */}
      <div className="grid md:grid-cols-3 gap-5">
        {filterImages &&
          filterImages.map((item, id) => {
            const { img } = item;
            return (
              <div
                className="overflow-hidden border-4 border-solid border-green rounded-md group"
                key={id}
              >
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 rounded-md"
                  src={img}
                  onClick={fullScreen}
                  alt="demo-img"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Filter;
