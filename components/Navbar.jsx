import React from "react";
import MobilNav from "./MobilNav";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="z-50 sticky left-0 top-0 flex w-full items-center justify-end bg-darkblue p-8 text-base font-bold text-white shadow-md shadow-slate-800 sm:px-16 sm:text-xl">
        <div className="mr-auto">
          <Link href="/">
            <p className="w-[90px] font-bold transition duration-300 ease-in-out hover:text-mypurple">
              marc.dev
            </p>
          </Link>
        </div>

        <div className="hidden gap-12 sm:flex">
          <Link href="/">
            <p className="cursor-pointer transition duration-300 ease-in-out hover:text-mypurple">
              Home
            </p>
          </Link>
          {/* <ScrollLink
            to="about"
            offset={-200}
            smooth={true}
            duration={500}
            className="cursor-pointer transition duration-300 ease-in-out hover:text-mypurple"
          >
            Über mich
          </ScrollLink> */}
          {/* <ScrollLink
            to="portfolio"
            offset={-100}
            smooth={true}
            duration={500}
            className="cursor-pointer transition duration-300 ease-in-out hover:text-mypurple"
          >
            Portfolio
          </ScrollLink> */}
          <Link href="/blog">
            <p className="cursor-pointer transition duration-300 ease-in-out hover:text-mypurple">
              Blog
            </p>
          </Link>
          {/* <ScrollLink
            to="kontakt"
            offset={-100}
            smooth={true}
            duration={500}
            className="cursor-pointer transition duration-300 ease-in-out hover:text-mypurple"
          >
            Kontakt
          </ScrollLink> */}
        </div>
      </nav>

      <div className="fixed right-6 top-6 z-50 sm:hidden">
        <MobilNav />
      </div>
    </>
  );
};

export default Navbar;
