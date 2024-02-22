import React from "react";

const Hero = () => {
  return (
    <div className="max-w-screen-md w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center  py-10 space-y-5 bg-gray-200 rounded-xl">
        <div className="w-[320px] mx-auto flex gap-10 under-line basis-1/2 items-center justify-center pb-5">
          <h1>역삼동 추천</h1>
          <h1>스타일 추천</h1>
        </div>
        <input type="text" />
        <input type="text" />
      </div>
    </div>
  );
};

export default Hero;
