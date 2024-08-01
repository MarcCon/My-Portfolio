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
        <div className="w-2/5 md:w-1/4 border border-borderGray p-4 rounded-xl flex flex-col items-start">
          <Image
            src="/ich.png"
            layout="responsive"
            width={150}
            height={150}
            className="  rounded-xl"
            alt="Bild von Marc"
          />
          <div className="flex gap-2  mt-4">
            <div>
              <p className="text-white text-base">Leipzig</p>
              <p className="text-neutral-400 text-sm">Location</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/4 p-4 rounded-xl border border-borderGray">
          <h2 className="pb-4 md:text-2xl text-xl text-white">Hi, I'm Marc.</h2>
          <p className="md:text-lg text-base text-neutral-400">
            I develop websites and SaaS solutions with a focus on current trends
            and technologies to create future-proof applications. I am currently
            studying Business Informatics for my Master's degree and bring my
            knowledge and technical expertise to each of my projects.
            <br />
            <br />I am currently working for{" "}
            <a
              href="https://felixhagspiel.de/"
              target="_blank"
              className="underline"
            >
              Felix Hagspiel
            </a>{" "}
            as a Freelance Front-End Developer.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
