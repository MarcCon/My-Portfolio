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
            className="border border-neutral-600 rounded-xl"
            alt="Bild von Marc"
          />
          <div className="flex gap-4 items-center justify-center mt-4">
            <IoLocationOutline className="text-3xl text-white" />
            <p className="text-xl text-white">Leipzig</p>
          </div>
        </div>

        <div className="w-full md:w-3/4 p-4 rounded-xl border border-borderGray">
          <h2 className="pb-4 text-2xl text-white">Hi, ich bin Marc</h2>
          <p className="text-lg text-neutral-400 font-light">
            Hi, ich bin Marc. Ich entwickle Websites und SaaS-Lösungen mit Fokus
            auf aktuelle Trends und Technologien, um zukunftssichere Anwendungen
            zu schaffen. Derzeit studiere ich Wirtschaftsinformatik im Master
            und bringe mein Wissen und technische Expertise in jedes meiner
            Projekte ein.
            <br />
            <br />
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
            sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
