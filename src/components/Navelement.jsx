import ScrollToTop from "./ScrollToTop";
export default function MenuElement(props) {
  return (
    <a
      href={`#${props.name.toLowerCase()}`}
      onClick={() => props.func(props.s)}
      className="font-bold text-xl text-[#444444] p-4 font-Open-sans cursor-pointer "
    >
      {props.name}
    </a>
  );
}
