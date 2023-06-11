"use client";

import Image from "next/image";
import { logo } from "../../../public/assets";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center w-full mb-10 pt-3 z-10">
      <a href="/">
        <Image src={logo} alt="sumz_logo" className="w-28 object-contain" />
      </a>
      <button
        type="button"
        onClick={() => window.open("https://github.com/kumarsidd/", "_blank")}
        className="bg-black rounded-xl hover:bg-slate-300 hover:text-black text-white font-bold px-8 py-3"
      >
        GitHub
      </button>
    </nav>
  );
};

export default Navbar;
