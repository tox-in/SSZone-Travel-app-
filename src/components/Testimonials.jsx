import React from "react";
import { users } from "../data/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="my-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Happy Customers</h2>
      </div>
      <div className="flex justify-center gap-8 mx-2">
        {/* Map over the array of users */}
        {users.map((user, index) => (
          <div key={index} className="testimonial bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <p className="mb-4">{user.experience}</p>
            <div className="flex items-center">
              <img src={user.image} alt="" className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h4 className="text-lg font-semibold">{user.name}</h4>
                <h4 className="text-lg font-semibold">{user.email}</h4>
                <span className="text-sm">{user.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
