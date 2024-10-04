import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div>
          <ul className="flex flex-row items-end justify-end gap-5 bg-[#F5F5F5] text-xl py-4 px-4 m-w-screen shadow-xl transition-all duration-500 ease-in-out">
            <li className="hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer">
              Home
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer">
              Support Us
            </li>
            <li>
              <NavLink to="/login">
                <button className="border border-black px-2 py-1 rounded-lg transition-transform duration-300 hover:scale-110 hover:bg-gray-200">
                  Log In
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/register"}>
                <button className="border border-black px-2 py-1 rounded-lg bg-slate-800 text-white transition-transform duration-300 hover:scale-110 hover:bg-slate-700">
                  Register
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
