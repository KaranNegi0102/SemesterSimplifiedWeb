import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-300">
      <div className="flex flex-row items-center justify-between px-5 min-h-16 bg-[#D9D9D9]">
        <div>
          <ul className="flex flex-row items-center justify-center gap-3 text-lg font-semibold">
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>About Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="text-lg font-semibold">
          <p>Copyright © <NavLink to={"/"}>SemesterSimplified - 2024</NavLink></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
