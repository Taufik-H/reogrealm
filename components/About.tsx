import { MISI } from "@/constant/content";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <section className="p-container max-container py-10">
      <div className="flexBetween  flex-col-reverse gap-5">
        <div className="">
          <Image
            src={"/imageabout.svg"}
            height={1000}
            width={1000}
            alt="about-image"
            className="object-contain"
          />
        </div>
        <div className="">
          <p className="text-red-500 font-semibold capitalize">about</p>
          <h2 className="text-3xl font-bold">
            Tentang{" "}
            <span className="bg-gradient-to-t from-red-500 to-yellow-400 bg-clip-text text-transparent">
              ReogRealm
            </span>
          </h2>
          <p className="mb-5 text-justify text-xs text-slate-500">
            Kami adalah komunitas yang tumbuh dengan cinta dan dedikasi terhadap
            seni tradisional Reog Ponorogo. Sejak 2023, kami telah berkomitmen
            untuk melestarikan, mempromosikan, dan mengembangkan kekayaan budaya
            ini agar tetap hidup dan dinikmati oleh generasi masa depan.
          </p>
          <hr />
          <h3 className="my-5 text-lg font-bold bg-gradient-to-t from-red-500 to-yellow-400 bg-clip-text text-transparent">
            Misi kami
          </h3>
          {MISI.map((item, index) => (
            <div className="flex gap-4 mb-3" key={index}>
              <Image src={item.icon} width={20} height={20} alt="icon" />
              <p className="capitalize font-semibold text-slate-900">
                {item.content}
              </p>
            </div>
          ))}
          <div className="my-5">
            <Button href="#" label="Gabung komunitas" icon="/arrow.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
