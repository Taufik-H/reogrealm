import React from "react";
import CardEvents from "./CardEvents";
import { EVENTS } from "@/constant/content";
import { it } from "node:test";
import Image from "next/image";

const Event = () => {
  return (
    <section className="p-container max-container my-5" id="events">
      <div className="my-5">
        <p className="font-bold text-red-500 calitalize">event</p>
        <div className="flexBetween gap-5">
          <div className="text-2xl font-bold capitalize lg:w-4/12">
            Temukan{" "}
            <span className="bg-gradient-to-t from-red-500 to-yellow-400 text-transparent bg-clip-text">
              event besar
            </span>{" "}
            yang kami adakan
          </div>
          <div className="hidden lg:flex gap-3 capitalize items-center lg:cursor-pointer">
            Eksplor Event Kami{" "}
            <div className="bg-red-500 h-fit p-4 rounded-xl">
              <Image
                src="/arrow.svg"
                width={10}
                height={10}
                alt="next"
                className="h-fit"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3 lg:grid-cols-4">
        {EVENTS.map((item, index) => (
          <div key={index}>
            <CardEvents
              cover={item.cover}
              community={item.community}
              date={item.date}
              desc={item.desc}
              location={item.location}
              members={item.members}
              title={item.title}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-3 capitalize items-center justify-center my-10 lg:hidden lg:cursor-pointer">
        Eksplor Event Kami{" "}
        <div className="bg-red-500 h-fit p-4 rounded-xl">
          <Image
            src="/arrow.svg"
            width={10}
            height={10}
            alt="next"
            className="h-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default Event;
