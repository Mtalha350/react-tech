import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#fff] p-4">
      <div className="max-w[1240px] py-[12px] items-center flex justify-between mx-auto">
        <div className="text-3xl font-bold">Tech</div>
        {toggle ? (
          <IoMdClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <IoMdMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex text-black gap-10">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Responsive menu */}
        <ul
          className={`duration-300 md:hidden w-full  h-screen text-white fixed bg-black left-0 top-[92px] ${
            toggle ? "left-[0]" : "left-[-100%]"
          }`}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
}
