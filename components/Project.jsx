import React from "react";

function Project({
  imageUrl,
  websiteUrl,
  projectUrl,
  githubUrl,
  title,
  description,
}) {
  return (
    <div className="w-full flex flex-col bg-fillGray rounded-xl">
      <div>
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} className="w-full h-auto" alt={title} />
        </a>
      </div>
      <div className="p-4">
        <h2 className="text-white md:text-2xl text-xl font-normal mt-4">
          {title}
        </h2>
        <p className="text-neutral-400 text-base md:text-lg">{description}</p>
        <div className="flex gap-4 text-neutral-400 underline mt-2">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:unterline-white"
            >
              Website
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:unterline-white"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
