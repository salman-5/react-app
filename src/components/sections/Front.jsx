import bgimage from "../../assets/hero-bg.jpg"
import Button from "../utils/Button";
export default function Front() {
    
    return(
        
        <>
        <div className="flex flex-col space-y-4 py-3 justify-center bg-left h-screen bg-hero-pattern bg-cover bg-stone-700 bg-blend-overlay "> 
            <h1 className="mx-auto text-5xl text-white font-bold font-Raleway ">Bifold Doors
                </h1>
               <h6 className="mx-auto text-2xl text-white">firt
                </h6>
                <Button class="hover:bg-slate-800 hover:text-white mx-auto px-2 py-1 text-center font-bold text-white rounded-full border-orange-400 border-2 bg-transparent" text="Contact"/>
        </div>
        

           
        
        </>

    );
    
}