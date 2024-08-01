import Project from "@/components/Project";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto max-w-5xl mt-32">
      <h2 className="text-4xl text-white mb-8">Meine Projekte</h2>

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
            websiteUrl="https://eventbuster.de/"
            imageUrl="/eventbuster.png"
            projectUrl="https://eventbuster.de/"
            title="SaaS"
            description="Einfache QR-Code Ticketerstellung."
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
    </div>
  );
};

export default page;
