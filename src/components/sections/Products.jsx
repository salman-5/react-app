import PCard from '../utils/ProductCard';
import bifold_img from '../../assets/bifold section.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
export default function Products() {

    return (
        <>
<div className=' '>

                    <h1 className=" mt-10 underline underline-offset-8 decoration-amber-400 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">Our Products</h1>
            <div class=" bg-slate-400 grid grid-flow-col spacing-x-4 ">
                <div  class="m-4 flex items-center ">

                    <h1 className="p-4 rounded-3xl mx-auto justify-center justify-items-center   max-[310px]:border-b-8 max-[310px]:border-sky-300 decoration-8  text-center text-2xl  font-bold lg:text-4xl text-white font-Raleway">Bifold</h1>
                    {/* <h1 className="[writing-mode:vertical-lr] [text-orientation:upright]">Bifold</h1> */}
                </div>
        
                <Carousel 
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    // ssr={true} // means to render carousel on server-side.
                    // infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    renderButtonGroupOutside={true} 
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    sliderClass='gap-4 p-10 m-10'
                    // partialVisbile={false}
                    focusOnSelect={true}
                    centerMode={true}
                    // infinite={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px  "
                    >

                    <PCard title="Bifold" text="Description" />
                    <PCard title="Bifold Plus" text="Separate environments and unify spaces with this bi-fold door system with an 80 mm deep frame. This evolution of the Bi-fold series offers an excellent thermal and acoustic performance, thanks to its 45 mm thermal bridge breakage and a glazing capacity up to 48 mm. Besides, it presents a slim central section of 110 mm which allows the maximisation of the glazed surface, filling the interior spaces with natural light." />
                    <PCard title="Bifold Thermal" text="Description" />

                </Carousel>
            </div>


                    </div>

        </>
    )


}