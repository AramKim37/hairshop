import Image from "next/image";
import React from "react";
import Ds from "@/public/images/ds.jpeg";
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="max-w-screen-md w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center  py-10 space-y-5 bg-gray-200 rounded-xl">
        <ul className="w-[250px] mx-auto flex gap-10 under-line basis-1/2 items-center justify-center pb-5">
          <h1 className="">역삼동 추천</h1>
          <h1>스타일 추천</h1>
        </ul>
        <div className="w-[90%] mx-auto flex flex-col items-center justify-center bg-white p-2 rounded-xl">
          <div className="w-full flex items-center justify-between">
            <h1 className="font-extrabold">다른지역을 추천해드릴까요?</h1>
            <button className="bg-black text-white text-sm font-extrabold px-3 py-2 rounded-full">
              지역변경
            </button>
          </div>
        </div>
        <div className="bg-white w-[90%] mx-auto p-5 rounded-xl">
          <h1 className="font-extrabold">재예약 많은 디자이너</h1>
          <div className="flex items-center gap-5 pt-3">
            <Image
              src={Ds}
              alt="designer"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="">
              <h1 className="text-[15px] font-extrabold">수석 실장 준석</h1>
              <p className="text-[12px] font-extralight text-gray-500">
                살롱드라피네 강남점
              </p>
              <span className="bg-gray-200 text-[12px] p-1 rounded-xl">
                #다운펌
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 pt-3">
            <Image
              src={Ds}
              alt="designer"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="">
              <h1 className="text-[15px] font-extrabold">수석 실장 준석</h1>
              <p className="text-[12px] font-extralight text-gray-500">
                살롱드라피네 강남점
              </p>
              <span className="bg-gray-200 text-[12px] p-1 rounded-xl">
                #다운펌
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 pt-3">
            <Image
              src={Ds}
              alt="designer"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="">
              <h1 className="text-[15px] font-extrabold">수석 실장 준석</h1>
              <p className="text-[12px] font-extralight text-gray-500">
                살롱드라피네 강남점
              </p>
              <span className="bg-gray-200 text-[12px] p-1 rounded-xl">
                #다운펌
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 pt-3">
            <Image
              src={Ds}
              alt="designer"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="">
              <h1 className="text-[15px] font-extrabold">수석 실장 준석</h1>
              <p className="text-[12px] font-extralight text-gray-500">
                살롱드라피네 강남점
              </p>
              <span className="bg-gray-200 text-[12px] p-1 rounded-xl">
                #다운펌
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 pt-3">
            <Image
              src={Ds}
              alt="designer"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="">
              <h1 className="text-[15px] font-extrabold">수석 실장 준석</h1>
              <p className="text-[12px] font-extralight text-gray-500">
                살롱드라피네 강남점
              </p>
              <span className="bg-gray-200 text-[12px] p-1 rounded-xl">
                #다운펌
              </span>
            </div>
          </div>
        </div>
        <span className="w-[90%] flex mx-auto bg-white p-3 rounded-xl items-center gap-3">
          <IoSearch /> <span>매장, 디자이너 이름으로 검색하세요.</span>
        </span>
      </div>
    </div>
  );
};

export default Hero;
