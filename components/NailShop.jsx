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
    <div className="w-[90%] items-center">
      <div className="flex gap-2">
        {nail.map((item) => (
          <div key={item.id}>
            <Image
              src={item.img}
              alt="img"
              width={300}
              height={300}
              className="rounded-t-xl"
            />
            <div className="bg-white rounded-b-xl p-2">
              {item.name}
              <div className="flex gap-2 items-center">
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
