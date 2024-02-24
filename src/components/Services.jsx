import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Get Best Prices",
      subTitle:
        "Pay through our application and save thousands and get amazing rewards.",
    },
    {
      icon: service2,
      title: "Covid Safe",
      subTitle:
        "We have all the curated hotels that have all the precaution for a covid safe environment.",
    },
    {
      icon: service3,
      title: "Flexible Payment",
      subTitle:
        "Enjoy the flexible payment through our app and get rewards on every payment.",
    },
    {
      icon: service4,
      title: "Find The Best Near You",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
  ];

  return (
    <section id="services" className="py-20 grid grid-cols-1 md:grid-cols-4 gap-4">
      {data.map((service, index) => (
        <div key={index} className="service bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
          <div className="icon mb-4">
            <img src={service.icon} alt="" className="h-14" />
          </div>
          <h3 className="text-lg font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.subTitle}</p>
        </div>
      ))}
    </section>
  );
}
