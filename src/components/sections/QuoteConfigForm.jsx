import { useEffect, useState, useReducer } from "react";
import { FaThumbsUp } from "react-icons/fa";
import "react-phone-number-input/style.css";
import emailjs from "@emailjs/browser";
import { schema } from "../scheme_data.js";
// import { imagedata } from "../scheme_data";

export default function QuoteForm(props) {
  const [click, setClick] = useState();
  const [formState, setFormState] = useState({
    ndoor: 1,
    schema: "",
  });

  const validationReducer = (state, action) => {
    if (action.type === "height_invalid")
      return { ...state, heightIsValid: false };

    if (action.type === "height_valid")
      return { ...state, heightIsValid: true };

    if (action.type === "width_invalid")
      return { ...state, widthIsValid: false };

    if (action.type === "width_valid") return { ...state, widthIsValid: true };
  };

  const [validations, dispatchValidations] = useReducer(validationReducer, {
    heightIsValid: true,
    widthIsValid: true,
  });

  // const []
  // const [schemas,setSchemas] = useState([...schema])
  const [schemaList, setSchemaList] = useState([]);
  const sendMail = (e) => {
    e.preventDefault();
    setClick(true);
    console.log(click);
    const myTimeout = setTimeout(() => {
      setClick(false);
    }, 3000);
  };

  const getSchemasList = (schema) => {
    // console.log(schemas)
    // console.log("hello"+schemaList)
    if (schema) {
      setSchemaList(schema);
    } else {
      setSchemaList([]);
    }
  };
  const changeHandler = (e, type = "h/w") => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    let currentHeight = formState.height;
    let currentWidth = formState.width;
    let currentNumberOfDoors = formState.ndoor;
    let La = currentWidth / currentNumberOfDoors;
    if (!(currentHeight < 3000 && currentHeight > 1900))
      dispatchValidations({ type: "height_invalid" });
    else dispatchValidations({ type: "height_valid" });

    if (!(La < 1200 && La > 600))
      dispatchValidations({ type: "width_invalid" });
    else dispatchValidations({ type: "width_valid" });
  }, [formState]);

  // // To get a new image every time user chooses different schema
  // useEffect(()=>{
  //     props.getimage(formState['schema']);

  //     // getSchemasList();
  // },[formState,schemaList])

  //   console.log(formState);

  return (
    <>
      <form
        onSubmit={sendMail}
        action="#"
        class="flex flex-col m-8 p-8 space-y-5 bg-gray-600 rounded-[30px] justify-between place-items-center content-between place-content-between"
      >
        <div className="w-full gap-5 ">
          <div className="flex flex-col gap-3">
            <div className="">
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Opening{" "}
              </label>
            </div>
            <div className="flex gap-3">
              <div class="flex justify-center gap-3">
                <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="radio"
                    name="iproduct"
                    id="inlineRadio1"
                    value="in"
                    onChange={(e) => {
                      changeHandler(e);
                      props.getOpening(e.target.value);
                    }}
                  />
                  <label
                    class="block mb-2 text-sm font-light text-gray-900 dark:text-gray-300"
                    for="inlineRadio1"
                  >
                    In
                  </label>
                </div>

                <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="radio"
                    name="iproduct"
                    id="inlineRadio2"
                    value="out"
                    onChange={(e) => {
                      changeHandler(e);
                      props.getOpening(e.target.value);
                    }}
                  />
                  <label
                    class="block mb-2 text-sm font-light text-gray-900 dark:text-gray-300"
                    for="inlineRadio2"
                  >
                    Out
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Total Height
              </label>
              <input
                onChange={changeHandler}
                type="text"
                id="height"
                name="height"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light "
                required
                placeholder="Enter Height"
              />
              {!validations.heightIsValid ? (
                <p>The height value should be between 1900 and 3000</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Total Width{" "}
              </label>
              <input
                onChange={changeHandler}
                type="text"
                id="width"
                name="width"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Width"
                required
              />
              {!validations.widthIsValid ? (
                <p>
                  The width / number of door value should be between 600 and
                  1200
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                No of Doors{" "}
              </label>
              <input
                onChange={(e) => {
                  getSchemasList(schema[e.target.value]);
                  console.log(schema[e.target.value]);
                  props.getimage(schema[e.target.value][0]);
                  changeHandler(e, "num");
                }}
                type="number"
                min={1}
                max={14}
                id="ndoor"
                name="ndoor"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter a number between 1-14"
                required
              />
            </div>
            <div>
              <label
                for="schema"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Schema
              </label>
              <select
                name="schema"
                onChange={(e) => {
                  changeHandler(e);
                  props.getimage(e.target.value);
                }}
                id="subject"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              >
                {/* <option key={''} value={''}>{''}</option> */}
                {schemaList.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
                {/* <option key={''} value={''}>{''}</option> */}
              </select>
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
            disabled={
              !validations.heightIsValid || !validations.widthIsValid
                ? true
                : false
            }
            className={`mx-auto rounded-full bg-blue-500 justify-center py-3 px-5 text-sm font-medium text-center text-white  bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:cursor-not-allowed`}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
