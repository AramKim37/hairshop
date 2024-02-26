"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  return (
    <div className="max-w-screen-md w-full flex flex-col p-5 gap-5 fixed top-0 bg-white z-30">
      <div className="flex gap-5 items-center justify-center">
        <h1>
          kakao<span className="font-extrabold">hairshop</span>
        </h1>
        <CiLocationOn className="w-5 h-5 font-extrabold" />
      </div>
      <div className="border-b">
        <ul className="w-full flex items-center justify-around h-[50px] mx-auto">
          <li
            onClick={() => handleItemClick(0)}
            className={`list ${selectedItem === 0 ? "selected" : ""}`}
          >
            <Link href="/">홈</Link>
          </li>
          <li
            onClick={() => handleItemClick(1)}
            className={`list ${selectedItem === 1 ? "selected" : ""}`}
          >
            <Link href="/myarea">내주변</Link>
          </li>
          <li
            onClick={() => handleItemClick(2)}
            className={`list ${selectedItem === 2 ? "selected" : ""}`}
          >
            스타일북
          </li>
          <li
            onClick={() => handleItemClick(3)}
            className={`list ${selectedItem === 3 ? "selected" : ""}`}
          >
            예약
          </li>
          <li
            onClick={() => handleItemClick(4)}
            className={`list ${selectedItem === 4 ? "selected" : ""}`}
          >
            마이
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
