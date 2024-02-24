import React from "react";
import homeImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="hero" className=" mt-16 pt-[300px] z-[-20] w-full">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <img src={homeImage} alt="" className="w-full" />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-4">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide">
            TRAVEL TO EXPLORE
          </h1>
          <p className="text-lg mt-4 lg:w-2/3 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
            tenetur!
          </p>
        </div>
        <div className="bg-white bg-opacity-75 rounded-md p-4 flex flex-wrap justify-center gap-4">
          <div className="flex flex-col items-center">
            <label htmlFor="" className="text-lg text-blue-800">
              Where you want to go
            </label>
            <input
              type="text"
              placeholder="Search Your location"
              className="bg-transparent border-none text-center w-48 md:w-auto"
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="" className="text-lg text-blue-800">
              Check-in
            </label>
            <input type="date" className="bg-transparent border-none" />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="" className="text-lg text-blue-800">
              Check-out
            </label>
            <input type="date" className="bg-transparent border-none" />
          </div>
          <button className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-md transition duration-300 hover:bg-blue-600">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}
