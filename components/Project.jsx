import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function Project({
  imageSrc,
  imageAlt,
  title,
  technologies,
  description,
  githubLink,
  externalLink,
}) {
  return (
    <div className="flex justify-center bg-darkblue pt-4 sm:pt-16 ">
      <div className="flex h-[220px] w-[500px] rounded-2xl shadow-glowlight sm:h-[250px] lg:h-[250px] lg:w-[700px]">
        <a
          href={externalLink}
          className="flex h-auto w-1/2 items-center justify-center overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} project`}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full rounded-bl-xl rounded-tl-xl border-4 border-slate-800 object-cover transition duration-300 hover:scale-105"
            style={{ objectPosition: "0% center" }}
          />
        </a>

        <div className="flex w-1/2 flex-col justify-center px-4 sm:px-8 ">
          <h3 className=" pb-4 text-center text-xs font-extrabold text-white sm:text-lg lg:text-xl">
            {title}
          </h3>
          <div className="flex justify-center gap-2 pb-4 sm:gap-4">
            {technologies.map((tech, index) => (
              <p
                key={index}
                className="rounded-2xl bg-gray-600 px-2 font-inter text-xs text-white sm:text-sm lg:text-base"
              >
                {tech}
              </p>
            ))}
          </div>
          <p className="pb-8 text-center text-xs font-extralight text-white sm:text-base">
            {description}
          </p>
          <div className="flex justify-center gap-8">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Link"
              >
                <FiGithub size={20} color="white" />
              </a>
            )}
            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="External Link"
              >
                <FiExternalLink size={20} color="white" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
