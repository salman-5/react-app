import { useState, useRef } from "react";

import Front from "./sections/Front";
import About from "./sections/About";
import Gallery from "./sections/Gallery";
import Services from "./sections/Services";
import ScrollToTop from "./ScrollToTop";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Bifold from "./sections/Bifold";
import Products from "./sections/Products";

export default function Welcome() {
  const front = useRef(null);
  const product = useRef(null);

  const about = useRef(null);
  const services = useRef(null);
  const gallery = useRef(null);
  const contact = useRef(null);

  return (
    <>
      <div ref={front} className="items-center bg-bg-gray justify-items-center ">
        <Front />
      </div>
      <div
        ref={product}
        id="products"
        className="items-center bg-gray-300 justify-items-center "
      >
       

        <Products />
      </div>
      {/* <div ref={front} className="items-center justify-items-center ">
        <Bifold />
      </div> */}
      <div ref={about} id="about" className="items-center justify-items-center">
        <About />
      </div>
      <div
        ref={gallery}
        className="items-center bg-bg-gray  justify-items-center"
        id="gallery"
      >
        <Gallery />
      </div>
      <div
        ref={services}
        className="items-center  bg-slate-400 justify-items-center"
        id="services"
      >
        <Services />
      </div>
      <div
        ref={contact}
        className="items-center bg-bg-gray justify-items-center w-full"
        id="contact"
      >
        <Contact />
      </div>
    </>
  );
}
