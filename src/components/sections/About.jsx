import abouticon from "../../assets/icon.svg";
import About_card from "../utils/About-card";
import abouticon_1 from "../../assets/about-1.svg";
import abouticon_2 from "../../assets/about-2.svg";
export default function About(props) {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 bg-[#2D2D2D] px-8">
        <div className="flex flex-col rounded border-[#FFFFFF80] lg:border-r-8 lg:pr-5 gap-2 m-8">
          <img className="w-40 " src={abouticon} alt="" />
          <div className=" text-white flex flex-col gap-4">
            <h1 className="font-bold text-4xl flex font-Raleway uppercase">
              About US
            </h1>
            <p className="text-justify font-Open-sans">
              We emerge as a brand of Aluminium System Windows and Doors with
              name EMITAL We provide the best consultancy in selection, design,
              structure as well as type of opening of windows, doors, curtain
              walls and conservatory roofing systems.
            </p>
            <button className=" hover:bg-white hover:text-black mx-auto px-4 py-1 font-bold text-white rounded-full border-orange-400 border-2">
              Read more about us &gt;{" "}
            </button>
          </div>
        </div>

        <div className="flex flex-col h-full items-content-center">
          <About_card
            icon={abouticon_1}
            title="EMITAL Bi-Fold Doors"
            content="EMITAL Bi-Fold Doors powered by CORTIZO has designed more than 50 exclusive systems of windows, facades, composite panel, solar protection systems and balustrade. This commitment to innovation allows us to offer high value added products, maximizing energy efficiency, thermal and acoustic insulation and resistance to atmospheric agents."
          />
          <About_card
            icon={abouticon_2}
            title="SPECIALITY"
            content="Design, innovation and quality are a common denominator in our Bi-fold Doors. They are adjustable to any type of project: single-family and collective housing, health, industrial, offices..., any type of building!"
          />
        </div>
      </div>
    </>
  );
}
