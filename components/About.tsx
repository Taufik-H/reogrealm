"use client";
import { MISI } from "@/constant/content";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="p-container max-container py-10" id="about">
      <div className="flexBetween  flex-col-reverse gap-5 md:flex-row md:items-center">
        <motion.div className="lg:w-6/12 p-5 relative flex justify-center items-center">
          <Image
            src={"/pattern.svg"}
            height={1000}
            width={1000}
            alt="about-image"
            className="object-cover object-center absolute top-0 -z-10"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <Image
              src={"/imageabout.svg"}
              height={1000}
              width={1000}
              alt="about-image"
              className="object-contain"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          className="lg:w-6/12"
        >
          <p className="text-red-500 font-semibold capitalize">about</p>
          <h2 className="text-3xl font-bold">
            Tentang{" "}
            <span className="bg-gradient-to-t from-red-500 to-yellow-400 bg-clip-text text-transparent">
              ReogRealm
            </span>
          </h2>
          <p className="mb-5 text-justify text-xs md:text-md text-slate-900">
            Kami adalah komunitas yang tumbuh dengan cinta dan dedikasi terhadap
            seni tradisional Reog Ponorogo. Sejak 2023, kami telah berkomitmen
            untuk melestarikan, mempromosikan, dan mengembangkan kekayaan budaya
            ini agar tetap hidup dan dinikmati oleh generasi masa depan.
          </p>
          <hr className="border-slate-300" />
          <h3 className="my-5 text-lg font-bold bg-gradient-to-t from-red-500 to-yellow-400 bg-clip-text text-transparent">
            Misi kami
          </h3>
          {MISI.map((item, index) => (
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5 + index * 0.1,
                ease: "easeInOut",
              }}
              className="flex gap-4 mb-3"
              key={index}
            >
              <Image src={item.icon} width={20} height={20} alt="icon" />
              <p className="capitalize font-semibold text-slate-900">
                {item.content}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
            className="my-5"
          >
            <Button
              href="#"
              label="Pelajari selengkapnya"
              icon="/arrow.svg"
              dissabled={false}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
