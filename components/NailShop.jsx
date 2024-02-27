"use client";
import Image from "next/image";
import React from "react";
import { TiStar } from "react-icons/ti";
import { RiMessage2Fill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";

const NailShop = () => {
  const nail = [
    {
      id: 1,
      name: "엘리시아 강남점",
      img: "/images/shop1.jpeg",
      rate: "4.9",
      review: "138",
    },
    {
      id: 2,
      name: "엘리시아 강남점",
      img: "/images/shop2.jpeg",
      rate: "4.9",
      review: "321",
    },
  ];

  return (
    <div className="w-[90%] mx-auto items-center">
      <h1 className="p-1 font-bold text-xl">예약 가능한 네이샵</h1>
      <div className="flex gap-2 pt-3 items-center justify-center mx-auto">
        {nail.map((item) => (
          <div key={item.id}>
            <Image
              src={item.img}
              alt="img"
              width={400}
              height={300}
              className="rounded-t-xl"
            />
            <div className="bg-white rounded-b-xl p-2 font-bold">
              {item.name}
              <div className="flex gap-2 items-center font-light text-[13px]">
                <TiStar /> {item.rate}
                <RiMessage2Fill />
                {item.review}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NailShop;
