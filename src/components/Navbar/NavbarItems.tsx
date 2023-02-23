import React from "react";
import Link from "next/link";
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

interface navItem {
  link: string;
  title: string;
}

const navItem = [
  {
    link: "/super-deal",
    title: "Super deals",
  },
  {
    link: "/holi-offer",
    title: "Holi Offer",
  },
  {
    link: "/apple-week",
    title: "Apple weel",
  },
  {
    link: "/logitech-sales",
    title: "logitech sales",
  },
  {
    link: "/headphones-sales",
    title: "Headphones Sale",
  },
];

const NavbarItems = () => {
  return (
    <nav className="bg-white py-4 xl:py-6">
      <div className="w-[90vw] mx-auto flex items-center justify-between">
        <h1 className="text-2xl">
          Tech<span className="font-bold">Nepal</span>
        </h1>

        <ul className="flex  space-x-6 xl:space-x-10 text-sm xl:text-base uppercase font-semibold">
          {navItem.map((item) => (
            <Link href={`${item.link}`}>
              <li className="hover:text-orange-600 transition-all ease-out">
                {item.title}
              </li>
            </Link>
          ))}
        </ul>

        <ul className="font-light text-[12px] xl:text-base flex divide-x divide-black/40 space-x-4 ">
          <Link href={"/track-your-order"}>
            <li className="flex items-center space-x-2 hover:text-orange-600 transition-all ease-in">
              <MdLocalShipping className="text-lg xl:text-xl" />
              <p>Track Your Order</p>
            </li>
          </Link>

          <li>
            <div className="flex items-center space-x-2 pl-4">
              <AiOutlineUser className="text-lg xl:text-xl" />
              <p>
                <Link href={"/register"}>
                  <span className="underline text-blue-500">Register</span>
                </Link>{" "}
                or{" "}
                <Link href={"/login"}>
                  <span className="underline text-blue-500">Sign in</span>
                </Link>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarItems;
