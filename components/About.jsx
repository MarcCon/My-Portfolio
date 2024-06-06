import React from "react";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="mx-auto flex max-w-5xl flex-col justify-center gap-8 pb-4 sm:px-4 md:flex-row lg:px-4  "
      >
        <img
          src="/Mittel.png"
          className=" h-[170px] w-[170px]   border border-gray-600 rounded-xl"
          alt="Bild von Marc"
        />

        <div className="border rounded-3xl sm:p-8 p-4 border-gray-600">
          <h2 className="pb-4 text-2xl  text-white ">Hi, ich bin Marc</h2>
          <p className=" text-lg text-gray-300">
            Hi, mein Name ist Marc. Ich arbeite hauptsächlich mit React, NextJs
            und Tailwind, bin jedoch flexibel und offen dafür, mich in neue
            Technologien einzuarbeiten.
            <br />
            <br /> Neben der Softwareentwicklung habe ich ebenfalls ein Auge für
            modernes und sauberes UI/UX-Design.
            <br />
            <br />
            Aktuell studiere ich Wirtschaftsinformatik im Master.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
