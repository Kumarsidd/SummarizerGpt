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
        className="btn text-white font-bold px-10 py-4"
      >
        GitHub
      </button>
    </nav>
  );
};

export default Navbar;
