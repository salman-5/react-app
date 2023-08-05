import PCard from '../utils/ProductCard';
import bifold_img from '../../assets/bifold section.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../sections/category.css'

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
            <div className=' bg-slate-400'>

                {/* <h1 className=" mt-10 underline underline-offset-8 decoration-amber-400 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">Our Products</h1> */}
                <div class=" bg-slate-400 grid grid-flow-col spacing-x-4 gap-4 ">
                {/* <div class=" bg-slate-400 flex spacing-x-4 gap-4 "> */}
                    {/* <div  class="m-4 flex items-center ">

                    <h1 className="p-4 rounded-3xl mx-auto justify-center justify-items-center   max-[310px]:border-b-8 max-[310px]:border-sky-300 decoration-8  text-center text-2xl  font-bold lg:text-4xl text-white font-Raleway">Bifold</h1>
                </div> */}

                    <div class=" bg-slate-400 grid grid-flow-col spacing-x-4 ">
                    <div class="  w-10 h-full flex lg:w-20 opacity-50 bg-emerald-500 rounded-br-full rounded-tr-full place-items-center  justify-center ">
                        <h1 className='w-auto category text-white   tracking-wide   '>
                            Bifold</h1></div>
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
                             
                             {cards.map((card, index) => (
       
       < PCard title={card.title} descriptions={card.descriptions} />
   ))}
  

                        </Carousel>
                    </div>
                </div>


            </div>

        </>
    )


}