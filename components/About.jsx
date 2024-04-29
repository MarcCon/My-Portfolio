import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-darkblue md:mb-0 mb-44 pt-48 px-8">
        <div
          id="about"
          className="mx-auto flex max-w-5xl flex-col justify-center gap-8 pb-4 sm:px-4 sm:pb-48 md:flex-row lg:px-4  "
        >
          <img
            src="/Mittel.png"
            className=" h-[170px] w-[170px]   border border-gray-600 rounded-xl"
            alt="Bild von Marc"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />

          <div className="border rounded-3xl sm:p-8 p-4 border-gray-600">
            <p className="text-center font-inter text-xl font-extrabold text-mypurple lg:text-left lg:text-2xl">
              Über mich
            </p>
            <h2 className="pb-4 text-center text-2xl font-extrabold text-white lg:text-left lg:text-3xl">
              React Front-End Entwickler in Halle (Saale) 📍
            </h2>
            <p className=" text-center text-lg font-thin text-gray-300 sm:text-xl lg:text-left lg:text-2xl">
              Hi, mein Name ist Marc. Ich arbeite hauptsächlich mit React,
              NextJs und Tailwind, bin jedoch flexibel und offen dafür, mich in
              neue Technologien einzuarbeiten.
              <br />
              <br /> Neben der Softwareentwicklung habe ich ebenfalls ein Auge
              für modernes und sauberes UI/UX-Design.
              <br />
              <br />
              Aktuell studiere ich Wirtschaftsinformatik im Master.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
