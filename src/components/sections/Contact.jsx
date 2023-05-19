import Form from "../utils/Form";

import map from '../../assets/map.svg'
import contact from '../../assets/envelope.svg'
import mail from '../../assets/phone-call.svg'


import ContactCard from "../utils/contact-card";
export default function Contact() {

    return (
        <div>
            <h2 class="underline underline-offset-8 decoration-amber-400 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">Contact Us</h2>
            <p class="px-8 lg:mb-16 font-light text-center text-gray-900 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
                <div className=" flex flex-col m-8 place-content-between gap-[11px]">

                    <div className=" justify-items-center items-center justify place-content-center">
                    <div class='shadow-lg flex flex-col bg-gray-200 w-full h-full place-content-center content-center justify-center mx-auto items-center rounded-xl p-8 space-y-1'>
                    <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14418.953066177188!2d55.4879616!3d25.380087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f587e5bb51aa9%3A0x1959db96fcd8404d!2sEmital%20Aluminium%20Works%20Co%20LLC!5e0!3m2!1sen!2sin!4v1684443055509!5m2!1sen!2sin" width="400" height="300" style={{border:1}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            {/* <div class="flex flex-auto space-y-4"> */}
                <img src={map} alt="" className='mx-auto w-10 h-10' />
                <h1 className='text-black font-medium  mx-auto font-Poppins'>
                Our Address
                </h1>
            {/* </div> */}

            <p className='mx-auto text-center text-black text-s justify font-Open-sans'>
            EMITAl Aluminum Co LLC. PB No. 18149, Ajman, UAE
            </p>
        </div>
                    </div>
                    <div className="h-1/4 flex flex-row gap-3">
                        <ContactCard  icon={contact} title="Email Us" link="mailto:info@emital.com" text="info@emital.com" />
                        <ContactCard icon={mail} title="Call Us" link="tel:+97167486755" text="+971-67486755" />
                    </div>
                </div>
                <Form />

            </div>

        </div>

    );
}
