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
    <div className=" p-3 shadow-lg rounded-sm ">
      <div className="flex flex-col sm:flex-row w-full justify-start  space-x-3 ">
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
          containerClass="carousel-container"
          sliderClass=""
          partialVisbile={true}
          // focusOnSelect={true}
          // centerMode={true}
          // // infinite={true}
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.responsive}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-4-px "
        >
          {props.images.map((data, index) => (
            <img
              key={index}
              className="w-full  sm:w-2/4 rounded-sm "
              src={data}
              alt=""
            />
          ))}
        </Carousel>

        <div className="w-full sm:w-2/4 p-5 space-y-4 sm:space-y-10">
          <h2 className="text-center font-mono font-bold text-lg">
            {props.title}
          </h2>
          <div className="">
            <ul className="p-2 flex gap-2 justify-evenly">
              <li
                className="inline-block rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover: bg-slate-300 focus:bg-slate-100 focus:outline-none focus:ring-0 active:bg-slate-200"
                onClick={handleClick}
              >
                POSSIBILITY
              </li>
              <li
                className="inline-block rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover: bg-slate-300 focus:bg-slate-100 focus:outline-none focus:ring-0 active:bg-slate-200"
                onClick={handleClick}
              >
                PERFORMANCE Data
              </li>
            </ul>
          </div>
          <ul>
            {keys.map((key, index) => (
              <li key={index}>
                {key}: {props.technical[active][0][key]}
              </li>
            ))}
          </ul>

          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
