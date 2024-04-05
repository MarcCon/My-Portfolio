import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";

function Footer() {
  return (
    <div
      id="kontakt"
      className="mt-16 flex h-[130px] flex-col items-center justify-center gap-4 sm:h-[100px] sm:px-16 md:flex-row md:justify-between"
    >
      <div className="flex flex-col gap-4 sm:flex-row lg:gap-16">
        <div className="flex gap-4 md:gap-4 lg:gap-16 ">
          <a
            href="https://github.com/MarcCon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Marc auf Github"
          >
            <div className="flex items-center gap-1  sm:gap-1">
              <FaGithub className="text-base text-white sm:text-xl xl:text-2xl" />
              <p className="font-inter text-sm text-white sm:text-base xl:text-lg">
                github.com/MarcCon
              </p>
            </div>
          </a>
          <a href="mailto:kontakt@marcenke.de" aria-label="Mail an Marc">
            <div className="flex items-center gap-1 sm:gap-1">
              <IoMailOutline className="text-base text-white sm:text-xl xl:text-2xl" />
              <p className="font-inter text-sm text-white sm:text-base xl:text-lg">
                kontakt@marcenke.de
              </p>
            </div>
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/marc-constantin-enke-b691a3218/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Marc auf LinkedIn"
        >
          <div className="flex items-center justify-center gap-1 sm:gap-1">
            <CiLinkedin className="text-base text-white sm:text-xl xl:text-2xl" />
            <p className="font-inter text-sm text-white sm:text-base xl:text-lg">
              LinkedIn
            </p>
          </div>
        </a>
      </div>

      <div className="flex items-center gap-8">
        <Link href="/impressum">
          <p className="font-inter text-sm text-gray-400 sm:text-base xl:text-lg">
            Impressum
          </p>
        </Link>
        <Link href="/datenschutz">
          <p className="font-inter text-sm text-gray-400 sm:text-base xl:text-lg">
            Datenschutz
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
