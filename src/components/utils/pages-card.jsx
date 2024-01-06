import { requirePropFactory } from "@mui/material";
import React, { useState, useRef } from "react";
import Carousel from "react-multi-carousel";

export default function PageCard(props) {
  const [active, setActive] = useState("performance");
  function handleClick(t) {
    console.log(t.target.outerText);
    if (t.target.outerText === "PERFORMANCE DATA") {
      setActive("performance");
    } else setActive("possibilities");
  }
  // Object.keys(props.technical[active][0]).forEach(element => {
  //     console.log(element);
  // })
  // props.technical.keys().forEach(element => {
  //     console.log(element);
  // })
  const keys = Object.keys(props.technical[active][0]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className=" p-3 shadow-lg rounded-sm h-full ">
      <div className="flex flex-col sm:flex-row w-full justify-start h-full  space-x-3 ">
        <div className=" w-full sm:w-1/3 min-h-full ">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            // // ssr={true} // means to render carousel on server-side.
            // // infinite={true}
            // // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1000}
            // keyBoardControl={true}
            // renderButtonGroupOutside={true}
            // customTransition="all .5"
            transitionDuration={500}
            containerClass=" h-full  "
            sliderClass=""
            partialVisbile={true}
            // focusOnSelect={true}
            // centerMode={true}
            // // infinite={true}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.responsive}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-4-px h-full "
          >
            {props.images.map((data, index) => (
              <img
                key={index}
                className=" object-cover  sm:w-2/4 rounded-sm place-content-stretch"
                src={data}
                alt=""
              />
            ))}
          </Carousel>
        </div>

        <div className="w-full sm:w-2/4 p-5 space-y-4 sm:space-y-10">
          <h2 className="text-center font-mono font-bold text-lg">
            {props.title}
          </h2>
          <div className="">
            <ul className="flex justify-evenly">
              <li
                className={`flex w-full items-center justify-center rounded-t-2xl  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-300 ease-in-out hover: bg-slate-300 focus:bg-slate-100 focus:outline-none focus:ring-0 active:bg-slate-200  ${
                  active === "possibilities" ? "bg-slate-500" : ""
                }`}
                onClick={handleClick}
              >
                POSSIBILITY
              </li>
              <li
                className={`flex w-full items-center justify-center rounded-t-2xl px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-300 ease-in-out hover: bg-slate-300 focus:bg-slate-100 focus:outline-none focus:ring-0 active:bg-slate-200 ${
                  active === "performance" ? "bg-slate-500" : ""
                } `}
                onClick={handleClick}
              >
                PERFORMANCE Data
              </li>
            </ul>
            <ul className="bg-slate-500 p-4">
              {keys.map((key, index) => (
                <li key={index}>
                  {key}: {props.technical[active][0][key]}
                </li>
              ))}
            </ul>
          </div>

          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
