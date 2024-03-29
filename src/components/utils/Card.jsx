import icon from "../../assets/card.svg";

export default function Card(props) {
  return (
    <div className="bg-bg-gray w-[380px] rounded-xl p-8 space-y-6">
      <div className="flex flex-auto items-center space-x-4">
        <img src={icon} className=" text-head-text" alt="" />
        <h1 className="htext uppercase font-Poppins">
          {props.title}
        </h1>
      </div>

      <p className="text-justify text-black text-s justify font-Open-sans">
        {props.text}
      </p>
    </div>
  );
}
