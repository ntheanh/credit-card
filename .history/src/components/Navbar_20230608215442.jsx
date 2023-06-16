import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" className="w-[125px] h-[32px]" />
    </nav>
  );
};

export default Navbar;
