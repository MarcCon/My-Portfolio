import React from "react";
import Project from "./Project";
import Link from "next/link";

function Portfolio() {
  return (
    <div>
      <h2 className="text-4xl text-white mb-1">Meine Projekte</h2>
      <h2 className="text-xl text-neutral-400 mb-8">
        Von Kundenprojekten bis hin zu eigenen SaaS-Lösungen.{" "}
      </h2>

      <div className="grid md:grid-cols-2 grid-cols-1 justify-center max-w-5xl gap-16">
        <Project
          imageUrl="/lara.png"
          websiteUrl="https://www.larakuche-fotografie.de"
          projectUrl="https://www.larakuche-fotografie.de"
          githubUrl="https://github.com/MarcCon/LandingPage-Fotografin"
          title="Landing Page"
          description="Ein Portfolio für eine Fotografin."
        />

        <Project
          websiteUrl="https://mute-it.vercel.app/"
          imageUrl="/bleep.png"
          projectUrl="https://mute-it.vercel.app/"
          title="SaaS"
          description="Ein KI-Tool zur automatischen Zensur von Videos."
        />
      </div>
      <div className="w-full text-center mt-16">
        <Link
          href="/projekte"
          className="text-neutral-400 text-xl mt-16 hover:text-white"
        >
          Mehr Projekte
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
