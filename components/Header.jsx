import React from "react";
import { PiScissorsThin } from "react-icons/pi";
import Hair from "@/public/images/hair.png";
import Nail from "@/public/images/nail.png";
import One from "@/public/images/one.png";
import Barber from "@/public/images/barber.png";
import First from "@/public/images/first.png";
import Event from "@/public/images/event.png";
import Score from "@/public/images/score.png";
import Coupon from "@/public/images/coupon.gif";
import Channel from "@/public/images/channel.png";
import Style from "@/public/images/style.png";
import Image from "next/image";
import Hero from "./Hero";

const Header = () => {
  return (
    <div
      id="header"
      className="max-w-screen-md w-full flex flex-col items-center justify-center pt-[50px] px-[16px] "
    >
      <div className="w-full ">
        <h1 className="flex flex-col font-bold text-3xl">
          안녕하세요. <span>카카오헤어샵입니다.</span>
        </h1>
      </div>
      <div className="w-full flex justify-between flex-wrap pt-8 bg-white rounded-2xl z-20">
        <div className="header-icons">
          <Image src={Hair} width={70} height={70} alt="hair" />
          <h1 className="text-[13px]">헤어샵</h1>
        </div>
        <div className="header-icons">
          <Image src={Nail} width={70} height={70} alt="hair" />
          <h1 className="text-[13px]">네일샵</h1>
        </div>
        <div className="header-icons">
          <Image src={One} width={70} height={70} alt="hair" />
          <h1 className="text-[13px]">1인샵</h1>
        </div>
        <div className="header-icons">
          <Image src={Barber} width={70} height={70} alt="hair" />
          <h1 className="text-[13px]">바버샵</h1>
        </div>
        <div className="header-icons">
          <Image src={First} width={70} height={70} alt="hair" />
          <h1 className="text-[13px]">첫방문할인</h1>
        </div>
        <div className="header-icons">
          <Image src={Coupon} width={70} height={70} alt="hair" />
          <h1 className="text-[13px]">웰컴쿠폰팩</h1>
        </div>
        <div className="header-icons">
          <Image src={Score} width={70} height={70} alt="hair" />
          <h1 className="text-[13px]">별점높은샵</h1>
        </div>
        <div className="header-icons">
          <Image src={Event} width={70} height={70} alt="hair" />
          <h1 className="text-[13px]">빈폴이벤트</h1>
        </div>
        <div className="header-icons">
          <Image src={Channel} width={70} height={70} alt="hair" />
          <h1 className="text-[13px]">채널추가</h1>
        </div>
        <div className="header-icons">
          <Image src={Style} width={70} height={70} alt="hair" />
          <h1 className="text-[13px]">스타일TIP</h1>
        </div>
      </div>
      {/* <div className="bg-gray-400 absolute top-0 h-20" /> */}
      <Hero />
    </div>
  );
};

export default Header;
