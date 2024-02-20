import React from "react";
import { CiLocationOn } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="max-w-screen-md w-full flex flex-col p-5 gap-5 fixed top-0 bg-white  px-[50px]">
      <div className="flex gap-5 items-center justify-center">
        <h1>kakaohairshop</h1>
        <CiLocationOn />
      </div>
      <div className="border-b">
        <ul className="w-full rounded-full flex items-center justify-around h-[50px] mx-auto spatial">
          <li className="list">홈</li>
          <li className="list">내주변</li>
          <li className="list">스타일북</li>
          <li className="list">에약</li>
          <li className="list">마이</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
