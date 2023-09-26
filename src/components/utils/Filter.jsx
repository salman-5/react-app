import React, { useEffect, useState , useRef} from "react";
import { images, btns } from "../Data";


let useClickOutside =(handler) =>{
  let domNode= useRef();
  useEffect(()=>{
    let clicked = (event) =>{

      if(event.target.id==="popup"){
      if(!domNode.current.contains(event.target)){
        handler();
      }
    }
    };
      document.addEventListener("mousedown", clicked);
      return ()=>{
        document.removeEventListener("mousedown", clicked);
      };
    }
    );
      return domNode;
};
  
function Filter ()  {

  const [filterImages, setFilterImages] = useState(null);
  const [active, setActive] = useState(false);
  const [click ,setClick] = useState(false);
  const default1 = images.filter((item) => item.category === "bifold");

  useEffect(() => {
    setFilterImages(default1);
  }, []);
  let domNode=
    useClickOutside(()=>{
      setClick(false);
    });
  
  
 
    

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
        setClick(e.target.src)
      console.log(e.target.src);

  };

  return (
    <div className="wrapper p-8">
      {/* heading */}
      <h1 className="mt-10 underline underline-offset-8 decoration-cyan-800 uppercase font-Raleway text-5xl text-[#444444] text-center font-bold text-primary mb-10">
        Gallery
      </h1>

      {/* button */}
      <div className="grid grid-cols-3 md:grid-cols-5 mb-10 gap-5">
        {btns.map((item, id) => {
          const { name, value } = item;
          return (
            <button
              onClick={handleClick}
              key={id}
              value={value}
              className={`${
                active === value ? "bg-indigo-500 text-white" : " bg-gray-200 text-black "
              } py-3 px-5 inline-block rounded-full border-[3px] transition-all duration-300 hover:bg-gray-400 border-cyan-100 border-solid border-fourth text-sm  md:text-lg font-semibold `}
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
                className="overflow-hidden border-2 border-solid  rounded-md group"
                key={id}
              >
                <img
                  className="w-full h-full object-fit group-hover:scale-110 transition-all duration-500 rounded-md"
                  src={img}
                  alt="demo-img"
                  onClick={fullScreen}
                />
              </div>
            );
          })}
      </div>
          {click &&
      <div  id="popup" className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50" >

           <div ref={domNode} className="absolute h-1/2   aspect-square lg:w-1/2 lg:h-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden border-4 border-solid border-green rounded-md group" >

           <img
        className=" w-full h-full items-center justify-items-center object-fill group-hover:scale-110 transition-all duration-500 rounded-md"
        src={click}
        alt="demo-img"
        />
        </div>
      </div>
      }
    </div>
  );
}

export default Filter;
