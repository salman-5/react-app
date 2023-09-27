import { HashLink } from "react-router-hash-link";

export default function Front() {
  return (
    <>
      <div className="flex h-screen flex-col space-y-4 py-6 justify-center bg-left bg-hero-pattern bg-cover bg-stone-700 bg-blend-overlay ">
        <h1 className="mx-auto text-5xl text-white font-bold font-Raleway ">
          Emital Doors
        </h1>
        <h6 className="mx-auto text-2xl text-white">
          Unlock the Beauty of Your Space
        </h6>
        <HashLink
          to="#contact"
          smooth
          className="hover:bg-orange-400 hover:text-white mx-auto px-2 py-1 text-center font-light text-white rounded-full border-orange-400 border-2 bg-transparent transition duration-150 ease-in scroll-smooth"
        >
          Get A Quote{" "}
        </HashLink>
      </div>
    </>
  );
}
