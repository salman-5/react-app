import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Emitalogo from "../assets/emital-logo.png";
import MenuElement from "./Navelement";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [mobmenu, setMobmenu] = useState(false);
  const navigate = useNavigate();
  const openMenu = () => {
    setMobmenu(!mobmenu);
    console.log(mobmenu);
  };
  return (
    <div
      className={`content-center place-items-center  top-0 left-0  opacity-90 py-5 px-4 justify-between  mx-0 flex ${
        mobmenu ? "flex-col lg:flex-row" : "flex-row"
      }   bg-[#D2CBCA] `}
    >
      <div className="flex items-center justify-center space-x-3 px-2">
        <img
          src={Emitalogo}
          alt=""
          className={`mx-0 w-[260px] h-[70px] items-start 
      }`}
          onClick={() => navigate("/")}
        />
        <FiMenu
          strokeWidth={4}
          onClick={openMenu}
          className={`decoration-2 lg:hidden block cursor-pointer h-10 w-10 items-center my-auto text-orange-800  `}
        />
      </div>

      {mobmenu ? (
        <div className={``}>
          <div
            className={`flex items-center justify-between lg:flex-row flex-col  bg-[#D2CBCA] bg-opacity-40`}
          >
            <MenuElement
              mobMenu={mobmenu}
              setMobMenu={setMobmenu}
              name="Home"
            />
            <MenuElement
              mobMenu={mobmenu}
              setMobMenu={setMobmenu}
              name="About"
            />
            <MenuElement
              mobMenu={mobmenu}
              setMobMenu={setMobmenu}
              name="Services"
            />
            <MenuElement
              mobMenu={mobmenu}
              setMobMenu={setMobmenu}
              name="Gallery"
            />
            <MenuElement
              mobMenu={mobmenu}
              setMobMenu={setMobmenu}
              name="Contact"
            />
            <MenuElement
              mobMenu={mobmenu}
              setMobMenu={setMobmenu}
              name="Products"
            />
            <HashLink
              to="/#contact"
              onClick={() => {
                setMobmenu(!mobmenu);
              }}
              className=" text-lg text-white font-bold px-5 py-2 rounded-full mx-auto bg-[#444444]"
              text=""
            >
              Contact Us
            </HashLink>
          </div>
        </div>
      ) : (
        <div className={`hidden lg:block`}>
          <div
            className={`${
              mobmenu ? "bg-indigo-500 text-white" : "text-black "
            } flex items-center justify-between lg:flex-row flex-col   bg-[#D2CBCA] bg-opacity-40`}
          >
            <MenuElement name="Home" />
            <MenuElement name="Products" />
            <MenuElement name="Services" />
            <MenuElement name="Gallery" />
            <MenuElement name="About" />
            {/* <MenuElement name="Contact" /> */}
            <HashLink
              to="/#contact"
              onClick={() => {
                setMobmenu(!mobmenu);
              }}
              className="text-xl text-white font-bold px-5 py-2 rounded-full  mx-auto bg-[#444444]"
              text=""
            >
              Contact Us
            </HashLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
