import React from "react";

const page = () => {
  return (
    <>
      <div className="mx-auto text-center max-w-5xl md:px-4 px-8">
        <h2 className="font-inter font-extrabold text-mypurple sm:text-2xl">
          Portfolio
        </h2>
        <h2 className="mb-8 md:mb-16 font-inter text-3xl font-extrabold text-white sm:text-4xl">
          Meine Zeitreise
        </h2>
      </div>

      <div className="mb-32 grid md:grid-cols-2 grid-cols-1 justify-center max-w-5xl mx-auto gap-8 md:gap-8">
        <div className=" px-2">
          <Project
            imageUrl="/lara.png"
            websiteUrl="https://www.larakuche-fotografie.de"
            projectUrl="https://www.larakuche-fotografie.de"
            githubUrl="https://github.com/MarcCon/LandingPage-Fotografin"
            title="Landing Page"
            description="Eine responsive Landing Page für eine Fotografin."
          />
        </div>
        <div className=" px-2">
          <Project
            websiteUrl="https://github.com/MarcCon/NomadNexus"
            imageUrl="/nomad.png"
            projectUrl=""
            githubUrl="https://github.com/MarcCon/NomadNexus"
            title="Reiseprotokoll"
            description="Eine Anwendung zum Protokollieren von Städtetrips."
          />
        </div>
        <div className=" px-2">
          <Project
            websiteUrl="https://mute-it.vercel.app/"
            imageUrl="/bleep.png"
            projectUrl="https://mute-it.vercel.app/"
            title="SaaS"
            description="Ein Online Tool zum zensieren von Videos."
          />
        </div>
        <div className=" px-2">
          <Project
            websiteUrl="https://github.com/MarcCon/Tailwind-Chrome-Extension"
            imageUrl="/extension.png"
            githubUrl="https://github.com/MarcCon/Tailwind-Chrome-Extension"
            title="Chrome Extension"
            description="Eine Google Chrome Extension für TailwindCSS."
          />
        </div>
      </div>
    </>
  );
};

export default page;
