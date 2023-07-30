import {
    Radio,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography
} from "@material-tailwind/react";
import Input, { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';
import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import emailjs from '@emailjs/browser';

export default function Form(params) {
    // const CountrySelect = ({ value, onChange, labels, ...rest }) => (
    //     <select {...rest} value={value} onChange={(event) => onChange(event.target.value || undefined)}>
    //         <option value="">{labels.ZZ}</option>
    //         {getCountries().map((country) => (
    //             <option key={country} value={country}>
    //                 {labels[country]} +{getCountryCallingCode(country)}
    //             </option>
    //         ))}
    //     </select>
    // );
    const [click, setClick] = useState();
    const [country, setCountry] = useState();
    const [value, setValue] = useState();
    const [formState, setFormState] = useState({});
    const sendMail = (e) => {
        e.preventDefault();
        setClick(true)
        console.log(click);
        const myTimeout = setTimeout(() => {
            setClick(false);
        }, 3000);


        // emailjs.sendForm('service_d0rkt5s', 'template_knnhnu8', e.target, 'xtLjEqpIlCPEMmn25')
        // .then((result) => {
        //  alert("Send mail")
        // }, (error) => {
        //     console.log(error.text);
        // });

    }
    const changeHandler = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }


    return (

        <>

            <form onSubmit={sendMail} action="#" class="flex flex-col m-8 p-8 space-y-5 bg-slate-500 rounded-[30px] justify-between place-items-center content-between place-content-between">
                <div className="w-full gap-5 ">
                    <div className="flex flex-col gap-3">

                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input onChange={changeHandler} type="text" id="name" name="name" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required />
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input onChange={changeHandler} type="email" id="email" name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email" required />
                        </div>
                        <div>
                            <label for="Mobile Number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile Number</label>
                            {/* <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required /> */}

                            <div className="flex flex-col">
                                <PhoneInputWithCountrySelect
                                    containerClass=""
                                    international
                                    defaultCountry="AE"
                                    onChange={setValue}
                                    placeholder={"a"}
                                    name="mobilenumber"
                                    numberInputProps={{
                                        className: 'rounded-md px-4  w-full focus:outline-none shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light' // my Tailwind classes
                                    }}
                                    countrySelectProps={

                                        {
                                            className: "flex flex-col shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full h-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                        }}
                                    smartCaret={true}
                                />
                            </div>

                        </div>
                        <div>
                            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input name="subject" onChange={changeHandler} type="text" id="subject" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="flex flex-col  ">
                            <div className="">
                                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Interested Product</label>

                                <div className="flex gap-3">
                                    <div class="flex justify-center gap-3">
                                        <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                                            <input
                                                class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                                type="radio"
                                                name="iproduct"
                                                id="inlineRadio1"
                                                value="bifold" />
                                            <label
                                                class="block mb-2 text-sm font-light text-gray-900 dark:text-gray-300"
                                                for="inlineRadio1"
                                            >Bifold</label>
                                        </div>

                                        <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                                            <input
                                                class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                                type="radio"
                                                name="iproduct"
                                                id="inlineRadio2"
                                                value="other" />
                                            <label
                                                class="block mb-2 text-sm font-light text-gray-900 dark:text-gray-300"
                                                for="inlineRadio2"
                                            >Other</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="h-full">
                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                <textarea onChange={changeHandler} id="message" name="message" rows="6" class="block p-2.5 w-full h-5/6 text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col  justify-center gap-2 ">
                    {click &&
                        <div className="flex flex-row justify-center place-items-center gap-1">
                            <FaThumbsUp className="decoration-lime-500 text-lime-500 " />
                            <p className=" text-lime-500 text-center  ">
                                Message send Successfully</p>
                        </div>
                    }
                    <input type="submit" value="Send message" class="mx-auto rounded-full bg-blue-500 text-white  justify-center py-3 px-5 text-sm font-medium text-center  bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" />

                </div>

            </form >
        </>
    )

}