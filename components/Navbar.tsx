"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NAVBAR_LINK } from "@/constant/content";
import { Button } from "./ui/button";
import Hamburger from "hamburger-react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="max-container px-10 flexBetween bg-slate-50 py-5 items-center  w-full fixed top-0 z-10">
        <Link href={"/"} className="font-bold text-lg">
          ReogRealm
        </Link>
        <ul className="gap-10 hidden lg:flex">
          {NAVBAR_LINK.map((link) => (
            <li key={link.key}>
              <Link
                className="text-slate-600 hover:text-red-500 transition-all ease-in-out duration-200 text-sm hover:font-medium"
                href={`#${link.href}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex ">
          <Button className="rounded-full bg-red-500  text-white shadow-lg hover:bg-red-600 hover:text-white transition-all duration-200 ease-in-out shadow-red-100">
            Join Komunitas
          </Button>
        </div>
        <div className="block lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </div>
      </nav>
      {isOpen && (
        <ul className="flex flex-col gap-3 p-5 pt-6 lg:hidden text-center z-20  bg-slate-50 shadow-lg fixed w-full top-[60px] transition-all duration-200">
          {NAVBAR_LINK.map((link) => (
            <li key={link.key}>
              <Link
                className="text-slate-600 hover:text-red-500 transition-all ease-in-out duration-200 text-sm hover:font-medium"
                href={`#${link.href}`}
                onClick={() => setOpen(!isOpen)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <div className="flex flex-col ">
            <Button className="rounded-full bg-red-500  text-white shadow-lg hover:bg-red-600 hover:text-white transition-all duration-200 ease-in-out shadow-red-100">
              Join Komunitas
            </Button>
          </div>
        </ul>
      )}
    </>
  );
};

export default Navbar;
