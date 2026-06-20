import CarouselModule from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../sections/category.css";
import MultiActionAreaCard from "../utils/test-card";

const Carousel = CarouselModule.default;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function Products() {
  return (
    <>
      <h1 className="text-head-text pt-10 underline bg-bg-gray underline-offset-8 decoration-[#200A0A] decoration-opacity-50 text-4xl tracking-tight font-extrabold text-center">
        Our Products
      </h1>
      <div className="w-full px-4 py-8">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          transitionDuration={500}
          containerClass="carousel-container gap-4 p-2"
          sliderClass="gap-2"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-4-px"
        >
          <MultiActionAreaCard
            image="./asset/hi-bifold-2.jpg"
            title="Bifold Door Sytems"
            descriptions="Experience Limitless Potential with Bifold Door Systems!

Meet the BF 3700 TB for climate-controlled serenity. \n Discover the BF 80 PLUS, a design revolution with abundant natural light. \n Unleash the Monumental Bi-Fold's epic proportions and hurricane-proof might. These systems redefine spaces and elevate your expectations. Explore the future of architecture today!"
          />
          <MultiActionAreaCard
            image="./asset/cor-vision-2.jpg"
            title="Sliding Door Systems"
            descriptions="Unleash Your Architectural Vision with CORTIZO's Cutting-Edge Sliding Doors!

Revitalize your spaces with excitement! From the ultra-modern 4600 HI LIFT AND SLIDE to the expansive 4700 SLIDING system, and the minimalist elegance of COR VISION, to the grandeur of COR VISION PLUS - CORTIZO's innovations are redefining what's possible in design. Dive in now!"
          />
          <MultiActionAreaCard
            image="./asset/mill-panel-2.jpg"
            title="Millenium Doors"
            descriptions="Experience the Future of Entrances with MILLENNIUM PLUS!

MILLENNIUM PLUS 70 and 80 bring high insulation and sleek lines to your spaces. Add style with MILLENNIUM PLUS PANEL DOOR, featuring integrated panels and LED handles.

Get ready for innovation with MILLENNIUM PLUS PIVOT DOOR, offering top performance and smart features like embedded LED handles and smart-home integration. Welcome to tomorrow's entrances, today!"
          />
        </Carousel>
      </div>
    </>
  );
}
