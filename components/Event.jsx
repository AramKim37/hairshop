"use client";
import React, { useEffect, useState } from "react";
import Bok from "@/public/images/복.png";
import New from "@/public/images/신규.png";
import Coupon from "@/public/images/쿠폰.png";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Event = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 2500);
  });
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const eventImages = [Bok, New, Coupon];
  const handlePrevImage = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? eventImages.length - 1 : prevIndex - 1
    );
  };
  const handleNextImage = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
  };

  return (
    <div className="w-[90%] mx-auto relative">
      <Image
        src={eventImages[currentImgIndex]}
        alt="img"
        className="rounded-xl"
      />
      <button onClick={handlePrevImage} className="flex items-center">
        <span className="absolute top-10 left-0 bg-slate-400 py-5 px-2 opacity-50">
          <FaArrowLeft className="text-white text-[30px] " />
        </span>
      </button>
      <button onClick={handlePrevImage} className="flex items-center">
        <span className="absolute top-10 right-0 bg-slate-400 py-5 px-2 opacity-50">
          <FaArrowRight className="text-white text-[30px] " />
        </span>
      </button>
    </div>
  );
};

export default Event;
