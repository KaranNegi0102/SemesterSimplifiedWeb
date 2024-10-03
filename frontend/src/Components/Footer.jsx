import React from "react";
import mainlogo from "../assets/mainlogo.jpeg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-white rounded-lg shadow bg-[#D9D9D9] m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <NavLink to="/">
            <img
              src={mainlogo}
              class="h-8"
              alt="Flowbite Logo"
              className="rounded-full"
              height={50}
              width={50}
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-black">
              Semester Simplified
            </span>
          </NavLink>

          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 ">
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Licensing</li>
            <li>Contact</li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text sm:text-center text-black">
          © 2023{" "}
          <NavLink to="/#" class="hover:underline">
            Semester Simplified™
          </NavLink>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
