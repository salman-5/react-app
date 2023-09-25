import React,{useState,useEffect} from 'react'
import{FaAngleDoubleUp} from "react-icons/fa";

const ScrollToTop= () => {
    const [showScroll,setShowScroll ]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 300){
                setShowScroll(true);
            }
            else{
                setShowScroll(false);
            }
        })
    },[]);
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }
  return (
    <div className=' z-50 fixed w-[30px] h-[30px] bottom-10  right-10 inline-block rounded-full uppercase leading-normal transition duration-150 ease-in-out hover:bg-danger-600 '>
        {showScroll && <FaAngleDoubleUp className='w-full h-full rounded-full bg-black p-1 text-cyan-400  focus-within:text-black hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] ' onClick={scrollTop}/>}
    </div>
  )
}

export default ScrollToTop;