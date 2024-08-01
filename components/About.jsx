import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="mx-auto max-w-5xl flex flex-col md:flex-row justify-center gap-8"
      >
        <div className="w-2/5 md:w-1/4 border border-borderGray p-4 rounded-xl flex flex-col items-center">
          <Image
            src="/ich.png"
            layout="responsive"
            width={150}
            height={150}
            className="  rounded-xl"
            alt="Bild von Marc"
          />
          <div className="flex gap-2 items-center mt-4">
            <IoLocationOutline className="text-3xl text-white" />
            <p className="text-lg text-white">Leipzig</p>
          </div>
        </div>

        <div className="w-full md:w-3/4 p-4 rounded-xl border border-borderGray">
          <h2 className="pb-4 md:text-2xl text-xl text-white">Hi, I'm Marc.</h2>
          <p className="md:text-lg text-base text-neutral-400 font-light">
            I develop websites and SaaS solutions with a focus on current trends
            and technologies to create future-proof applications. I am currently
            studying Business Informatics for my Master's degree and bring my
            knowledge and technical expertise to each of my projects.
            <br />
            <br />
            Neben der Softwareentwicklung habe ich ebenfalls ein Auge für
            modernes und sauberes UI/UX-Design.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
