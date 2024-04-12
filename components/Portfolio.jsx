import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <>
      <div className="mx-auto text-center  max-w-5xl md:px-4 px-8  ">
        <h2 className="font-inter font-extrabold text-mypurple sm:text-2xl">
          Portfolio
        </h2>
        <h2 className="mb-8 md:mb-16 font-inter text-3xl font-extrabold text-white sm:text-4xl">
          Meine Zeitreise
        </h2>
      </div>

      <div className="mb-32 flex md:flex-row flex-col justify-between max-w-5xl mx-auto gap-16 md:gap-0">
        <div className="flex-1 min-w-0">
          <div className="w-full px-8 md:px-4 flex flex-col">
            <a
              href="https://www.larakuche-fotografie.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/lara.png"
                className="max-w-full h-auto"
                alt="Landing Page Fotografin"
              />
            </a>

            <h2 className="text-white md:text-2xl text-xl font-normal mt-4">
              Landing Page
            </h2>
            <p className="text-gray-300 text-base md:text-lg font-thin">
              Eine responsive Landing Page für eine Fotografin.
            </p>
            <div className="flex gap-4 text-gray-300 font-thin underline ">
              <a
                href="https://www.larakuche-fotografie.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
              <a
                href="https://github.com/MarcCon/LandingPage-Fotografin"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="w-full px-8 md:px-4 flex flex-col">
            <a
              href="https://github.com/MarcCon/NomadNexus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/nomad.png"
                className="max-w-full h-auto"
                alt="Nomad Nexus"
              />
            </a>
            <h2 className="text-white md:text-2xl text-xl font-normal mt-4">
              Reiseprotokoll
            </h2>
            <p className="text-gray-300 md:text-lg text-base font-thin">
              Eine Anwendung zum protokollieren von Städtetrips.
            </p>
            <div className="flex gap-4 text-gray-300 font-thin underline ">
              <a
                href="https://github.com/MarcCon/NomadNexus"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full">
          <Project
            imageSrc="/landingPage.png"
            imageAlt="Bild der LandingPage"
            title="Landing Page"
            technologies={["React", "Tailwind"]}
            description="Eine vollständig responsive Website für eine Fotografin"
            githubLink="https://github.com/MarcCon/LandingPage-Fotografin"
            externalLink="https://larakuche-fotografie.de"
            imageOnLeft={true}
          />

          <Project
            imageSrc="/NomadNexus.png"
            imageAlt="Bild meines Projekts"
            title="Reisetagebuch"
            technologies={["React", "CSS "]}
            description="Eine Website zum tracken von Reisen."
            githubLink="https://github.com/MarcCon/NomadNexus"
            externalLink="https://github.com/MarcCon/NomadNexus"
            imageOnLeft={false}
          />
        </div> */}
    </>
  );
}

export default Portfolio;
