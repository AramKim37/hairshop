import Image from "next/image";
import React from "react";
import Shop1 from "@/public/images/shop1.jpeg";
import Shop2 from "@/public/images/shop2.jpeg";
import Shop3 from "@/public/images/shop3.jpeg";
import Shop4 from "@/public/images/shop4.jpeg";
import { TiStar } from "react-icons/ti";
import { RiMessage2Fill } from "react-icons/ri";

const LikeShop = () => {
  return (
    <div className="w-[90%] bg-white px-3 py-5 rounded-xl flex flex-col gap-2">
      <h1 className="text-lg font-bold pb-3">커트 재에약 많은 헤어샵</h1>
      <div className="flex itmes-center justify-center gap-3">
        <div className="flex flex-col gap-2">
          <Image src={Shop1} alt="shop" className="rounded-sm" />
          <h1 className="font-bold">라우라헤어살롱 본점</h1>
          <div className="flex items-center gap-2">
            <TiStar />
            <p className="font-light text-[14px]">4.9</p>
            <RiMessage2Fill />
            <p className="font-light text-[14px]">16</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Image src={Shop2} alt="shop" />
          <h1 className="font-bold">지오헤어 본점</h1>
          <div className="flex items-center gap-2">
            <TiStar />
            <p className="font-light text-[14px]">4.9</p>
            <RiMessage2Fill />
            <p className="font-light text-[14px]">208</p>
          </div>
        </div>
      </div>
      <div className="flex itmes-center justify-center gap-3">
        <div className="flex flex-col gap-2">
          <Image src={Shop3} alt="shop" className="" />
          <h1 className="font-bold">위콤마헤어 본점</h1>
          <div className="flex items-center gap-2">
            <TiStar />
            <p className="font-light text-[14px]">4.9</p>
            <RiMessage2Fill />
            <p className="font-light text-[14px]">31</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Image src={Shop4} alt="shop" />
          <h1 className="font-bold">라크헤어 선릉역점</h1>
          <div className="flex items-center gap-2">
            <TiStar />
            <p className="font-light text-[14px]">4.9</p>
            <RiMessage2Fill />
            <p className="font-light text-[14px]">1,618</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeShop;
