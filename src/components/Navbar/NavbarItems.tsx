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
      <div className="mx-auto flex w-[90vw] items-center justify-between">
        <h1 className="text-2xl">
          Tech<span className="font-bold">Nepal</span>
        </h1>

        <ul className="flex  space-x-6 text-sm font-semibold uppercase xl:space-x-10 xl:text-base">
          {navItem.map((item) => (
            <li
              className="transition-all ease-out hover:text-orange-600"
              key={item.title}
            >
              <Link href={`${item.link}`}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex space-x-4 divide-x divide-black/40 text-[12px] font-light xl:text-base ">
          <li className="flex items-center space-x-2 transition-all ease-in hover:text-orange-600">
            <Link href={"/track-your-order"}>
              <MdLocalShipping className="text-lg xl:text-xl" />
              <p>Track Your Order</p>
            </Link>
          </li>

          <li>
            <div className="flex items-center space-x-2 pl-4">
              <AiOutlineUser className="text-lg xl:text-xl" />
              <p>
                <Link href={"/register"}>
                  <span className="text-blue-500 underline">Register</span>
                </Link>{" "}
                or{" "}
                <Link href={"/login"}>
                  <span className="text-blue-500 underline">Sign in</span>
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
