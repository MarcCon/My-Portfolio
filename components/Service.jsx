import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div>
      <h2 className="text-4xl text-white mb-1">Ich entwickle Websites.</h2>
      <h2 className="text-4xl text-white">
        Effizient und Erfolgsversprechend.
      </h2>

      <div className="flex gap-20 mt-16">
        <div className="flex flex-col gap-4">
          <Image src="/website.png" width={120} height={120} />
          <div>
            <p className="text-white text-3xl">Webapps</p>
            <span className="text-lg text-neutral-400">
              Trendorientieres Design, SEO Optimiert, CMS integriert.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Image src="/saas.png" width={100} height={100} />
          <div>
            <p className="text-white text-3xl">KI-Lösungen</p>
            <span className="text-lg text-neutral-400">
              Automatisierung von Workflows durch KI.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
