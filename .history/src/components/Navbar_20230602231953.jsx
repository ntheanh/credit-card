import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} className="w-[124px] h-[32px]" alt="logo" />

      <ul className="sm:flex list-none justify-end items-center hidden flex-1">
        {navLinks.map((nav, index) => (
          console.log(index)
          {/* <li
            key={nav.id}
            className="font-poppins font-normal text-white  text-[16px] mr-10 cursor-pointer  "
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li> */}
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
