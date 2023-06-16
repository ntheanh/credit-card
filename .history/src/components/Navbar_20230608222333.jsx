import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/";

const Navbar = () => {
  return (
    <nav className="flex w-full py-6 justify-between items-center navbar">
      <img src={logo} alt="bank" className="w-[124px] h-[32px]" />

      <ul>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`text-white`}></li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
