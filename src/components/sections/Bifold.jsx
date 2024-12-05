import React from "react";
import { useEffect, useState } from "react";
import bifoldicon from "../../assets/bifold list.svg";
import bifold_img from "../../assets/bifold section.jpg";

import Form from "../utils/Form";
import Door from "../Door";
import QuoteForm from "./QuoteConfigForm";

export default function About(props) {
  const [imageData, setImageData] = useState("");
  const [leftpanel, setleftPanel] = useState("2");
  const [rightpanel, setrightPanel] = useState("2");
  const [in_bool, setIn] = useState(true);
  const getImageData = (schema_name) => {
    console.log(schema_name % 10);
    console.log((schema_name / 10) % 10);
    setleftPanel(schema_name % 10);
    setrightPanel((schema_name / 10) % 10);
    import(`../../assets/schemas/S${schema_name}.jpg`).then((image) =>
      setImageData(image)
    );
  };
  const getOpening = (e) => {
    console.log(e);
    if (e === "in") setIn(true);
    else setIn(false);
    console.log(in_bool);
  };
  // const getImageComponent= () =>{
  //     <img
  //     ref={imageElement}
  //     src={imageData.default}
  //     alt="Schema Image"
  //     className={imageClass}
  //     onLoad={() => setImageDimensions({...imageDimensions,['height']: imageElement.current.naturalHeight,['width']: imageElement.current.naturalWidth,})}
  //     />
  // }

  // useEffect(()=>{
  //     getImageComponent();
  // },[imageClass])
  // useEffect(()=>{
  //     setImageClass(imageDimensions['width']>imageDimensions['height']?'max-w-lg':'max-w-sm')
  // },[imageDimensions])

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 bg-white px-8">
        <div className="flex flex-col rounded border-[#FFFFFF80]  lg:pr-5 gap-2 m-8">
          <div className=" text-white flex flex-col gap-4">
            <h1 className="font-bold text-4xl flex font-Raleway text-[#444444]">
              Bifold Doors Specialities
            </h1>
            <p className="text-justify text-[#444444] font-Open-sans">
              Bi-fold Doors have several names: Sliding folding doors, Folding
              doors, stacking doors, folding stacking doors, concertina doors or
              accordion doors!
            </p>
            <ul className="list-image-store space-y-4 text-[#444444] list-outside list-disc ms-4 ">
              <li>
                Folding & sliding doors or bi-fold sliding doors can be just the
                architectural feature that makes your home stand out.
              </li>
              <li>
                Choosing to install Bi-fold Doors will be a brilliant addition
                for your premises.
              </li>
              <li>
                The slide open with an almost effortless gliding option, due to
                being set on stainless steel rollers.
              </li>
            </ul>
            <p className="text-justify font-Open-sans text-[#444444]">
              These modern innovative doors allow exceptionally large openings,
              opening up your space to let the outdoors in. This is achieved by
              using modern technology and state of the art hardware designed for
              easy functionality and long term reliability.
            </p>
          </div>
        </div>

        <div className="flex flex-col h-full items-center justify-center">
          <img src={bifold_img} alt="" />
          {/* <About_card icon={abouticon_1} title="EMITAL Bi-Fold Doors" content="EMITAL Bi-Fold Doors powered by CORTIZO has designed more than 50 exclusive systems of windows, facades, composite panel, solar protection systems and balustrade. This commitment to innovation allows us to offer high value added products, maximizing energy efficiency, thermal and acoustic insulation and resistance to atmospheric agents." />
                    <About_card icon={abouticon_2} title="SPECIALITY" content="Design, innovation and quality are a common denominator in our Bi-fold Doors. They are adjustable to any type of project: single-family and collective housing, health, industrial, offices..., any type of building!" /> */}
        </div>
      </div>
      
    </>
  );
}
