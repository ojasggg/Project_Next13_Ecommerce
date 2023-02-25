"use client";

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Topbar = () => {
  const [close, setClose] = useState<boolean>(false);
  return (
    <section className={`w-full bg-gray-300 py-1 ${close && "hidden"} `}>
      <div className="m-auto flex w-[90vw] items-center">
        <div className="mx-auto">
          <ul className="flex items-center space-x-4 divide-x divide-black/40 text-[12px] font-light">
            <li>TechBazar eCommerce - Always free delivery</li>
            <li>
              <span className="pl-4">Quality guarantee of products</span>
            </li>
            <li>
              <span className="pl-4">Fast returning program</span>
            </li>
            <li>
              <span className="pl-4">No additional fees</span>
            </li>
          </ul>
        </div>
        <RxCross2
          size={20}
          className="cursor-pointer"
          onClick={() => setClose(true)}
        />
      </div>
    </section>
  );
};

export default Topbar;
