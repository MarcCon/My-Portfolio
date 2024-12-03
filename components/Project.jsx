"use client";
import React, { useState } from "react";

function Project({
  imageUrl,
  websiteUrl,
  projectUrl,
  githubUrl,
  title,
  description,
  tasks,
}) {
  const [showTasks, setShowTasks] = useState(false);

  const toggleTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <div className="w-full flex flex-col bg-fillGray rounded-xl border border-borderGray overflow-hidden">
      <div>
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={imageUrl}
            className="w-full md:h-[280px] h-full"
            alt={title}
          />
        </a>
      </div>
      <div className="p-4 flex flex-col">
        <h2 className="text-white text-xl font-normal mt-4">{title}</h2>
        <p className="text-neutral-400 text-base md:text-base">{description}</p>
        <div className="flex gap-4 pr-4 pt-4 mt-auto">
          {" "}
          <div className="flex justify-start w-full gap-4">
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline-white underline text-neutral-400"
              >
                Website
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline-white underline text-neutral-400"
              >
                GitHub
              </a>
            )}
          </div>
          {tasks && (
            <div className="flex items-start flex-col gap-2">
              <button
                onClick={toggleTasks}
                className="hover:text-white whitespace-nowrap underline text-neutral-400 hover:underline focus:outline-none"
              >
                Key Tasks
              </button>
            </div>
          )}
        </div>
        {showTasks && (
          <ul className="mt-2 text-sm text-neutral-400">
            {tasks.map((task, index) => (
              <li key={index} className="text-base">
                {task}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Project;
