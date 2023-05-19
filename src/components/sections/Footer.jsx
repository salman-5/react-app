import FooterElement from "../Navelement copy"
import icon1 from "../../assets/Vector.svg"
import icon2 from "../../assets/Vector-1.svg"
import icon3 from "../../assets/Vector-2.svg"
import icon4 from "../../assets/Vector-3.svg"
import icon5 from "../../assets/Vector-4.svg"



export default function Footer(){
    const link1="mailto:salmu234@gmail.com"
    const link2="mailto:salmu234@gmail.com"
    const link3="mailto:salmu234@gmail.com"
    const link4="mailto:salmu234@gmail.com"
    const link5="mailto:salmu234@gmail.com"
    return(
        <>
          <div href={link1} class="py-5 px-4 justify-between place-items-center mx-0 flex lg:flex-row flex-col  bg-black">
                        <p className="text-white">© Copyright EMITAL. All Rights Reserved</p>
                <div className="flex items-center justify-between flex-row">
                    <FooterElement link={link1} icon={icon1}/>
                    <FooterElement link={link2} icon={icon2}/>
                    <FooterElement link={link3} icon={icon3}/>
                    <FooterElement link={link4} icon={icon4}/>
                    <FooterElement link={link5} icon={icon5}/>
                </div>
            </div>
        </>
    );

}