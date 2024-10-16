import Image from "next/image";
import React from "react";
import { FiBook } from "react-icons/fi";
import { CgQuote } from "react-icons/cg";
import Link from "next/link";

const BlogTestimonial = () => {
  return (
    <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="bg-fillGray p-6 sm:p-8 rounded-xl border border-borderGray flex flex-col justify-between">
        <div className="flex flex-col items-start gap-4">
          <div className="bg-[#323232] p-2 rounded-xl">
            <FiBook className="text-white text-3xl" />
          </div>

          <div>
            <h3 className="text-lg text-white">Blog</h3>
            <p className="text-neutral-400">
              Case studies and everything that interests me.
            </p>
          </div>
        </div>
        <Link href="/blog">
          <button className="bg-neutral-800 text-white px-4 py-2 mt-4 rounded-lg self-start">
            More
          </button>
        </Link>
      </div>

      <div className="bg-fillGray p-6 sm:p-8 rounded-xl border border-borderGray">
        <blockquote className="text-neutral-400 mb-8 italic">
          "Collaborating with Marc on blinq and various other projects has been
          great. As a Junior Frontend Developer, he brings valuable support to
          my React development work. He quickly familiarizes himself with new
          tools, requirements, and interfaces, then implements them
          independently. His reliability, attention to detail, and dedication
          make him a valuable member of my team."
        </blockquote>
        <div className="flex items-center mt-4">
          <Image
            src="/felix_color.jpg"
            width={60}
            height={60}
            className="rounded-full mr-4"
            alt="Profilbild"
          />
          <div>
            <h3 className="text-white text-base">Felix Hagspiel</h3>
            <p className="text-neutral-400 text-sm">Head of Tech – blinq</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTestimonial;
