"use client";
import React, { useEffect, useState } from "react";
import MobilNav from "./MobilNav";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const path = usePathname();

  return (
    <>
      <nav
        className={`z-50 bg-black sticky left-0 top-0 flex w-full items-center justify-between 2xl:p-8 sm:p-6 p-4 text-base font-medium text-white sm:px-16 sm:text-xl transition duration-300 ease-in-out ${
          scrolled
            ? "border-b border-neutral-700"
            : "border-b border-transparent"
        }`}
      >
        <Link href="/">
          <p className="font-bold transition duration-300 ease-in-out">
            marc.dev
          </p>
        </Link>

        <div className="hidden gap-12 sm:flex">
          <Link href="/">
            <p
              className={`${
                path === "/"
                  ? "underline underline-offset-8 text-white"
                  : "text-neutral-400  hover:underline hover:underline-offset-8"
              }`}
            >
              Home
            </p>
          </Link>
          <Link href="/projekte">
            <p
              className={`${
                path === "/projekte"
                  ? "underline underline-offset-8 text-white"
                  : "text-neutral-400 hover:underline hover:underline-offset-8"
              }`}
            >
              Projekte
            </p>
          </Link>
          <Link href="/blog">
            <p
              className={`${
                path === "/blog"
                  ? "underline underline-offset-8 text-white"
                  : "text-neutral-400  hover:underline hover:underline-offset-8 "
              }`}
            >
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
