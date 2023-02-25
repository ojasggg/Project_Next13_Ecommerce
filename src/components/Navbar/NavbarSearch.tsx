import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiChevronDown } from "react-icons/fi";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

const NavbarSearch = () => {
  return (
    <nav className="w-full bg-white py-2">
      <div className="mx-auto flex h-10 w-[90vw] items-center space-x-16 xl:h-12">
        <button className="flex h-full items-center space-x-2 rounded-md border border-gray-300 px-4 xl:px-6">
          <RxHamburgerMenu size={20} />
          <span className="text-sm font-medium">All Departments</span>
          <FiChevronDown />
        </button>
        <div className="flex h-full flex-1">
          <div className="flex h-full flex-1 items-center space-x-4 divide-x divide-black/40 rounded-l-md border border-r-0 border-gray-300">
            <input
              type="text"
              placeholder="Search for products..."
              className="h-full w-full border-none bg-transparent pl-4 outline-none placeholder:text-sm"
            />
            <button className="h-full w-[26%] lg:w-[36%]">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm font-medium">All Categories</span>
                <FiChevronDown />
              </div>
            </button>
          </div>
          <button className="h-full w-[16%] rounded-r-md bg-blue-600 text-sm font-medium text-white">
            Search
          </button>
        </div>
        <div className="flex space-x-6 xl:space-x-10">
          <div className="flex items-center transition-all ease-out hover:text-pink-500">
            <Link href={"/liked"}>
              <div className="flex items-center space-x-1">
                <HeartIcon className="h-6 w-6" />
                <span className="text-base font-light">0</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center transition-all ease-out hover:text-orange-600">
            <Link href={"/cart"}>
              <div className="flex items-center space-x-1">
                <ShoppingBagIcon className="h-6 w-6" />
                <p className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300">
                  4
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col leading-tight">
            <p className="text-sm ">Your Cart</p>
            <p className="text-base font-semibold xl:text-lg">$3,215.99</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSearch;
