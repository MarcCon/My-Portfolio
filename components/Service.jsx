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
        <div>
          <Image src="/website.png" width={120} height={120} />
          <span className="text-lg text-neutral-400">
            Trendorientieres Design, SEO Optimiert, CMS integriert.
          </span>
        </div>
        <div>
          <Image src="/saas.png" width={100} height={100} />
          <span className="text-lg text-neutral-400">
            Ich helfe dir bei der Umsetzung deines SaaS.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Service;
