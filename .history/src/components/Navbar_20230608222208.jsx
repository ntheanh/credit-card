import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/";

const Navbar = () => {
  return (
    <nav className="flex w-full py-6 justify-between items-center">
      <img src={logo} alt="bank" className="" />
    </nav>
  );
};

export default Navbar;
