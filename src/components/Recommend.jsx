import React, { useState } from "react";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

// Import the data
import { data } from "../data/data";
import { recommend } from "../data/data";

export default function Recommend() {
  // State to manage active package
  const [active, setActive] = useState(1);

  return (
    <section id="recommend" className="py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Recommended Destinations</h2>
      </div>
      {/* Display the list of packages */}
      <div className="flex w-full  mb-4">
        <ul className="flex w-full justify-between">
          {recommend.map((destination, index) => (
            <li
              key={index}
              onClick={() => setActive(destination.id)}
              className={`px-4 py-2 cursor-pointer text-xl flex  font-bold mb-4 ${
                active === destination.id ? "border-b-2 border-purple-600" : ""
              }`}
            >
              {destination.type}
            </li>
          ))}
        </ul>
      </div>
      {/* Display the grid of destinations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((destination) => (
          <div
            key={destination.id}
            className="p-4 rounded-xl shadow-md transition-transform hover:scale-105"
          >
            {/* Display destination image */}
            {destination.image && (
              <img src={destination.image} alt={destination.name} className="w-full mb-4" />
            )}
            {/* Display destination name */}
            <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
            {/* Display destination description */}
            <p className="text-gray-600 mb-4">{destination.description}</p>
            <div className="flex justify-between items-center mb-4">
              {/* Display icons */}
              <div className="flex gap-1">
                <img src={info1} alt="" className="w-6 h-6 rounded-full" />
                <img src={info2} alt="" className="w-6 h-6 rounded-full" />
                <img src={info3} alt="" className="w-6 h-6 rounded-full" />
              </div>
              {/* Display destination pricing */}
              <h4 className="text-lg font-semibold">{destination.pricing}</h4>
            </div>
            {/* Display distance and duration */}
            <div className="flex justify-between text-gray-600">
              <span>{destination.distance}</span>
              <span>{destination.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
