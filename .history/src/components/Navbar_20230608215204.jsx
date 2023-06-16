import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/";

const Navbar = () => {
  return (
    <nav className="">
      <img src={logo} alt="logo" className="h-[34px]" />
    </nav>
  );
};

export default Navbar;
