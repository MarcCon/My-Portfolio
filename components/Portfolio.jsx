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
          description="Contributing Frontend Development for a Startup."
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
          description="A User-Friendly Web Tool for Customized PDF Designs."
        />
      </div>
    </div>
  );
}

export default Portfolio;
