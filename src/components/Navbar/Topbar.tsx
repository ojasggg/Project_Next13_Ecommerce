"use client"

import React,{useState} from "react";
import { RxCross2 } from "react-icons/rx";

const Topbar = () => {
    const [close, setClose] = useState<boolean>(false);
  return (
    <section className={`w-full bg-gray-300 py-1 ${ close && "hidden" } `}>
      <div className="flex items-center m-auto w-[85vw]">
        <div className="mx-auto">
          <ul className="flex items-center text-[12px] font-light space-x-4 divide-x divide-black/40">
            <li>TechBazar eCommerce - Always free delivery</li>
            <li><p className="pl-4">Quality guarantee of products</p></li>
            <li><p className="pl-4">Fast returning program</p></li>
            <li><p className="pl-4">No additional fees</p></li>
          </ul>
        </div>
        <RxCross2 size={20} className="cursor-pointer" onClick={()=>setClose(true)}/>
      </div>
    </section>
  );
};

export default Topbar;
