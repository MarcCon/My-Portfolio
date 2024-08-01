import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-8 border-t border-neutral-700 mt-36">
      <div className="max-w-5xl mx-auto pt-8 flex flex-col sm:flex-row justify-between px-8 md:px-4">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <Image
            width={0}
            height={0}
            sizes="100%"
            src="/Mittel.png"
            className="w-[100px] h-[100px] border border-neutral-600 rounded-xl -mt-[120px] mb-[20px]"
            alt="Bild von Marc"
          />
          <p className="text-white text-lg text-center md:text-left">
            Hi, ich bin Marc
          </p>
          <p className="text-neutral-400 text-lg text-center md:text-left mb-4">
            Ich entwickle Websites <br />& Webapps
          </p>
          <div className="flex gap-4">
            <a href="mailto:kontakt@marcenke.de">
              {" "}
              <CiMail className="text-3xl text-neutral-400 hover:text-white" />
            </a>
            <a target="_blank" rel="nopener" href="https://github.com/MarcCon">
              <FaGithub className="text-3xl text-neutral-400 hover:text-white" />
            </a>

            <a
              target="_blank"
              rel="nopener"
              href="https://www.linkedin.com/in/marc-constantin-enke-b691a3218/"
            >
              <FaLinkedin className="text-3xl text-neutral-400 hover:text-white" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <p className="text-white text-lg mb-2 hover:text-white">Service</p>
          <p className="text-neutral-400 text-lg hover:text-white">Websites</p>
          <p className="text-neutral-400 text-lg hover:text-white">SaaS</p>
          <p className="text-neutral-400 text-lg hover:text-white">
            KI Integration
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <p className="text-white text-lg mb-2">Sonstiges</p>

          <Link
            href="/impressum"
            className="text-neutral-400 text-lg hover:text-white"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-neutral-400 text-lg hover:text-white"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
