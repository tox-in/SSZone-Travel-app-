import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex justify-evenly bg-blue-200 rounded-md p-10">
      <span className="text-gray-700">Copyright &copy; 2021 Travelo. All rights reserved</span>
      <ul className="flex gap-8">
        <li>
          <a href="#hero" className="text-gray-700 hover:text-blue-500">Home</a>
        </li>
        <li>
          <a href="#services" className="text-gray-700 hover:text-blue-500">About</a>
        </li>
        <li>
          <a href="#recommend" className="text-gray-700 hover:text-blue-500">Places</a>
        </li>
        <li>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-500">Testimonials</a>
        </li>
      </ul>
      <ul className="flex gap-4">
        <li>
          <BsFacebook className="text-gray-700 hover:text-blue-500 text-2xl" />
        </li>
        <li>
          <AiFillInstagram className="text-gray-700 hover:text-blue-500 text-2xl" />
        </li>
        <li>
          <BsLinkedin className="text-gray-700 hover:text-blue-500 text-2xl" />
        </li>
      </ul>
    </footer>
  );
}