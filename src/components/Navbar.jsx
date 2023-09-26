import { useCallback, useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import Emitalogo from "../assets/emital-logo.png";
import MenuElement from "./Navelement";
import Button from "./utils/Button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [mobmenu, setMobmenu] = useState(false);

  // const executeScroll = () =>{
  //     console.log("sas");
  //     contact.current.scrollIntoView()
  // }
  const navigate = useNavigate();
  const front = useRef(null);
  const product = useRef(null);

  const about = useRef(null);
  const services = useRef(null);
  const gallery = useRef(null);
  const contact = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const openMenu = () => {
    setMobmenu(!mobmenu);
    console.log(mobmenu);
  };
  return (
    <div
      class={`content-center place-items-center  top-0 left-0  opacity-90 py-5 px-4 justify-between  mx-0 flex ${
        mobmenu ? "flex-col" : "flex-row"
      }  bg-white`}
    >
      <img
        src={Emitalogo}
        alt=""
        className="mx-0 w-[260px] h-[70px] items-start"
        onClick={() => navigate("/")}
      />
      <FiMenu
        strokeWidth={4}
        onClick={openMenu}
        className={`decoration-2 lg:hidden block cursor-pointer h-10 w-10 items-center my-auto text-orange-800  `}
      />

      <div className={`${mobmenu ? "block" : "hidden"} lg:block  `}>
        <div
          className={`${
            mobmenu ? "bg-indigo-500 text-white" : "text-black "
          } flex items-center justify-between lg:flex-row flex-col  bg-white`}
        >
          <MenuElement func={scrollToSection} s={front} name="Home" />
          <MenuElement func={scrollToSection} s={about} name="About" />
          <MenuElement func={scrollToSection} s={services} name="Services" />
          <MenuElement func={scrollToSection} s={gallery} name="Gallery" />
          <MenuElement func={scrollToSection} s={contact} name="Contact" />
          <MenuElement func={scrollToSection} s={product} name="Product" />
          <button
            onClick={() => {
              scrollToSection(contact);
            }}
            class="text-2xl text-white font-bold px-10 py-5 rounded-full uppercase mx-auto bg-[#444444]"
            text=""
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
