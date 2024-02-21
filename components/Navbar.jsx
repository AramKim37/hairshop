"use client";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  return (
    <div className="max-w-screen-md w-full flex flex-col p-5 gap-5 fixed top-0 bg-white  px-[50px]">
      <div className="flex gap-5 items-center justify-center">
        <h1>
          kakao<span className="font-extrabold">hairshop</span>
        </h1>
        <CiLocationOn className="w-5 h-5 font-extrabold" />
      </div>
      <div className="border-b ">
        <ul className="w-full rounded-full flex items-center justify-around h-[50px] mx-auto">
          <li
            onClick={() => handleItemClick(0)}
            className={`list ${selectedItem === 0 ? "selected" : ""}`}
          >
            홈
          </li>
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
