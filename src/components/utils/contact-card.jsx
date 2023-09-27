export default function ContactCard(props) {
  return (
    <div className=" shadow-2xl flex flex-col bg-gray-200 w-full h-full place-content-center content-center justify-center rounded-xl p-8 space-y-1">
      {/* <div className="flex flex-auto space-y-4"> */}
      <img src={props.icon} alt="" className="mx-auto w-10 h-10" />
      <h1 className="text-black font-medium  mx-auto font-Poppins">
        {props.title}
      </h1>
      {/* </div> */}

      <a
        href={props.link}
        className="mx-auto text-center text-black text-sm justify font-Open-sans"
      >
        {props.text}
      </a>
    </div>
  );
}
