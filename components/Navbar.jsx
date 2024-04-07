import React from "react";
import MobilNav from "./MobilNav";
import Link from "next/link"; // Import von ScrollLink entfernt, da er im Codebeispiel nicht verwendet wird

const Navbar = () => {
  return (
    <>
      <nav className="z-50 sticky left-0 top-0 flex w-full items-center justify-between bg-darkblue 2xl:p-8 sm:p-6 p-4 text-base font-bold text-white shadow-md shadow-slate-800 sm:px-16 sm:text-xl">
        {/* "marc.dev" Text auf der linken Seite */}
        <Link href="/">
          <p className="font-bold transition duration-300 ease-in-out hover:text-mypurple">
            marc.dev
          </p>
        </Link>

        {/* Andere Navigationslinks für größere Bildschirme, versteckt auf kleineren Bildschirmen */}
        <div className="hidden gap-12 sm:flex">
          <Link href="/">
            <p className="cursor-pointer transition duration-300 ease-in-out hover:text-mypurple">
              Home
            </p>
          </Link>
          {/* Weitere Links und ScrollLinks */}
          <Link href="/blog">
            <p className="cursor-pointer transition duration-300 ease-in-out hover:text-mypurple">
              Blog
            </p>
          </Link>
          {/* Weitere ScrollLinks */}
        </div>

        {/* MobilNav auf der rechten Seite, nur sichtbar auf kleineren Bildschirmen */}
        <div className="sm:hidden">
          <MobilNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
