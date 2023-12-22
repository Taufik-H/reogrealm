import React from "react";

type PageTitleProps = {
  title: string;
  subtitle: string;
};
const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <div
      className={`flexCenter items-center flex-col lg:flexStart lg:items-start`}
    >
      <p className=" uppercase font-bold text-xs text-rose-500">{title}</p>
      <h2 className="text-3xl lg:text-4xl mt-5 font-semibold  text-slate-900 capitalize">
        {subtitle}
      </h2>
    </div>
  );
};

export default PageTitle;
