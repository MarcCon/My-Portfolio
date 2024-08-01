"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { CiLinkedin } from "react-icons/ci";
import { FaCopy, FaGithub, FaRegCopy } from "react-icons/fa";
import { CgCopy, CgCopyright, CgPathOutline } from "react-icons/cg";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";

const Header = () => {
  const email = "kontakt@marcenke.de";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  return (
    <div className="mt-44">
      <div className="md:text-5xl text-3xl text-white hyphens-auto">
        <h1 className="mb-2">I develop websites that users love.</h1>
        <h1>Reliable and efficient.</h1>
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/MarcCon"
          target="_blank"
          rel="noopener"
          className="p-2 border border-borderGray rounded-xl inline-block mt-8"
        >
          <FaGithub className="text-2xl text-mainGray hover:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/marc-constantin-enke-b691a3218/"
          target="_blank"
          rel="noopener"
          className="p-2 border border-borderGray rounded-xl inline-block mt-8"
        >
          <CiLinkedin className="text-2xl text-mainGray hover:text-white" />
        </a>
        <div
          onClick={copyToClipboard}
          className="p-2 ml-8 bg-fillGray border border-borderGray rounded-xl mt-8 flex justify-center cursor-pointer items-center gap-4 hover:bg-neutral-700 transition ease-in-out duration-100"
        >
          {copied ? (
            <MdCheck className="text-lg text-white" />
          ) : (
            <MdOutlineContentCopy className="text-lg text-mainGray" />
          )}
          <p className="text-white">E-Mail</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
