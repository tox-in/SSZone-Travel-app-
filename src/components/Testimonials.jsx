import React from "react";
import avatarImage from "../assets/avatarImage.jpeg";

export default function Testimonials() {
  return (
    <section id="testimonials" className="my-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Happy Customers</h2>
      </div>
      <div className="flex justify-center gap-8 mx-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="testimonial bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.
            </p>
            <div className="flex items-center">
              <img src={avatarImage} alt="" className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Kishan Sheth</h4>
                <span className="text-sm">CEO - Shashaan Web Solutions</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}