import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div>
          <ul className="flex flex-row items-end justify-end gap-5 bg-[#F5F5F5] text-xl py-4 px-4 m-w-screen shadow-xl">
            <li>Home</li>
            <li>About Us</li>
            <li>Support Us</li>
            <li>
              <button className="border border-black px-2 py-1 rounded-lg">Log In</button>
            </li>
            <li>
              <button className="border border-black px-2 py-1 rounded-lg bg-slate-800 text-white">Register</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;


// box-shadow: 0px 4px 8px 0px ;
// #00000040
// box-shadow: 0px 4px 8px 0px ;
