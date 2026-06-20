import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent = Carousel.default ?? Carousel;

export default function PageCard(props) {
  const [active, setActive] = useState("performance");
  function handleClick(section) {
    setActive(section);
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
    <div className="rounded-2xl bg-white p-4 shadow-lg shadow-slate-200/70 ring-1 ring-slate-200 sm:p-6">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
        <div className="min-w-0">
          <CarouselComponent
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
            containerClass="w-full"
            sliderClass="h-full"
            partialVisible={true}
            // focusOnSelect={true}
            // centerMode={true}
            // // infinite={true}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.responsive}
            dotListClass="custom-dot-list-style"
            itemClass="h-full px-1"
          >
            {props.images.map((data, index) => (
              <div
                key={index}
                className="aspect-4/3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  className="block h-full w-full object-contain p-2 sm:p-3"
                  src={data}
                  alt=""
                />
              </div>
            ))}
          </CarouselComponent>
        </div>

        <div className="min-w-0 space-y-5">
          <h2 className="text-center text-lg font-bold tracking-wide text-slate-900 sm:text-left">
            {props.title}
          </h2>
          <div className="">
            <ul className="flex flex-wrap justify-center gap-3 p-2 sm:justify-start">
              <li>
                <button
                  type="button"
                  aria-pressed={active === "possibilities"}
                  className={`flex cursor-pointer items-center justify-center rounded-full border px-5 py-2 text-xs font-semibold uppercase leading-normal tracking-wide transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 ${
                    active === "possibilities"
                      ? "border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-400/40"
                      : "border-slate-300 bg-white text-slate-700 hover:border-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                  onClick={() => handleClick("possibilities")}
                >
                  POSSIBILITY
                </button>
              </li>
              <li>
                <button
                  type="button"
                  aria-pressed={active === "performance"}
                  className={`flex cursor-pointer items-center justify-center rounded-full border px-5 py-2 text-xs font-semibold uppercase leading-normal tracking-wide transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 ${
                    active === "performance"
                      ? "border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-400/40"
                      : "border-slate-300 bg-white text-slate-700 hover:border-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                  onClick={() => handleClick("performance")}
                >
                  PERFORMANCE Data
                </button>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-5">
            <ul className="space-y-1">
              {keys.map((key, index) => (
                <li
                  key={index}
                  className="rounded-xl border border-slate-200 bg-white px-2 py-2 text-sm text-slate-700 shadow-sm"
                >
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {key}
                  </span>
                  <span className="mt-1 block text-base font-medium text-slate-900">
                    {props.technical[active][0][key]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm leading-6 text-slate-600">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
