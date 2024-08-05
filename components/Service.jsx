"use client";
import React from "react";
import { LuLayout } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { IoMdCode } from "react-icons/io";
import { HiOutlineChip } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";

const Service = () => {
  return (
    <div className="mx-auto max-w-5xl rounded-xl border border-borderGray ">
      <div className="pb-6 p-4 sm:p-6">
        <h2 className="text-2xl  text-white">Expertise</h2>
        <p className="text-lg text-neutral-400 mb-6 sm:mb-12">
          An overview of my skills.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8 mt-4 ">
          <div className="flex items-start p-2 gap-4 hover:bg-[#323232] rounded-xl transition ease-in-out duration-200">
            <div className="bg-[#323232] p-2 rounded-xl">
              <LuLayout className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-lg text-white">Websites</h3>
              <p className="text-neutral-400">
                User-friendly websites that inspire visitors
              </p>
            </div>
          </div>
          <div className="flex items-start p-2 gap-4 hover:bg-[#323232] rounded-xl transition ease-in-out duration-200">
            <div className="bg-[#323232] p-2 rounded-xl">
              <IoIosSearch className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-lg text-white">Testing</h3>
              <p className="text-neutral-400">
                Ensuring software quality and performance.
              </p>
            </div>
          </div>
          <div className="flex items-start p-2 gap-4 hover:bg-[#323232] rounded-xl transition ease-in-out duration-200">
            <div className="bg-[#323232] p-2 rounded-xl">
              <IoMdCode className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-lg text-white">SaaS-Development</h3>
              <p className="text-neutral-400">
                Customized software solutions for all requirements.
              </p>
            </div>
          </div>
          <div className="flex items-start p-2 gap-4 hover:bg-[#323232] rounded-xl transition ease-in-out duration-200">
            <div className="bg-[#323232] p-2 rounded-xl">
              <HiOutlineChip className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-lg text-white">KI-Integration</h3>
              <p className="text-neutral-400">
                Process optimization with the help of artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 p-4 sm:p-8 rounded-xl bg-fillGray border-t border-borderGray flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h3 className="text-lg text-white">Want to work together?</h3>
          <p className="text-neutral-400">Let's realize ideas.</p>
        </div>
        <ScrollLink to="contact" smooth={true} offset={-100} duration={500}>
          <button className="border border-borderGray text-white px-4 py-2 rounded-lg">
            Write me
          </button>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Service;
