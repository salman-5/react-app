export default function FooterElement(props) {
  return (
    <a
      href={props.link}
      className="font-bold text-xl text-[#444444] p-4 font-Open-sans cursor-pointer "
    >
      <img src={props.icon} alt="" />
    </a>
  );
}
