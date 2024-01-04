"use client";
import React from "react";
import { motion } from "framer-motion";
import PageTitle from "./PageTitle";
import CardBlog from "./CardBlog";

const Blog = () => {
  const blogItems = [
    {
      image: "/event4.svg",
      href: "#",
      title: "Reog Ponorogo",
      alt: "Reog Ponorogo",
      dissabled: true,
    },
    {
      image: "/event1.svg",
      href: "#",
      title: "Recapt Event ReogRealm",
      alt: "Recapt Event ReogRealm",
      dissabled: true,
    },
    {
      image: "/event3.svg",
      href: "#",
      title: "Perkembangan budaya Indonesia",
      alt: "Perkembangan budaya Indonesia",
      dissabled: true,
    },
  ];

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="blog"
      className="bgProjects max-container padding-container py-10"
    >
      <PageTitle subtitle="Artikel terbaru dari ReogRealm" title="blog" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerVariants}
        className="my-10 flex flex-col gap-5 lg:flex-row justify-center items-center"
      >
        {blogItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              delay: 0.3 + index * 0.1,
              ease: "easeInOut",
            }}
          >
            <CardBlog
              alt={item.alt}
              dissabled={item.dissabled}
              href={item.href}
              image={item.image}
              title={item.title}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Blog;
