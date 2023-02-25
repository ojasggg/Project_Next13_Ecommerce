import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";

const FooterBottom = () => {
  return (
    <div className="bg-black p-2 text-white/60">
      <div className="mx-auto flex w-[90vw] items-center justify-between">
        <p className="text-[12px]">
          Copyright &#169; 2023 TechNepal eCommerce ALl Rights Reserved
        </p>
        <div className="flex items-center space-x-1 text-[12px]">
          <p className="flex items-center text-[12px]">Made with</p>
          <BsFillSuitHeartFill className="text-red-600" />
          <p>by Ojash Gurung</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
