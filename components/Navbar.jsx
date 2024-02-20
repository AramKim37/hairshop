import React from "react";
import { CiLocationOn } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="max-w-screen-md w-full flex flex-col p-5 gap-5 fixed top-0 bg-white  px-[50px]">
      <div className="flex gap-5 items-center justify-center">
        <h1>kakaohairshop</h1>
        <CiLocationOn />
      </div>
      <ul className="w-full bg-gray-300 rounded-full flex items-center justify-around h-[50px] mx-auto spatial">
        <li>홈</li>
        <li>내주변</li>
        <li>스타일북</li>
        <li>에약</li>
        <li>마이</li>
      </ul>
    </div>
  );
};

export default Navbar;
