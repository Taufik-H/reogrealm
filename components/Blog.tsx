import React from "react";
import CardBlog from "./CardBlog";
import { BLOGS } from "@/constant/content";

const Blog = () => {
  return (
    <div className="p-container max-container my-10 bg-slate-200 py-10">
      <p className="text-red-500 font-semibold capitalize">blogs</p>
      <h3 className="text-3xl w-3/12 font-bold">
        Baca <span>Artikel</span> seputar{" "}
        <span className="text-transparent bg-gradient-to-t from-red-500 to-yellow-400 bg-clip-text">
          reog ponorogo
        </span>
      </h3>
      <div className="flex flex-col md:flex-row gap-2 mt-5">
        {BLOGS.map((blog, index) => (
          <div key={index}>
            <CardBlog
              date={blog.date}
              title={blog.title}
              year={blog.year}
              desc={blog.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
