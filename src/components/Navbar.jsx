import { useCallback } from "react";

function Header () {

  return (
    <div className="self-stretch h-[107px] shrink-0 flex flex-row py-[25px] px-[26px] box-border items-center justify-between text-left text-lg text-darkslategray-100 font-open-sans">
      <img
        className="relative w-[265px] h-[68px] shrink-0 object-cover"
        alt=""
        src="/emitallogopng@2x.png"
      />
      <div className="w-[761px] shrink-0 flex flex-row items-center justify-between">
        <b className="relative leading-[22.5px] flex items-center w-[71px] h-[23px] shrink-0 z-[5]">
          Home
        </b>
        <b
          className="relative leading-[22.5px] flex items-center w-[73px] h-[23px] shrink-0 cursor-pointer z-[4]"
          onClick={onAboutTextClick}
        >
          About
        </b>
        <b
          className="relative leading-[22.5px] flex items-center w-[98px] h-[23px] shrink-0 cursor-pointer z-[3]"
          onClick={onServicesTextClick}
        >
          Services
        </b>
        <b
          className="relative leading-[22.5px] flex items-center w-[86px] h-[23px] shrink-0 cursor-pointer z-[2]"
          onClick={onGalleryTextClick}
        >
          Gallery
        </b>
        <b
          className="relative leading-[22.5px] flex items-center w-[94px] h-[23px] shrink-0 cursor-pointer z-[1]"
          onClick={onContactTextClick}
        >
          Contact
        </b>
        <div className="rounded-31xl bg-darkslategray-100 w-[183px] h-10 shrink-0 flex flex-row py-[18px] px-[42px] box-border items-center justify-center z-[0] text-center text-white">
          <b className="relative tracking-[1px] leading-[19.5px] uppercase">
            Get Started
          </b>
        </div>
      </div>
    </div>
  );
}

export default Header