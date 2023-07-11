import bifold_img from '../../assets/bifold section.jpg';

export default function PCard(props) {

    return (

        <div class='bg-[#444444]  rounded-xl p-8 space-y-6'>
            <div class="flex flex-col ">
                <img src={bifold_img} class="w-full" alt="" />
                <h1 className='text-white text-xl font-bold uppercase font-Poppins'>
                    {props.title}
                </h1>
            </div>

            <p className='text-justify text-white text-s justify font-Open-sans'>{props.text}</p>
            <button class=" hover:bg-white hover:text-black mx-auto px-4 py-1 font-bold text-white rounded-full border-orange-400 border-2">Read more about us &gt; </button>

        </div>


    );
}