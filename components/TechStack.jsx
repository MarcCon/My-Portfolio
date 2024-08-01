import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <div className="mx-auto max-w-5xl p-4 sm:p-8 rounded-xl border border-borderGray w-full">
      <h2 className="text-2xl text-white">Tech Stack</h2>
      <p className="text-lg text-neutral-400 mb-6 sm:mb-12">
        My top technologies for all my projects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8 mt-4">
        <div className="flex items-center gap-4">
          <Image src="/next.png" width={50} height={50} alt="Next.js Logo" />
          <div>
            <h3 className="text-lg text-white">NextJs</h3>
            <p className="text-neutral-400">React Framework</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/typescript.png"
            width={50}
            height={50}
            alt="TypeScript Logo"
          />
          <div>
            <h3 className="text-lg text-white">TypeScript</h3>
            <p className="text-neutral-400">Typed Javascript</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/sanity.png" width={50} height={50} alt="Sanity Logo" />
          <div>
            <h3 className="text-lg text-white">Sanity</h3>
            <p className="text-neutral-400">Headless CMS</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/tailwind.png"
            width={50}
            height={50}
            alt="Tailwind CSS Logo"
          />
          <div>
            <h3 className="text-lg text-white">Tailwind</h3>
            <p className="text-neutral-400">Utility-First CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
