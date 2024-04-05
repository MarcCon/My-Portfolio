import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <>
      <div
        id="portfolio"
        className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 sm:px-16 lg:px-0 2xl:pt-16 pb-16"
      >
        <h2 className="font-inter font-extrabold text-mypurple sm:text-2xl">
          Portfolio
        </h2>
        <h2 className="mb-8 font-inter text-3xl font-extrabold text-white sm:text-4xl">
          Meine Zeitreise
        </h2>
        <div className="w-full">
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
        </div>
      </div>
    </>
  );
}

export default Portfolio;
