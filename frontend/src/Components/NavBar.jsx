import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav className="bg-[#F5F5F5] shadow-xl">
      <ul className="flex flex-row items-center justify-end gap-5 text-xl py-4 px-4 w-full transition-all duration-500 ease-in-out">
        <li className="hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer">
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li className="hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer">
          <NavLink to="/support">Support Us</NavLink>
        </li>
        <li>
          {loggedIn ? (
            <button>Profile</button>
          ) : (
            <NavLink to="/login">
              <button className="border border-black px-2 py-1 rounded-lg transition-transform duration-300 hover:scale-110 hover:bg-gray-200">
                Log In
              </button>
            </NavLink>
          )}
        </li>
        {!loggedIn && (
          <li>
            <NavLink to="/register">
              <button className="border border-black px-2 py-1 rounded-lg bg-slate-800 text-white transition-transform duration-300 hover:scale-110 hover:bg-slate-700">
                Register
              </button>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
