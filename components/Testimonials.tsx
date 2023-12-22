"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Testimoni } from "@/constant/content";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Testimoni.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Testimoni.length) % Testimoni.length
    );
  };

  return (
    <section className="max-container padding-container my-20">
      <div className="flexCenter flex-col items-center my-10">
        <p className="capitalize font-semibold text-rose-500">testimonials</p>
        <h3 className="font-bold text-3xl text-center capitalize text-slate-900">
          Pendapat orang tentang{" "}
          <span className="bg-gradient-to-t from-red-500 to-yellow-400 text-transparent bg-clip-text ">
            ReogRealm
          </span>
        </h3>
      </div>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flexCenter flex-col items-center min-h-[300px]"
      >
        <p className="font-bold text-2xl text-slate-700">
          {Testimoni[currentIndex].name}
        </p>
        <p className="text-sm text-blue-500">{Testimoni[currentIndex].title}</p>
        <p className="text-justify md:text-center md:w-8/12 my-5 min-h-[100px]">
          "{Testimoni[currentIndex].quote}"
        </p>

        <Image
          key={currentIndex}
          src={`/user${currentIndex + 1}.png`}
          width={70}
          height={70}
          alt={`testimonials${currentIndex + 1}`}
        />
      </motion.div>

      <div className="flex justify-center items-center gap-5 mt-4">
        <motion.div
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.8 }}
          onClick={prevTestimonial}
          className="text-white cursor-default lg:cursor-pointer bg-slate-900 shadow-lg rounded-full py-2 w-28 px-5"
        >
          Previous
        </motion.div>
        <motion.div
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.8 }}
          onClick={nextTestimonial}
          className="text-white cursor-default lg:cursor-pointer bg-slate-900 w-28 shadow-lg rounded-full py-2 px-5 text-center"
        >
          Next
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
