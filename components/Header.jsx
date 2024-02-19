import React from "react";
import { PiScissorsThin } from "react-icons/pi";

const Header = () => {
  return (
    <div className="w-full fixed top-20 flex flex-col items-center justify-center mt-10 px-10">
      <div className="w-full">
        <h1 className="flex flex-col font-extrabold text-2xl">
          안녕하세요. <span>카카오헤어샵입니다.</span>
        </h1>
      </div>
      <div className="flex flex-col">
        <PiScissorsThin />
        <h1>헤어샵</h1>
      </div>
      <div className="flex flex-col">
        <PiScissorsThin />
        <h1>헤어샵</h1>
      </div>{" "}
      <div className="flex flex-col">
        <PiScissorsThin />
        <h1>헤어샵</h1>
      </div>{" "}
      <div className="flex flex-col">
        <PiScissorsThin />
        <h1>헤어샵</h1>
      </div>{" "}
      <div className="flex flex-col">
        <PiScissorsThin />
        <h1>헤어샵</h1>
      </div>{" "}
      <div className="flex flex-col">
        <PiScissorsThin />
        <h1>헤어샵</h1>
      </div>{" "}
      <div className="flex flex-col">
        <PiScissorsThin />
        <h1>헤어샵</h1>
      </div>{" "}
      <div className="flex flex-col">
        <PiScissorsThin />
        <h1>헤어샵</h1>
      </div>
    </div>
  );
};

export default Header;
