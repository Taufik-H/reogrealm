import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-container p-container flexCenter">
      <div className="w-8/12 text-left">
        <div className="uppercase mt-10 mb-5 font-semibold text-xs text-red-500 tracking-[5px]  flex items-center">
          indonesian culturity <hr className="w-12 border-red-500" />
        </div>
        <div className="text-5xl  text-slate-900">
          <h1 className=" font-extralight leading-[60px]">
            Merayakan <span className="font-bold">Keindahan Seni</span> dan
            <span className="font-bold mr-2">Budaya </span>
            Kita
          </h1>
          <h1 className="font-extrabold py-2 bg-gradient-to-t from-red-500 to-orange-500 text-transparent bg-clip-text">
            Reog Ponorogo
          </h1>
          <p className="text-slate-500 text-[14px] w-11/12 leading-[21px] my-3">
            Sambutlah keajaiban seni Reog Ponorogo dengan kami di
            <span className="font-semibold">ReogRealm</span>. Kami adalah
            komunitas yang berkomitmen untuk melestarikan dan memajukan seni
            tradisional yang kaya ini. Bersama, kita akan mengeksplorasi dan
            merayakan keindahan budaya Indonesia.
          </p>
          <Button className="bg-red-500 shadow-lg shadow-red-200 py-[27px] mt-8 px-[22px] text-white hover:bg-red-600 hover:text-white transition-all ease-in-out duration-200 rounded-full">
            Gabung Komunitas
          </Button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pattern.svg"}
          height={720}
          width={720}
          alt="bg-pattern"
          className=""
        />
        <div className="absolute top-[20px] left-0 flex">
          <Image
            src={"/lion1.svg"}
            width={283.72}
            height={384.64}
            alt="reog-1"
            className="-mt-20"
          />
          <p className="flex gap-2 text-[12px] absolute right-[15px] top-16 bg-white p-3 shadow-2xl shadow-slate-200  rounded-full">
            Trusted community website{" "}
            <Image src={"/trusted.svg"} width={20} height={20} alt="trusted" />
          </p>
          <Image
            src={"/lion2.svg"}
            width={283.72}
            height={384.64}
            alt="reog-1"
            className="mt-32 -ml-5"
          />
          <div className="absolute bottom-0 bg-white rounded-2xl shadow-xl p-3 ">
            <div className="flex gap-3 items-center">
              <Image
                src={"/macan.svg"}
                height={50}
                width={50}
                alt="profile-community"
              />
              <div className="">
                <p className="font-semibold">RPG Community</p>
                <p className="font-light text-xs text-slate-500">Ponorogo</p>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
