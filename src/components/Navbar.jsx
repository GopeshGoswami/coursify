import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import accountImg from "../assets/account.jpeg";

const Navbar = () => {
  return (
    <nav className="">
      {/* Nav Top */}
      <div className="flex items-center justify-around py-5">
        {/* Logo */}
        <h2 className="text-2xl">Finder</h2>

        {/* Nav Items */}
        <ul className="hidden md:flex gap-20">
          <li className="text-[#3f6cdf]">Looking For</li>
          <li>Hiring</li>
        </ul>

        {/* Account */}
        <div className="flex items-center gap-2 md:gap-5">
          <div>
            <img src={accountImg} alt="" className="max-h-10 rounded-full" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <p className="font-bold md:block hidden">Gopesh Goswami</p>
              <AiFillCaretDown />
            </div>
            <p className="font-light text-sm md:block hidden">Looking for</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#e1e1e1] " />

      {/* Nav Bottom */}
    </nav>
  );
};

export default Navbar;
