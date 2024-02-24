import { data as destinationData } from "../data/data";
import {React, useState} from 'react';

export default function Recommend() {
  const destinations = [
    {
      destinationData
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);

  return (
    <section id="recommend" className="py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Recommended Destinations</h2>
      </div>
      <div className="flex justify-center mb-4">
        <ul className="flex">
          {packages.map((pkg, index) => (
            <li
              key={index}
              onClick={() => setActive(index + 1)}
              className={`px-4 py-2 cursor-pointer ${
                active === index + 1 ? "border-b-2 border-purple-600" : ""
              }`}
            >
              {pkg}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="p-4 rounded-xl shadow-md transition-transform hover:scale-105"
          >
            <img src={destination.image} alt="" className="w-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
            <p className="text-gray-600 mb-4">{destination.subTitle}</p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-1">
                <img src={destinationData.image} alt="" className="w-6 h-6 rounded-full" />
                <img src={destinationData.image} alt="" className="w-6 h-6 rounded-full" />
                <img src={destinationData.image} alt="" className="w-6 h-6 rounded-full" />
              </div>
              <h4 className="text-lg font-semibold">{destination.cost}</h4>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>1000 Kms</span>
              <span>{destination.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
