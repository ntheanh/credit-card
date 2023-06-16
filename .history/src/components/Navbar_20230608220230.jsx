import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 w-full navbar">
      <img src={logo} alt="logo" className="w-[125px] h-[32px]" />

      <ul className="list-none sm:flex justify-end items-center ">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className="text-white">
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
