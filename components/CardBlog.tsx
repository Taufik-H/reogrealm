import Image from "next/image";
import React from "react";
type CardBlogProps = {
  title: string;
  desc: string;
  date: string;
  year: string;
  image: string;
};
const CardBlog = ({ title, desc, date, year, image }: CardBlogProps) => {
  return (
    <div>
      <article className="flex bg-white transition hover:shadow-xl">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
            <span>{year}</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>{date}</span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <Image
            src={image}
            height={100}
            width={100}
            alt="blog"
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900">{title}</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              {desc}
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <a
              href="#"
              className="block bg-red-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-red-400"
            >
              Baca Artikel
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CardBlog;
