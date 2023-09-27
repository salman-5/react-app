import ScrollToTop from "./ScrollToTop";
import { HashLink } from "react-router-hash-link";
export default function MenuElement({ func, name }) {
  return (
    <HashLink
      // href={`#${props.name.toLowerCase()}`}
      to={`/#${name.toLowerCase()}`}
      className="font-bold text-xl text-[#444444] p-4 font-Open-sans cursor-pointer "
    >
      {name}
    </HashLink>
  );
}
