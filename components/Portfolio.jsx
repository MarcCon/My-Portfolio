import React from "react";
import Project from "./Project";
import Link from "next/link";

function Portfolio() {
  return (
    <div>
      <h2 className="md:text-3xl text-2xl text-white mb-6">Recent Work</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 justify-center max-w-5xl gap-16">
        <Project
          imageUrl="/blinq.png"
          websiteUrl="https://app.theblinq.de"
          projectUrl="https://app.theblinq.de"
          title="Webapp"
          description="Frontend-Work for a startup."
          tasks={[
            "Unit-Testing with Jest",
            "Formvalidation with React Hook Form",
            "created reusable components",
            " Data fetching with GraphQL",
          ]}
        />

        <Project
          websiteUrl="https://mute-it.vercel.app/"
          imageUrl="/bleep.png"
          projectUrl="https://mute-it.vercel.app/"
          title="SaaS"
          description="A tool for automatically censoring words."
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
