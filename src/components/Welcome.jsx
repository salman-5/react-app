import { lazy, Suspense, useRef } from "react";

import Front from "./sections/Front";

const About = lazy(() => import("./sections/About"));
const Gallery = lazy(() => import("./sections/Gallery"));
const Services = lazy(() => import("./sections/Services"));
const Contact = lazy(() => import("./sections/Contact"));
const Products = lazy(() => import("./sections/Products"));
const ProductWidget = lazy(() => import("./sections/Product-widget"));

function SectionFallback() {
  return <div className="min-h-[20vh] bg-bg-gray" aria-hidden="true" />;
}

export default function Welcome() {
  const front = useRef(null);
  const product = useRef(null);
  const productW = useRef(null);

  const about = useRef(null);
  const services = useRef(null);
  const gallery = useRef(null);
  const contact = useRef(null);

  return (
    <>
      <div ref={front} className="items-center bg-bg-gray justify-items-center ">
        <Front />
      </div>
      <Suspense fallback={<SectionFallback />}>
        <div ref={productW} className="items-center bg-gray-300 justify-items-center ">
          <ProductWidget />
        </div>
        <div
          ref={product}
          id="products"
          className="items-center bg-gray-300 justify-items-center "
        >

          <Products />
        </div>
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
      </Suspense>
    </>
  );
}
