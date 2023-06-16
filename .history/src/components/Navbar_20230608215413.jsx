import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
    </nav>
  );
};

export default Navbar;
