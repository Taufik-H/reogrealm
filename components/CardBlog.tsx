import Image from "next/image";
import React from "react";
import Button from "./Button";

type CardBlogProps = {
  image: string;
  title: string;
  href: string;
  alt: string;
  dissabled: boolean;
};
const CardBlog = ({ image, title, alt, href, dissabled }: CardBlogProps) => {
  return (
    <div className="my-10">
      <Image
        src={image}
        width={600}
        height={394}
        className="rounded-2xl shadow-lg shadow-gray-300  w-[600px] h-52 object-cover object-top"
        alt={alt}
      />
      <p className="font-bold my-5 ">{title}</p>
      <Button
        className="w-full flex justify-center items-center"
        href={href}
        label="Read More"
        icon="/eye.svg"
        dissabled={dissabled}
      />
    </div>
  );
};

export default CardBlog;
