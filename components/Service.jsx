import Image from "next/image";
import React from "react";
import { LuLayout } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { IoMdCode } from "react-icons/io";
import { HiOutlineChip } from "react-icons/hi";

const Service = () => {
  return (
    <div className="mx-auto max-w-5xl rounded-xl border border-borderGray ">
      <div className="pb-6 p-4 sm:p-6">
        <h2 className="text-2xl font-semibold text-white">Expertise</h2>
        <p className="text-lg text-neutral-400 mb-6 sm:mb-12">
          Meine Fähigkeiten im Überblick.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8 mt-4 ">
          <div className="flex items-start p-2 gap-4 hover:bg-[#323232] rounded-xl transition ease-in-out duration-200">
            <div className="bg-[#323232] p-2 rounded-xl">
              <LuLayout className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-lg text-white">Websites</h3>
              <p className="text-neutral-400">
                Benutzerfreundliche Websites, die Besucher begeistern
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
                Immer aktuell und sichtbar. Optimiert für maximale
                Online-Präsenz
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
                Individuelle Softwarelösungen für alle Anforderungen
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
                Prozessoptimierung mithilfe künstlicher Intelligenz
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 p-4 sm:p-8 bg-fillGray border-t border-borderGray flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h3 className="text-lg text-white">Lass uns ein Projekt starten!</h3>
          <p className="text-neutral-400">Gemeinsam Ideen verwirklichen.</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Schreib mir
        </button>
      </div>
    </div>
  );
};

export default Service;
