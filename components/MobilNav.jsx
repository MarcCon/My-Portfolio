"use client";
import React, { useState, useEffect, useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const MobilNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color="white"
          size={25}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={navRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-[80px] z-50 h-[250px] p-5 pt-8 bg-[#161616]"
          >
            <ul className="justify-center space-y-8 text-center font-inter text-2xl text-white">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projekte"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Projekte
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobilNav;
