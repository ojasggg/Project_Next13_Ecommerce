import React from "react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";

const NavbarMain = () => {
  return (
    <div className="bg-white py-3">
      <div className="mx-auto flex w-[90vw] items-center space-x-20">
        <h1 className="text-xl">
          Mobile<span className="font-bold">Bazar</span>
        </h1>
        {/* Input box for search functionality */}
        <div className="flex-1">
          <div className="flex w-[70%] items-center space-x-4 rounded-md border border-gray-400 p-2 px-4">
            <BsSearch size={20} className="text-gray-300" />
            <input
              type="text"
              placeholder="Search in MobileBazar"
              className="w-full border-none bg-transparent outline-none placeholder:text-sm"
            />
          </div>
        </div>
        {/* Profile */}
        <div className="flex w-[15%] items-center justify-end space-x-6">
          <div className="flex cursor-pointer items-center justify-center space-x-1 rounded-full p-2 text-gray-400 hover:text-orange-400">
            <p className="text-sm">Cart</p>
            <HiOutlineShoppingCart size={22} />
          </div>
          <ul className="flex gap-x-2 divide-x text-sm xl:text-[16px]">
            <li>
              <Link href={"/login"}>
                <p className="transition-all hover:underline">Login</p>
              </Link>
            </li>
            <li>
              <Link href={"/register"}>
                <p className="pl-2 transition-all hover:underline">Register</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarMain;
