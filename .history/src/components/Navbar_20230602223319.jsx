import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} className="w-[124px] h-[32px] mt-[35px]" alt="menu" />
    </nav>
  );
};

export default Navbar;
