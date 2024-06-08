import Image from "next/image";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" py-8 border-t border-neutral-700 mt-36">
      <div className="max-w-5xl mx-auto pt-8 flex justify-between">
        <div>
          <Image
            width={0}
            height={0}
            sizes="100%"
            src="/Mittel.png"
            className="w-[100px] h-[100px]   border border-neutral-600 rounded-xl -mt-[120px] mb-[20px]"
            alt="Bild von Marc"
          />{" "}
          <p className="text-white text-lg">Hi, ich bin Marc</p>
          <p className="text-neutral-400 text-lg mb-4">Ich entwickle Webapps</p>
          <div className="flex gap-4">
            <CiMail className="text-3xl text-neutral-400 hover:text-white" />
            <FaGithub className="text-3xl text-neutral-400 hover:text-white" />
            <FaLinkedin className="text-3xl text-neutral-400 hover:text-white" />
          </div>
        </div>
        <div>
          <p className="text-white text-lg mb-2">Service</p>
          <p className="text-neutral-400 text-lg">Websites</p>
          <p className="text-neutral-400 text-lg">SaaS</p>
          <p className="text-neutral-400 text-lg">KI Integration</p>
        </div>

        <div>
          <p className="text-white text-lg mb-2">Sonstiges</p>
          <p className="text-neutral-400 text-lg">Impressum</p>
          <p className="text-neutral-400 text-lg">Datenschutz</p>
          <p className="text-neutral-400 text-lg mt-6">
            Inspired by{" "}
            <a
              href="https://maxschmitt.me/"
              className="underline hover:text-white hover:underline-white"
              target="_blank"
            >
              Max
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
