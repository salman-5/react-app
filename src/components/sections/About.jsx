import abouticon from "../../assets/about.svg";
import About_card from "../utils/About-card";
import abouticon_1 from "../../assets/about-1.svg";
import abouticon_2 from "../../assets/about-2.svg";
import data from '../../data/about.json'
export default function About(props) {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 bg-bg-gray px-8">
        <div className="flex flex-col rounded border-[#200A0A] border-opacity-50 lg:border-r-8 lg:pr-5 gap-2 m-8">
          <img className="w-40 " src={abouticon} alt="" />
          <div className=" text-white flex flex-col gap-4">
            <h1 className=" text-4xl  flex htext" >
              About US
            </h1>
            <p className="text-justify ptext">
              We emerge as a brand of Aluminium System Windows and Doors with
              name EMITAL We provide the best consultancy in selection, design,
              structure as well as type of opening of windows, doors, curtain
              walls and conservatory roofing systems.
            </p>
            <button className=" hover:bg-head-text transistion duration-300 hover:text-white px-4 py-1 font-bold text-black rounded-full border-[#200A0A] border-2">
              Read more about us &gt;{" "}
            </button>
          </div>
        </div>

        <div className="flex flex-col h-full items-content-center">
          <div className="m-8">
            <h2 className="htext text-4xl"> Why Choose Us</h2>
          <ul class="max-w-md space-y-1 pt-3 text-gray-500 list-inside dark:text-gray-400">
{data['Why Choose Us'].map((x) => {
  return (
    <li class="ptext flex items-center">
              <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              {x} </li>)
          })}
          </ul>
          </div>
          {/* <About_card
            icon={abouticon_1}
            title="EMITAL Bi-Fold Doors"
            content="EMITAL Bi-Fold Doors powered by CORTIZO has designed more than 50 exclusive systems of windows, facades, composite panel, solar protection systems and balustrade. This commitment to innovation allows us to offer high value added products, maximizing energy efficiency, thermal and acoustic insulation and resistance to atmospheric agents."
          />
          <About_card
            icon={abouticon_2}
            title="SPECIALITY"
            content="Design, innovation and quality are a common denominator in our Bi-fold Doors. They are adjustable to any type of project: single-family and collective housing, health, industrial, offices..., any type of building!"
          /> */}
        </div>
      </div>
    </>
  );
}
