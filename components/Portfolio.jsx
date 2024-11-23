import React from "react";
import Project from "./Project";
import Link from "next/link";

function Portfolio() {
  return (
    <div>
      <h2 className="md:text-3xl text-2xl text-white mb-6">Recent Work</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 justify-center  gap-8">
        <Project
          imageUrl="/blinq.png"
          websiteUrl="https://theblinq.de/"
          projectUrl="https://theblinq.de/"
          title="SaaS"
          description="Contributing Frontend Development to a PR-Startup with an AI-powered search engine."
          tasks={[
            "Unit-Testing with Jest",
            "Form validation using React Hook Form",
            "Development of reusable components",
            "Data fetching with GraphQL",
            "AI Impementation",
          ]}
        />

        <Project
          websiteUrl="https://lccpostgrad2024.com"
          imageUrl="/lcc.png"
          projectUrl="https://lccpostgrad2024.com"
          title="Web App"
          description="A web tool designed for creating customized PDF layouts for the London College of Communication."
          tasks={[
            "JSX-based design rendering",
            "Dynamic SVG generation with Satori",
          ]}
        />
      </div>
    </div>
  );
}

export default Portfolio;
