import Project from "@/components/Project";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto max-w-4xl mt-32 px-4">
      <h2 className="text-4xl text-white">My Projects</h2>
      <p className="text-2xl text-neutral-400  mb-8">
        From customer projects to my own SaaS solutions.
      </p>

      <div className="mb-32 grid md:grid-cols-2 grid-cols-1 justify-center mx-auto gap-8 md:gap-12">
        <Project
          imageUrl="/blinq.png"
          websiteUrl="https://app.theblinq.de"
          projectUrl="https://app.theblinq.de"
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

        <Project
          websiteUrl="https://eventbuster.de/"
          imageUrl="/eventbuster.png"
          projectUrl="https://eventbuster.de/"
          title="Web App"
          description="Software for simple QR code ticket creation."
        />
        <Project
          websiteUrl="https://mute-it-app.vercel.app/"
          imageUrl="/bleep.png"
          projectUrl="https://mute-it-app.vercel.app/"
          title="SaaS"
          description="An AI tool for automated video censorship."
        />
        <Project
          imageUrl="/lara.png"
          websiteUrl="https://www.larakuche-fotografie.de"
          projectUrl="https://www.larakuche-fotografie.de"
          githubUrl="https://github.com/MarcCon/LandingPage-Fotografin"
          title="Landing Page"
          description="A responsive landing page for a photographer."
        />
        <Project
          websiteUrl="https://github.com/MarcCon/Tailwind-Chrome-Extension"
          imageUrl="/extension.png"
          githubUrl="https://github.com/MarcCon/Tailwind-Chrome-Extension"
          title="Chrome Extension"
          description="A Google Chrome extension for TailwindCSS."
        />
      </div>
    </div>
  );
};

export default page;
