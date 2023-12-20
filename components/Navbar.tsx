import Link from "next/link";
import React from "react";
import { NAVBAR_LINK } from "@/constant/content";
import { Button } from "./ui/button";
const Navbar = () => {
  return (
    <nav className="max-container px-10 flexBetween py-5 items-center ">
      <Link href={"/"} className="font-bold text-lg">
        ReogRealm
      </Link>
      <ul className="gap-10 hidden lg:flex">
        {NAVBAR_LINK.map((link) => (
          <li key={link.key}>
            <Link
              className="text-slate-600 hover:text-red-500 transition-all ease-in-out duration-200 text-sm hover:font-medium"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="">
        <Button variant={"ghost"} className="text-red-500">
          Login
        </Button>
        <Button className="rounded-full bg-red-500  text-white shadow-lg hover:bg-red-600 hover:text-white transition-all duration-200 ease-in-out shadow-red-100">
          Join Komunitas
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
