import Image from "next/image";
import React from "react";
import Button from "./Button";

type CardEventProps = {
  cover: string;
  title: string;
  desc: string;
  date: string;
  community: string;
  members: string;
  location: string;
};

const CardEvents = ({
  cover,
  title,
  desc,
  date,
  community,
  members,
  location,
}: CardEventProps) => {
  return (
    <div>
      <div className="relative">
        <Image
          className="object-cover rounded-3xl w-full h-[370px]"
          src={cover}
          width={700}
          height={800}
          alt="event-card"
        />
        <div className="absolute bottom-0 text-white p-5 w-full">
          <div className="bg-white flex flex-col gap-2 min-h-24 w-full justify-end rounded-xl backdrop-blur bg-opacity-25 p-2 border-l border-t border-white">
            <div className="flex gap-3 items-center">
              <p className="font-semibold text-sm">{title}</p>
              <Image
                width={20}
                height={20}
                alt="verified"
                src={"/checkwhite.svg"}
              />
            </div>
            <p className="text-[8px]">{desc}</p>
            <div className="capitalize text-sm flex gap-3">
              <Image src={"/clock.svg"} alt="check" width={20} height={20} />
              <p className="text-sm">{date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2">
        <h3 className="font-bold text-xl mt-5">{community}</h3>
        <div className="flexBetween items-center mt-3">
          <div className="">
            <div className="flex gap-3">
              <Image src={"/map.svg"} width={10} height={10} alt="membes" />
              <p className="text-sm font-semibold capitalize text-slate-700">
                {location}
              </p>
            </div>
            <div className="flex gap-3">
              <Image src={"/user.svg"} width={10} height={10} alt="membes" />
              <p className="text-sm font-semibold text-slate-700 capitalize">
                {members}
              </p>
            </div>
          </div>
          <Button href="#" label="Detail Event" icon="/arrow.svg" />
        </div>
      </div>
    </div>
  );
};

export default CardEvents;
