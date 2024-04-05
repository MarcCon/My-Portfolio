import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";

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
            className="fixed left-0 right-0 top-[88px] z-50 h-[250px] bg-darkblue p-5 pt-8"
          >
            <ul className="justify-center space-y-8 text-center font-inter text-2xl text-white">
              <li>
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
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobilNav;
