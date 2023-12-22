import React from "react";

import PageTitle from "./PageTitle";
import CardBlog from "./CardBlog";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bgProjects max-container padding-container py-10"
    >
      <PageTitle subtitle="Artikel terbaru dari ReogRealm" title="blog" />
      <div className="my-10 flex flex-col gap-5 lg:flex-row justify-center items-center">
        <CardBlog
          dissabled={false}
          image="/event4.svg"
          href="/blog"
          title="Reog Ponorogo"
          alt="Reog Ponorogo"
        />
        <CardBlog
          image="/event1.svg"
          href="#"
          title="Recapt Event ReogRealm"
          alt="Recapt Event ReogRealm"
          dissabled={true}
        />
        <CardBlog
          dissabled={true}
          image="/event3.svg"
          href="#"
          title="Perkembangan budaya Indonesia"
          alt="Perkembangan budaya Indonesia"
        />
      </div>
    </section>
  );
};

export default Blog;
