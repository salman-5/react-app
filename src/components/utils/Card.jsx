import icon from '../../assets/card.svg'

export default function Card(props) {

    return (

        <div class='bg-[#252525] w-[380px] rounded-xl p-8 space-y-6'>
            <div class="flex flex-auto space-x-4">
                <img src={icon} alt="" />
                <h1 className='text-white font-medium uppercase font-Poppins'>
                    {props.title}
                </h1>
            </div>

            <p className='text-justify text-white text-s justify font-Open-sans'>{props.text}</p>
        </div>


    );
}