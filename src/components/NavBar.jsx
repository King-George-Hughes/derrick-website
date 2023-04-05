import React, { useState } from "react";
import { menu, close } from "../assets";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);

  const toggleMenu = () => {
    setToggle((prevState) => !prevState);
  };

  console.log(toggle);

  return (
    <nav className="py-6 bg-gradient-to-r from-gradient1 to-gradient2 fixed z-10 backdrop-blur-sm w-full text-white">
      <div className="container mx-auto flex items-center justify-between px-2">
        <a
          href="#"
          className="logo font-bold font-pacifico text-2xl md:text-4xl"
        >
          LOGO
        </a>

        {/* Menu */}
        <ul className="hidden gap-3 md:flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>

        {/* Small Svreen */}
        <div className="cursor-pointer md:hidden sm:block" onClick={toggleMenu}>
          {toggle ? (
            <img src={menu} alt="menu" className="w-8" />
          ) : (
            <img src={close} alt="close" className="w-6" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
