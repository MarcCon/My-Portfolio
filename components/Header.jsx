import React from "react";
import Navbar from "./Navbar";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="mt-44">
        <div className="flex flex-col-reverse gap-8 md:flex-row md:gap-16 lg:gap-24">
          <div className="flex-1 text-center md:text-left">
            <div className="flex justify-center gap-2 md:justify-start">
              <div className="h-[10px] w-[100px] bg-gradient-to-r from-orange-400 to-pink-500 lg:h-[15px] lg:w-[200px]"></div>
              <div className="h-[10px] w-[60px] bg-gradient-to-r from-yellow-300 to-green-400 lg:h-[15px] lg:w-[100px]"></div>
            </div>

            <div className="mb-2 mt-2 flex content-center justify-center gap-2 md:justify-start lg:mb-4">
              <div className="h-[10px] w-[70px] bg-gradient-to-r from-cyan-400 to-blue-700 lg:h-[15px] lg:w-[130px]"></div>
              <div className="h-[10px] w-[100px] bg-gradient-to-r from-purple-400 to-pink-300 lg:h-[15px] lg:w-[250px]"></div>
            </div>

            <h1 className="font-inter text-3xl font-extrabold text-white sm:text-4xl lg:text-6xl">
              Front-End Developer
            </h1>
            <h2 className="pt-2 tracking-wide font-thin text-lg text-white lg:pt-4 lg:text-2xl">
              Hi, ich bin Marc, Front-End Entwickler aus Halle (Saale).
            </h2>
            <div className="flex flex-row justify-center gap-4 pt-4 md:justify-start">
              <a
                href="https://www.linkedin.com/in/marc-constantin-enke-b691a3218/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Marc auf LinkedIn"
              >
                <CiLinkedin size={30} color="white" />
              </a>
              <a
                href="https://github.com/MarcCon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Marc auf Github"
              >
                <FaGithub size={30} color="white" />
              </a>
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-full bg-black shadow-glow sm:h-48 sm:w-48 lg:h-64 lg:w-64">
              <img
                className="absolute top-0 left-0 h-full w-full object-cover z-10"
                src="/StandBildIch.png"
                alt="Loading"
              />
              <video
                className="absolute top-0 left-0 h-full w-full object-cover rounded-full z-20"
                autoPlay
                muted
                loop
                playsInline
                src="/VideoMe.mp4"
              >
                Ihr Browser unterstützt das Video-Tag nicht.
              </video>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full mt-16">
          <div>
            <p className="text-white">Nextjs und Sanity</p>
            <p className="text-neutral-400">Tech Stack</p>
          </div>
          <div>
            <p className="text-white">Nextjs und Sanity</p>
            <p className="text-neutral-400">Tech Stack</p>
          </div>
          <div>
            <p className="text-white">Nextjs und Sanity</p>
            <p className="text-neutral-400">Tech Stack</p>
          </div>
          <div>
            <p className="text-white">Nextjs und Sanity</p>
            <p className="text-neutral-400">Tech Stack</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
