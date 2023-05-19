import { useRef } from "react";

import Emitalogo from "../assets/emital-logo.png"
import MenuElement from "./Navelement"
import Button from "./utils/Button"
import Front from "./sections/Front"
import About from "./sections/About"
import Gallery from "./sections/Gallery";
import Services from "./sections/Services"
import ScrollToTop from "./ScrollToTop";
import Contact from "./sections/Contact";


export default function Welcome() {

    const front = useRef(null);
    const about = useRef(null);
    const services = useRef(null);
    const gallery = useRef(null);
    const contact = useRef(null);
    const scrollToSection = (elementRef) =>{
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <div class="py-5 px-4 justify-between mx-0 flex flex-row  bg-white">
                <img src={Emitalogo} alt="" className="mx-0 w-[260px] h-[70px] items-start" />
                <div className="flex items-center justify-between flex-row  bg-white">
                    <MenuElement funx={scrollToSection} s={front} name="Home" />
                    <MenuElement funx={scrollToSection} s={about} name="About" />
                    <MenuElement funx={scrollToSection} s={services}name="Services" />
                    <MenuElement funx={scrollToSection} s={gallery} name="Gallery" />
                    <MenuElement funx={scrollToSection} s={contact} name="Contact" />
                    <Button class="px-2 py-1 rounded-full mx-auto bg-blue-500" text="Get Started" />
                </div>
            <ScrollToTop/>
            </div>
            <div ref={front} className="items-center justify-items-center">
                <Front />
            </div>
            <div ref={about}  className="items-center justify-items-center">
                <About />
            </div>
            <div ref={services} className="items-center justify-items-center">
                <Services />
            </div>
            <div ref={gallery} className="items-center justify-items-center">
                <Gallery />
            </div>
            <div ref={contact} className="items-center justify-items-center">
                <Contact />
            </div>
            <div class="py-5 px-4 justify-between mx-0 flex flex-row  bg-black">
                <img src={Emitalogo} alt="" className="mx-0 w-[260px] h-[70px] items-start" />
                <div className="flex items-center justify-between flex-row  bg-white">
                    <MenuElement funx={scrollToSection} s={front} name="Home" />
                    <MenuElement funx={scrollToSection} s={about} name="About" />
                    <MenuElement funx={scrollToSection} s={services}name="Services" />
                    <MenuElement funx={scrollToSection} s={gallery} name="Gallery" />
                    <MenuElement funx={scrollToSection} s={contact} name="Contact" />
                    <Button class="px-2 py-1 rounded-full mx-auto bg-blue-500" text="Get Started" />
                </div>
                </div>
        </>


    );
}