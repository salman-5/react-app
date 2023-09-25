import {
  Radio,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import Input, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import Multiselect from "multiselect-react-dropdown";
import en from "react-phone-number-input/locale/en.json";
import { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import emailjs from "@emailjs/browser";

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
    setClick(true);
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
  };
  const changeHandler = (e, action = "form", type = "form") => {
    if (action === "add") {
      if (type === "door") setFormState({ ...formState, door: e });
      if (type === "window") setFormState({ ...formState, window: e });
      if (type === "facade") setFormState({ ...formState, facade: e });
      if (type === "railing") setFormState({ ...formState, railing: e });

      return;
    }
    if (action === "mobile") {
      setFormState({ ...formState, mobileNumber: e });
      return;
    }
    if (action === "delete") {
      if (type === "door") setFormState({ ...formState, door: e });
      if (type === "window") setFormState({ ...formState, window: e });
      if (type === "facade") setFormState({ ...formState, facade: e });
      if (type === "railing") setFormState({ ...formState, railing: e });
      return;
    }

    if (action === "project-status") {
      if (e.target.value === "on")
        if (e.target.id === "designing")
          setFormState({
            ...formState,
            designing: true,
            tender: false,
            excecution: false,
          });
        else if (e.target.id === "tender")
          setFormState({
            ...formState,
            designing: false,
            tender: true,
            excecution: false,
          });
        else if (e.target.id === "excecution")
          setFormState({
            ...formState,
            designing: false,
            tender: false,
            excecution: true,
          });
      return;
    }
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        onSubmit={sendMail}
        action="#"
        class="flex flex-col p-8 space-y-5 bg-slate-500 rounded-[30px] justify-between place-items-center content-between place-content-between w-full"
      >
        <div className="w-full gap-5 ">
          <div className="flex flex-col gap-3">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                onChange={changeHandler}
                type="text"
                id="name"
                name="name"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                onChange={changeHandler}
                type="email"
                id="email"
                name="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="email"
                required
              />
            </div>
            <div>
              <label
                for="Mobile Number"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Mobile Number
              </label>
              {/* <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required /> */}

              <div className="flex flex-col bg-gray-700 p-2 rounded-lg">
                <PhoneInputWithCountrySelect
                  containerClass=""
                  international
                  defaultCountry="AE"
                  onChange={(e) => changeHandler(e, "mobile")}
                  placeholder={"a"}
                  name="mobilenumber"
                  numberInputProps={{
                    className:
                      "px-4 w-full focus:outline-none outline-none shadow-sm bg-gray-50  focus:border-primary-500 text-black text-sm rounded-lg focus:ring-primary-500 p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:shadow-sm-light", // my Tailwind classes
                  }}
                  countrySelectProps={{
                    className:
                      "flex flex-col shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full h-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",
                  }}
                  smartCaret={true}
                />
              </div>
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                name="subject"
                onChange={changeHandler}
                type="text"
                id="subject"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="flex flex-col w-full space-y-3">
              <div className="">
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Project Status
                  </label>
                  <div
                    onChange={(e) => changeHandler(e, "project-status")}
                    className="flex-col flex sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-3"
                  >
                    <div className="px-2 space-x-2">
                      <input
                        type="radio"
                        name="project-status"
                        id="designing"
                      />
                      <label htmlFor="">Designing</label>
                    </div>
                    <div className="px-2 space-x-2">
                      <input type="radio" name="project-status" id="tender" />
                      <label htmlFor="">Tender</label>
                    </div>
                    <div className="px-2 space-x-2">
                      <input
                        type="radio"
                        name="project-status"
                        id="excecution"
                      />
                      <label htmlFor="">Excecution</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="">
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Interested Products
                  </label>
                  <div className="flex space-x-5">
                    <div className="px-2 space-x-2">
                      <input
                        type="checkbox"
                        name="interested-products"
                        id="interested-products"
                      />
                      <label htmlFor="">Doors</label>
                    </div>
                    <div className="px-2 space-x-2">
                      <input
                        type="checkbox"
                        name="interested-products"
                        id="interested-products"
                      />
                      <label htmlFor="">Windows</label>
                    </div>
                    <div className="px-2 space-x-2">
                      <input
                        type="checkbox"
                        name="interested-products"
                        id="interested-products"
                      />
                      <label htmlFor="">Facades</label>
                    </div>
                    <div className="px-2 space-x-2">
                      <input
                        type="checkbox"
                        name="interested-products"
                        id="interested-products"
                      />
                      <label htmlFor="">Railings</label>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="flex flex-col items-start justify-center w-full space-y-3">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Interested Products
                </label>
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 space-x-0 items-center w-full justify-center lg:space-x-3">
                  <div className=" flex-1 flex-col sm:flex-row w-full">
                    <Multiselect
                      displayValue="key"
                      placeholder="Doors"
                      showArrow
                      style={{
                        chips: {
                          background: "rgb(59 130 246)",
                        },
                        multiselectContainer: {
                          color: "gray",
                        },
                        searchBox: {
                          border: "none",
                          "border-bottom": "1px solid green",
                          "border-radius": "8px",
                          color: "red !important",
                          background: "rgb(55 65 81)",
                        },
                      }}
                      onKeyPressFn={function noRefCheck() {}}
                      onSearch={function noRefCheck() {}}
                      onRemove={(e) => {
                        changeHandler(e, "delete", "door");
                      }}
                      onSelect={(e) => {
                        changeHandler(e, "add", "door");
                      }}
                      options={[
                        {
                          cat: "Group 1",
                          key: "Hinged Door",
                        },
                        {
                          cat: "Group 1",
                          key: "Slidind Door",
                        },
                        {
                          cat: "Group 1",
                          key: "Bifold Door",
                        },
                      ]}
                    />
                  </div>

                  <div className=" flex-1 flex-col sm:flex-row w-full">
                    <Multiselect
                      displayValue="key"
                      placeholder="Windows"
                      showArrow
                      style={{
                        chips: {
                          background: "rgb(59 130 246)",
                        },
                        multiselectContainer: {
                          color: "gray",
                        },
                        searchBox: {
                          border: "none",
                          "border-bottom": "1px solid green",
                          "border-radius": "8px",
                          color: "red !important",
                          background: "rgb(55 65 81)",
                        },
                      }}
                      onKeyPressFn={function noRefCheck() {}}
                      onSearch={function noRefCheck() {}}
                      onRemove={(e) => {
                        changeHandler(e, "delete", "window");
                      }}
                      onSelect={(e) => {
                        changeHandler(e, "add", "window");
                      }}
                      options={[
                        {
                          cat: "Group 1",
                          key: "Casement",
                        },
                        {
                          cat: "Group 1",
                          key: "Sliding",
                        },
                        {
                          cat: "Group 1",
                          key: "Fixed",
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 space-x-0 items-center w-full justify-center lg:space-x-3">
                  <div className="flex-1 w-full">
                    <Multiselect
                      displayValue="key"
                      placeholder="Facade"
                      showArrow
                      style={{
                        chips: {
                          background: "rgb(59 130 246)",
                        },
                        multiselectContainer: {
                          color: "gray",
                        },
                        searchBox: {
                          border: "none",
                          "border-bottom": "1px solid green",
                          "border-radius": "8px",
                          color: "red !important",
                          background: "rgb(55 65 81)",
                        },
                      }}
                      onKeyPressFn={function noRefCheck() {}}
                      onSearch={function noRefCheck() {}}
                      onRemove={(e) => {
                        changeHandler(e, "delete", "facade");
                      }}
                      onSelect={(e) => {
                        changeHandler(e, "add", "facade");
                      }}
                      options={[
                        {
                          cat: "Group 1",
                          key: "Conventional",
                        },
                        {
                          cat: "Group 1",
                          key: "Two way structural",
                        },
                        {
                          cat: "Group 1",
                          key: "Four way structural",
                        },
                        {
                          cat: "Group 1",
                          key: "Unitized",
                        },
                      ]}
                    />
                  </div>
                  <div className="flex-1 w-full">
                    <Multiselect
                      displayValue="key"
                      placeholder="Balcony / Railings"
                      showArrow
                      style={{
                        chips: {
                          background: "rgb(59 130 246)",
                        },
                        multiselectContainer: {
                          color: "gray",
                        },
                        searchBox: {
                          border: "none",
                          "border-bottom": "1px solid green",
                          "border-radius": "8px",
                          color: "red !important",
                          background: "rgb(55 65 81)",
                        },
                      }}
                      onKeyPressFn={function noRefCheck() {}}
                      onSearch={function noRefCheck() {}}
                      onRemove={(e) => {
                        changeHandler(e, "delete", "railing");
                      }}
                      onSelect={(e) => {
                        changeHandler(e, "add", "railing");
                      }}
                      options={[
                        {
                          cat: "Group 1",
                          key: "Aluminium",
                        },
                        {
                          cat: "Group 1",
                          key: "SS",
                        },
                        {
                          cat: "Group 1",
                          key: "Glass",
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div class="h-full">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  onChange={changeHandler}
                  id="message"
                  name="message"
                  rows="6"
                  class="block p-2.5 w-full h-5/6 text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  justify-center gap-2 ">
          {click && (
            <div className="flex flex-row justify-center place-items-center gap-1">
              <FaThumbsUp className="decoration-lime-500 text-lime-500 " />
              <p className=" text-lime-500 text-center  ">
                Message send Successfully
              </p>
            </div>
          )}
          <button
            type="submit"
            value="Send message"
            class="mx-auto rounded-full bg-blue-500 text-white  justify-center py-3 px-5 text-sm font-medium text-center  bg-primary-700 sm:w-full hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
