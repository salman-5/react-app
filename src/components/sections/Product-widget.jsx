import React from "react";
import { useEffect, useState } from "react";
import bifoldicon from "../../assets/bifold list.svg";
import bifold_img from "../../assets/bifold section.jpg";

import Form from "../utils/Form";
import Door from "../Door";
import QuoteForm from "./QuoteConfigForm";

export default function ProductWidget(props) {

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

    return (
        <>
            <div className="grid lg:grid-cols-2 grid-cols-1 bg-[#C2C2C2] items-center">
                <Door left={leftpanel} right={rightpanel} in_bool={in_bool} />
                <div className="relative co">
                    <h1 className="mt-5 px-8 font-bold text-4xl flex font-Raleway text-slate-800">
                        Configure Your Product
                    </h1>
                    <QuoteForm
                        className="absolute left-0"
                        getimage={getImageData}
                        getOpening={getOpening}
                    />
                    {/* <img src={imageData.default} className='absolute right-0'/> */}
                </div>

                {/* <div className="flex flex-col h-full items-content-center m-5 mt-10">
                
                <h1 className="mt-5 px-8 font-bold text-4xl flex font-Raleway text-slate-800">Demo</h1>
                {/* <About_card icon={abouticon_1} title="EMITAL Bi-Fold Doors" content="EMITAL Bi-Fold Doors powered by CORTIZO has designed more than 50 exclusive systems of windows, facades, composite panel, solar protection systems and balustrade. This commitment to innovation allows us to offer high value added products, maximizing energy efficiency, thermal and acoustic insulation and resistance to atmospheric agents." />
                <About_card icon={abouticon_2} title="SPECIALITY" content="Design, innovation and quality are a common denominator in our Bi-fold Doors. They are adjustable to any type of project: single-family and collective housing, health, industrial, offices..., any type of building!" /> *
                <img
                ref={imageElement}
                src={imageData.default} 
                alt="Schema Image" 
                className={'max-w-md'}
                // onLoad={() => setImageDimensions({...imageDimensions,['height']: imageElement.current.naturalHeight,['width']: imageElement.current.naturalWidth,})} 
                /> 
                </div>  */}
            </div>
        </>
    );
}