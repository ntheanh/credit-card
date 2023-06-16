import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" className="w-[125px] h-[32px]" />

      <ul className="flex">
        {navLinks.map((nav, index) => (
          <li key={nav.id}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
