import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center">
        <div className="brand">
          <div className="container flex items-center cursor-pointer">
            <img src={logo} alt="Travelo Logo" className="w-8 h-8" />
            <span className="font-bold text-xl">Travelo</span>
          </div>
          {navbarState || window.innerWidth <= 768 ? (
            <VscChromeClose
              onClick={() => setNavbarState(false)}
              className="text-2xl cursor-pointer md:hidden"
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setNavbarState(true)}
              className="text-blue-500 text-2xl cursor-pointer md:hidden"
            />
          )}
        </div>

        <ul
          className={`md:flex gap-4 ${
            navbarState || window.innerWidth <= 768 ? "block" : "hidden"
          }`}
        >
          <li>
            <a href="#home" className="text-blue-500 hover:text-blue-700">
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-blue-500 hover:text-blue-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#recommend"
              className="text-blue-500 hover:text-blue-700"
            >
              Places
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-blue-500 hover:text-blue-700"
            >
              Testimonials
            </a>
          </li>
        </ul>
        <button className="hidden md:block px-4 py-2 rounded-full bg-blue-500 text-white text-lg font-semibold hover:bg-blue-700">
          Connect
        </button>
      </nav>

      <div
        className={`md:hidden fixed w-full bg-white top-0 transition duration-300 ${
          navbarState ? "py-12" : "-top-full"
        }`}
      >
        <ul className="text-center">
          <li>
            <a
              href="#home"
              className="block py-4 text-blue-500 hover:text-blue-700"
              onClick={() => setNavbarState(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block py-4 text-blue-500 hover:text-blue-700"
              onClick={() => setNavbarState(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#recommend"
              className="block py-4 text-blue-500 hover:text-blue-700"
              onClick={() => setNavbarState(false)}
            >
              Places
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="block py-4 text-blue-500 hover:text-blue-700"
              onClick={() => setNavbarState(false)}
            >
              Testimonials
            </a>
          </li>
        </ul>
        <button
          className="px-4 py-2 rounded-full bg-blue-500 text-white text-lg font-semibold hover:bg-blue-700 mt-4 mx-auto w-2/3"
          onClick={() => setNavbarState(false)}
        >
          Connect
        </button>
      </div>
    </>
  );
}
