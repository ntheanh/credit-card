import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/";
import styles from "../style";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="flex w-full py-6 justify-between items-center navbar">
      <img src={logo} alt="bank" className="w-[124px] h-[32px]" />

      <ul className="sm:flex hidden items-center list-none justify-end flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer font-poppins text-[16px] font-normal p-2 bg-blue-gradient rounded-[5px] transition duration-300 hover:scale-[1]
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain "
          onClick={() => settoggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[150px] rounded-xl sidebar `}
        >
          <ul className=" flex flex-col items-center list-none justify-end flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`text-white cursor-pointer font-poppins text-[16px] font-normal 
            ${index === navLinks.length - 1 ? "mr-0" : "mb-5"}`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
