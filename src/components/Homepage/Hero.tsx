import Image from "next/image";
import React from "react";
import img1 from "../../public/images/samsung1.webp";
import img2 from "../../public/images/samsung2.webp";
import img3 from "../../public/images/samsung3.webp";

const Hero = () => {
  return (
    <section className="mx-auto w-[90vw] py-4">
      <div className="flex gap-4">
        <div className="h-[60vh] w-[80%] bg-red-400 xl:w-[50%]">Categories</div>
        <div className="grid grid-cols-3 gap-4">
          <Image
            src={img1}
            alt="Hero Image"
            className="col-span-2 h-[60vh] rounded-sm object-cover"
          />
          <div className="flex flex-col">
            <Image
              src={img2}
              alt="Hero Image"
              className="h-[30vh] rounded-sm object-cover  pb-4"
            />
            <Image
              src={img3}
              alt="Hero Image"
              className="h-[30vh] rounded-sm object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
