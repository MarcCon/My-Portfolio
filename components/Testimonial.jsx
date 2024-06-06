import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div>
      <span>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      </span>
      <div>
        <Image
          src="/eremiya.jpeg"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div>
          <p>Ere</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
