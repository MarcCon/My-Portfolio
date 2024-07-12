import React from "react";
import Navbar from "./Navbar";
import { CiLinkedin } from "react-icons/ci";
import { FaCopy, FaGithub, FaRegCopy } from "react-icons/fa";
import { CgCopy, CgCopyright, CgPathOutline } from "react-icons/cg";
import { MdOutlineContentCopy } from "react-icons/md";

const Header = () => {
  return (
    <div className="mt-44">
      <div className="md:text-5xl text-3xl text-white hyphens-auto">
        <h1>Ich entwickle Websites</h1>
        <h1>Effizient und erfolgsversprechend.</h1>
      </div>
      <div className="flex gap-4  ">
        <div className="p-2 border border-borderGray rounded-xl inline-block mt-8 ">
          <FaGithub className="text-2xl text-mainGray" />
        </div>
        <div className="p-2 border border-borderGray rounded-xl inline-block mt-8 ">
          <CiLinkedin className="text-2xl text-mainGray" />
        </div>
        <div className="p-2 ml-8 bg-fillGray border border-borderGray rounded-xl mt-8 flex justify-center items-center gap-4 ">
          <MdOutlineContentCopy className="text-lg text-mainGray" />
          <p className="text-white">E-Mail</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
