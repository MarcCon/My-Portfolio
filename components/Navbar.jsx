import React from "react";
import MobilNav from "./MobilNav";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="z-50 sticky left-0 top-0 flex w-full items-center justify-between bg-darkblue 2xl:p-8 sm:p-6 p-4 text-base font-bold text-white shadow-md shadow-slate-800 sm:px-16 sm:text-xl">
        <Link href="/">
          <p className="font-bold transition duration-300 ease-in-out hover:text-mypurple">
            marc.dev
          </p>
        </Link>

        <div className="hidden gap-12 sm:flex">
          <Link href="/">
            <p className="cursor-pointer transition duration-300 ease-in-out hover:text-mypurple">
              Home
            </p>
          </Link>
          <Link href="/blog">
            <p className="cursor-pointer transition duration-300 ease-in-out hover:text-mypurple">
              Blog
            </p>
          </Link>
        </div>

        <div className="sm:hidden">
          <MobilNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
