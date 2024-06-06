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
    <div className="w-full flex flex-col">
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} className="max-w-full h-auto" alt={title} />
      </a>
      <h2 className="text-white md:text-2xl text-xl font-normal mt-4">
        {title}
      </h2>
      <p className="text-gray-300 text-base md:text-lg font-thin">
        {description}
      </p>
      <div className="flex gap-4 text-gray-300 font-thin underline">
        {projectUrl && (
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            Website
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
