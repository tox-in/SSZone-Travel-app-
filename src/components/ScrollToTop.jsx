import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        scrollState ? "block" : "hidden"
      } fixed cursor-pointer z-10 bottom-8 right-8 bg-blue-500 p-4 rounded-full transition-opacity duration-300`}
      onClick={toTop}
    >
      <img src={logo} alt="" className="h-6" />
    </div>
  );
}