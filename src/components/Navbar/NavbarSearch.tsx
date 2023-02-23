import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiChevronDown } from "react-icons/fi";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

const NavbarSearch = () => {
  return (
    <nav className="w-full py-2">
      <div className="w-[90vw] mx-auto flex h-10 xl:h-12 items-center space-x-16">
        <button className="flex items-center space-x-2 border border-gray-300 h-full px-4 xl:px-6 rounded-md">
          <RxHamburgerMenu size={20} />
          <p className="text-sm font-medium">All Departments</p>
          <FiChevronDown />
        </button>
        <div className="flex h-full flex-1">
          <div className="h-full flex items-center space-x-4 flex-1 border border-gray-300 divide-x divide-black/40 rounded-l-md border-r-0">
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent w-full h-full outline-none border-none pl-4 placeholder:text-sm"
            />
            <button className="w-[26%] lg:w-[36%] h-full">
              <div className="flex items-center justify-center space-x-2">
                <p className="text-sm font-medium">All Categories</p>
                <FiChevronDown />
              </div>
            </button>
          </div>
          <button className="bg-blue-600 text-white text-sm font-medium h-full w-[16%] rounded-r-md">
            Search
          </button>
        </div>
        <div className="flex space-x-6 xl:space-x-10">
          <div className="flex items-center hover:text-pink-500 transition-all ease-out">
            <Link href={"/liked"}>
              <div className="flex items-center space-x-1">
                <HeartIcon className="w-6 h-6" />
                <p className="text-base font-light">0</p>
              </div>
            </Link>
          </div>
          <div className="flex items-center hover:text-orange-600 transition-all ease-out">
            <Link href={"/cart"}>
              <div className="flex items-center space-x-1">
                <ShoppingBagIcon className="w-6 h-6" />
                <p className="rounded-full bg-gray-300 w-6 h-6 flex items-center justify-center">
                  4
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col leading-tight">
            <p className="text-sm ">Your Cart</p>
            <p className="text-base xl:text-lg font-semibold">$3,215.99</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSearch;
