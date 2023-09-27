import { HashLink } from "react-router-hash-link";
export default function MenuElement({ name, mobMenu, setMobMenu }) {
  return (
    <HashLink
      to={`/#${name.toLowerCase()}`}
      onClick={() => {
        if (mobMenu !== undefined) setMobMenu(!mobMenu);
      }}
      className="font-bold text-xl text-[#444444] p-4 font-Open-sans cursor-pointer"
    >
      {name}
    </HashLink>
  );
}
