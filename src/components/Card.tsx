import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import img1 from "../public/images/product/cap1.jpg";

const Card = () => {
  return (
    <div className="h-fit rounded-md bg-white">
      <Image
        src={img1}
        alt="Brown Cap"
        className="h-[240px] w-full rounded-t-md object-cover xl:h-[300px]"
      />
      <div className="px-2 py-2 pb-4">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold xl:text-xl">Brown Cap</h4>
          <p className="text-lg font-bold xl:text-xl">Rs.3000</p>
        </div>
        <p className="text-sm font-medium text-gray-600 xl:text-base">
          Handmade Brown Cap for men
        </p>
        <div className="mt-1 mb-3 flex items-center">
          <div className="flex items-center space-x-1 text-[#ffae00]">
            <AiFillStar size={20} />
            <AiFillStar size={20} />
            <AiFillStar size={20} />
            <AiFillStar size={20} />
            <AiFillStar size={20} />
          </div>
          <p className="text-sm text-gray-400">(145)</p>
        </div>
        <button className="rounded-full border border-gray-400 px-4 py-2 text-sm font-medium transition-all ease-out hover:bg-green-900 hover:text-white xl:text-base">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
