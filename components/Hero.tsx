import React from "react";
import Button from "./Button";
import Image from "next/image";
import { AVATAR } from "@/constant/content";

const Hero = () => {
  return (
    <div className="max-container p-container flex-col  lg:flex-row flexCenter items-center  my-20 ">
      <div className="lg:w-8/12 text-center lg:text-left w-full flexCenter flex-col">
        <div className="uppercase mt-10 mb-5  font-semibold text-xs  flexCenter flex-col lg:justify-start  lg:flex-row text-red-500 tracking-[5px]  flex items-center">
          indonesian culturity <hr className="w-12 border-red-500" />
        </div>
        <div className="text-[40px]  text-slate-900">
          <h1 className=" font-extralight leading-[60px]">
            Merayakan <span className="font-bold">Keindahan Seni</span> dan
            <span className="font-bold mr-2">Budaya </span>
            Kita
          </h1>
          <h1 className="font-extrabold py-2 bg-gradient-to-t from-red-500 to-orange-500 text-transparent bg-clip-text">
            Reog Ponorogo
          </h1>
          <p className="text-xs lg:text-md text-slate-500 text-[14px] lg:w-11/12 leading-[21px] my-3">
            Sambutlah keajaiban seni Reog Ponorogo dengan kami di
            <span className="font-semibold">ReogRealm</span>. Kami adalah
            komunitas yang berkomitmen untuk melestarikan dan memajukan seni
            tradisional yang kaya ini. Bersama, kita akan mengeksplorasi dan
            merayakan keindahan budaya Indonesia.
          </p>
        </div>
        <Button href="#" icon="/arrow.svg" label="Join Komunitas" />
      </div>
      <div className="relative pb-32 lg:pb-0 flexCenter lg:justify-end ">
        <Image
          src={"/pattern.svg"}
          height={720}
          width={720}
          alt="bg-pattern"
          className=""
        />
        <div className="absolute top-[20px] left-[-100px] md:left-[100px] md:right-0 lg:left-0 flex">
          <Image
            src={"/lion1.svg"}
            width={283.72}
            height={384.64}
            alt="reog-1"
            className="lg:-mt-20"
          />
          <p className="hidden md:flex gap-2 text-[12px] absolute right-[100px] lg:right-[15px] top-16 bg-white p-3 shadow-2xl shadow-slate-200  rounded-full">
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
          <div className="absolute bottom-0 bg-white rounded-3xl shadow-xl p-4 -left-16  hidden md:block ">
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
            <div className="mt-5 gap-3 flexBetween">
              <div className="flex">
                {AVATAR.map((avatar, index) => (
                  <Image
                    key={avatar.key}
                    src={avatar.src}
                    width={40}
                    height={40}
                    alt={avatar.alt}
                    className={index === 0 ? "" : "-ml-3"}
                  />
                ))}
              </div>
              <Button href="#" icon="" label="Join Komunitas" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
