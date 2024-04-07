import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link as Scrolllink } from "react-scroll";
import Link from "next/link";
const MobilNav = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-[80px] z-50 h-[250px] bg-darkblue p-5 pt-8"
          >
            <ul className="justify-center space-y-8 text-center font-inter text-2xl text-white">
              <li>
                <Link
                  href="/"
                  offset={-200}
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  offset={-200}
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Blog{" "}
                </Link>
              </li>
              {/* <li>
                <Link
                  to="about"
                  offset={-200}
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Über Mich
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  offset={0}
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="kontakt"
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Kontakt
                </Link>
              </li> */}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobilNav;
