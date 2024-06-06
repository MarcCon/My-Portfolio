import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <div>
      <h2 className="text-4xl text-white mb-8">Meine Projekte</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 justify-center max-w-5xl gap-16">
        <Project
          imageUrl="/lara.png"
          websiteUrl="https://www.larakuche-fotografie.de"
          projectUrl="https://www.larakuche-fotografie.de"
          githubUrl="https://github.com/MarcCon/LandingPage-Fotografin"
          title="Landing Page"
          description="Eine responsive Landing Page für eine Fotografin."
        />

        <Project
          websiteUrl="https://mute-it.vercel.app/"
          imageUrl="/bleep.png"
          projectUrl="https://mute-it.vercel.app/"
          title="SaaS"
          description="Ein Online Tool zum zensieren von Videos."
        />
      </div>
    </div>
  );
}

export default Portfolio;
