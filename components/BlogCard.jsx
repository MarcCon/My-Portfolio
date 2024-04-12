import React from "react";
import Link from "next/link";

const BlogCard = ({ title, coverPhoto, datePublished, slug }) => {
  const formattedDate = new Date(datePublished).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return (
    <div className="lg:w-80 w-72 rounded-xl shadow-lg bg-lightblue">
      <Link href={"/blog/" + slug}>
        <div className="p-4">
          <img
            className="w-full lg:h-48 h-32 object-cover rounded-lg"
            src={coverPhoto.url}
            alt={title}
          />
        </div>
      </Link>
      <div className="px-6 py-4">
        <div className="text-white lg:text-base text-xs pb-2">
          {formattedDate}
        </div>
        <div className="font-bold lg:text-xl text-base pb-4 text-white">
          {title}
        </div>
        <Link href={"/blog/" + slug}>
          <button className="text-white border text-xs rounded-xl py-1 px-4">
            Mehr Lesen
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
