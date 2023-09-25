import PCard from '../utils/ProductCard';
import bifold_img from '../../assets/bifold section.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../sections/category.css'
import MoreCard from '../utils/More-details-card';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
export default function Products() {
    const cards = [
        {
          title: 'Bifold',
          descriptions: {
            tech: 'Description for Card 2, Filter 1',
            desc: '» Up to 14 sashes: inward and outward opening \nPossibility of either even or odd number of sashes \nOption to embed the lower frame in the floor',
          },
        },
        {
          title: 'Bifold Plus',
          descriptions: {
            tech: 'Description for Card 2, Filter 1',
            desc: 'Description for Card 2, Filter 2',
          },
        },
        // Add more cards as needed...
      ];
    return (
        <>
            <div className=' bg-gray-300'>

                {/* <h1 className=" mt-10 underline underline-offset-8 decoration-amber-400 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">Our Products</h1> */}
                <div class="  grid grid-flow-col spacing-x-4 gap-4 ">
                {/* <div class=" bg-slate-400 flex spacing-x-4 gap-4 "> */}
                    {/* <div  class="m-4 flex items-center ">

                    <h1 className="p-4 rounded-3xl mx-auto justify-center justify-items-center   max-[310px]:border-b-8 max-[310px]:border-sky-300 decoration-8  text-center text-2xl  font-bold lg:text-4xl text-white font-Raleway">Bifold</h1>
                </div> */}

                    <div class="  grid grid-flow-col spacing-x-4 ">
                    {/* <div class="  w-10 h-full flex lg:w-20 opacity-50 bg-emerald-500 rounded-br-full rounded-tr-full place-items-center  justify-center ">
                        <h1 className='w-auto category text-white   tracking-wide   '>
                            Bifold</h1></div> */}
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
                            containerClass="carousel-container gap-4 p-2"
                            sliderClass='gap-2'
                            // partialVisbile={true}
                            // focusOnSelect={true}
                            // centerMode={true}
                            // // infinite={true}
                            // removeArrowOnDeviceType={["tablet", "mobile"]}
                            // deviceType={this.props.responsive}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-4-px "
                        >
{/*                              
                             {cards.map((card, index) => (
       
       < PCard title={card.title} descriptions={card.descriptions} />
   ))} */}
                <MoreCard image='./asset/hi-bifold-2.jpg' title="Bifold Door Sytems" descriptions="Experience Limitless Potential with Bifold Door Systems!

Meet the BF 3700 TB for climate-controlled serenity. \n Discover the BF 80 PLUS, a design revolution with abundant natural light. \n Unleash the Monumental Bi-Fold's epic proportions and hurricane-proof might. These systems redefine spaces and elevate your expectations. Explore the future of architecture today!"/>
                <MoreCard image='./asset/cor-vision-2.jpg' title="Sliding Door Systems" descriptions="Unleash Your Architectural Vision with CORTIZO's Cutting-Edge Sliding Doors!

Revitalize your spaces with excitement! From the ultra-modern 4600 HI LIFT AND SLIDE to the expansive 4700 SLIDING system, and the minimalist elegance of COR VISION, to the grandeur of COR VISION PLUS - CORTIZO's innovations are redefining what's possible in design. Dive in now!"/>
                <MoreCard image='./asset/mill-panel-2.jpg' title="Millenium Doors" descriptions="Experience the Future of Entrances with MILLENNIUM PLUS!

MILLENNIUM PLUS 70 and 80 bring high insulation and sleek lines to your spaces. Add style with MILLENNIUM PLUS PANEL DOOR, featuring integrated panels and LED handles.

Get ready for innovation with MILLENNIUM PLUS PIVOT DOOR, offering top performance and smart features like embedded LED handles and smart-home integration. Welcome to tomorrow's entrances, today!





"/>


                        </Carousel>
                    </div>
                </div>


            </div>

        </>
    )


}