import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} className="w-[124px] h-[32px]" alt="menu" />

      <ul>
        {navLinks.map((nav,index) => (
          <li key={index} className="inline-block mx-4">
        )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
