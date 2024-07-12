import Image from "next/image";
import React from "react";
import { FiBook } from "react-icons/fi";
import { CgQuote } from "react-icons/cg";

const BlogTestimonial = () => {
  return (
    <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* Blog Section */}
      <div className="bg-fillGray p-6 sm:p-8 rounded-xl border border-borderGray flex flex-col justify-between">
        <div className="flex flex-col items-start gap-4">
          <div className="bg-[#323232] p-2 rounded-xl">
            <FiBook className="text-white text-3xl" />
          </div>

          <div>
            <h3 className="text-lg text-white">Blog</h3>
            <p className="text-neutral-400">
              Meine Gedanken zu Gott und die Welt.
            </p>
          </div>
        </div>
        <button className="bg-neutral-800 text-white px-4 py-2 mt-4 rounded-lg self-start">
          Mehr
        </button>
      </div>

      {/* Testimonial Section */}
      <div className="bg-fillGray p-6 sm:p-8 rounded-xl border border-borderGray">
        <CgQuote className="text-6xl text-white" />

        <blockquote className="text-neutral-400 mb-4 mt-4">
          <p>
            Die Zusammenarbeit mit Marc an den MVPs für Moouv und Eventbusters
            war klasse. Dank seiner Unterstützung und schnellen Umsetzung
            konnten wir beide Projekte im Handumdrehen launchen.
          </p>
        </blockquote>
        <div className="flex items-center mt-4">
          <Image
            src="/eremiya.jpeg"
            width={60}
            height={60}
            className="rounded-full mr-4"
            alt="Profilbild"
          />
          <div>
            <h3 className="text-white">Eremiya Rifat</h3>
            <p className="text-neutral-400">Softwareentwickler</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTestimonial;
