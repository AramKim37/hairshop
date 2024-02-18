import React from "react";
import { CiLocationOn } from "react-icons/ci";

const Header = () => {
  return (
    <div className="fixed top-0 p-2 bg-white flex flex-col items-center gap-5">
      <div className="flex items-center gap-5">
        <h1 className="text-xl">
          kakao<span className="font-bold">hairshop</span>
        </h1>
        <CiLocationOn />
      </div>
      <div className="w-[500px] border-b-2 pb-2">
        <ul className="flex items-center justify-around gap-10 uppercase">
          <li className="">Home</li>
          <li>My Area</li>
          <li>Style</li>
          <li>Reservation</li>
          <li>My</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
