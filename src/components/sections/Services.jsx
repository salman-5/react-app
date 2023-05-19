import Card from "../utils/Card"

const data =
    [{
        title: "AVANT-GARDE AESTHETICS",
        text: "We create tailor-made windows and facades for every project. Creativity to answer aesthetically and functionally to each demand. Aesthetic answers to the technical needs. Creativity at the service of habitable environments."
    },
    {
        title: "ENCLOSURES FOR LIFE",
        text: "Aluminum is the most durable, long-standing and resistant material of those used in enclosures. Aluminum has the strength and a durability of the things that last a whole lifetime."
    },
    {
        title: "ACOUSTIC INSULATION",
        text: "In order to transform the residence into a private space, intimate and free of pollution outdoor acoustics, CORTIZO has designed its enclosing systems with all the latest technological developments necessary to ensure indoors peace and relax."
    },
    {
        title: "RESISTANCE TO ATMOSPHERIC AGENTS",
        text: "All of CORTIZO's enclosing systems are tested in the Test Laboratory at the Technological Center to guarantee the best performance in water tightness, air permeability and wind loads, endorsed by the maximum results in its test qualifications."
    },
    {
        title: "SUSTAINABLE SPIRIT",
        text: "Respect for the environment is CORTIZO'S commitment. Using innocuous raw materials and products in all our manufacturing process and the limitless possibility of aluminum recycling, allows us to remove any creation of waste and environmental risks."
    },
    {
        title: "THERMAL INSULATION",
        text: "Nowadays energy efficiency in buildings is a demand made, both by the architects, as by the final customer aware of the importance of saving on heating costs and air conditioner. CORTIZO meets such challenge with systems for every climatic area with a high insulation coefficient to ensure the comfort in the residence."
    },
    {
        title: "UNLIMITED COLOUR RANGE",
        text: "The whole RAL colour chart in powder coating, exclusive powder coating, metallic, textured , wood effect, more than 100 finishes in anodized. Aluminum on the outside and wood in the inside, two-coloured finishes... An unlimited offer to create a colour harmony at home. Quality labels in every process: QUALICOAT, SEA-SIDE, QUALIDECO and QUALANOD."
    }
    ];
export default function Services(props) {

    return (
        <div className=" bg-services-bg bg-cover bg-repeat-round space-y-3">
            <div className="pt-24 pb-5 space-y-8">
                <h1 className= "underline decoration-dashed decoration-8 decoration-sky-300 underline-offset-[20px] text-center text-4xl text-white font-Raleway">EMITAL PRODUCT DETAILS</h1>
                <p className="text-center text-l text-white font-Raleway">EMITAL is bringing our signature products to your door step to present a gift to your home.</p>
            </div>
        <div className="flex flex-wrap gap-4 mx-4 justify-center">
            {data.map(product => (
                <Card title={product.title} text={product.text} />
                ))}
          

        </div>
                </div>

    );
} 