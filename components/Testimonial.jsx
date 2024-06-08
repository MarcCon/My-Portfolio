import Image from "next/image";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { CgQuote } from "react-icons/cg";

const Testimonial = () => {
  return (
    <div className="bg-gradient-to-r from-fuchsia-600/10 to-pink-600/10 rounded-xl py-8 px-16">
      <span className="text-neutral-400 text-lg">
        <CgQuote className="text-neutral-400 text-5xl -ml-8" />
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      </span>
      <div className="flex gap-4 items-center mt-4">
        <Image
          src="/eremiya.jpeg"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="text-neutral-400">
          <p>Eremiya Rifat</p>
          <p>Softwareentwickler</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
