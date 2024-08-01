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
    <div className="w-full flex flex-col bg-fillGray rounded-xl border border-borderGray">
      <div>
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={imageUrl}
            className="w-full h-auto rounded-tr-lg rounded-tl-lg"
            alt={title}
          />
        </a>
      </div>
      <div className="p-4">
        <h2 className="text-white md:text-2xl text-xl font-normal mt-4">
          {title}
        </h2>
        <p className="text-neutral-400 text-base md:text-lg">{description}</p>
        <div className="flex gap-4 justify-between pr-4  mt-2">
          <div className="flex">
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
            <div>
              <button
                onClick={toggleTasks}
                className="hover:text-white underline text-neutral-400 hover:underline focus:outline-none"
              >
                Key Tasks
              </button>
              {showTasks && (
                <ul className="mt-2 text-sm text-neutral-400">
                  {tasks.map((task, index) => (
                    <li key={index} className="text-bas">
                      {task}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
