import React from "react";
import { services } from "../data/data"; // Assuming the service data is named "services" in the data file

export default function Services() {
  return (
    <section id="services" className="py-20 grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Map over the services array directly */}
      {services.map((service, index) => (
        <div key={index} className="service bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
          <div className="icon mb-4">
            {/* Assuming each service object has an "icon" property */}
            <img src={service.icon} alt="" className="h-14" />
          </div>
          <h3 className="text-lg font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.subTitle}</p>
        </div>
      ))}
    </section>
  );
}