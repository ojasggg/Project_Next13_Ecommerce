import Link from "next/link";
import React from "react";
import { BiMap, BiSupport } from "react-icons/bi";
import { FaCcPaypal, FaHandHoldingUsd } from "react-icons/fa";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";

interface categoryType {
  title: string;
  link: string;
}

const categories: categoryType[] = [
  {
    title: "Laptops, Ultrabooks & Computers",
    link: "/laptops-ultrabooks-computers",
  },
  {
    title: "Cameras & Photography",
    link: "/cameras-and-photography",
  },
  {
    title: "Smart Phones & Tablets",
    link: "/smartphones-and-tablets",
  },
  {
    title: "Video Games & Consoles",
    link: "/videogames-and-consoles",
  },
  {
    title: "TV & Audio",
    link: "/tv-and-audio",
  },
  {
    title: "Gadgets",
    link: "/gadgets",
  },
  {
    title: "Car Electronic & GPS",
    link: "/car-electronic-and-gps",
  },
  {
    title: "Printers & Ink",
    link: "/printers-and-nk",
  },
  {
    title: "Software",
    link: "/software",
  },
  {
    title: "Office Supplies",
    link: "/office-supplies",
  },
  {
    title: "Computer Components",
    link: "/computer-components",
  },
  {
    title: "Virtual Reality",
    link: "/virtual-reality",
  },
  {
    title: "Smartwatches",
    link: "/smartwatches",
  },
];

const pages: categoryType[] = [
  {
    title: "My Account",
    link: "/my-account",
  },
  {
    title: "Track your Order",
    link: "/track-your-order",
  },
  {
    title: "Wishlist",
    link: "/wishlist",
  },
  {
    title: "Customer Service",
    link: "/customer-service",
  },
  {
    title: "Returns/Exchange",
    link: "/returns-exchange",
  },
  {
    title: "FAQs",
    link: "/faqs",
  },
  {
    title: "Product Support",
    link: "/product-support",
  },
];

const FooterMain = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto flex w-[90vw] justify-evenly py-10 xl:justify-around">
        <div className="flex h-full flex-col">
          <div className="py-6">
            <h1 className="text-2xl">
              Tech<span className="font-bold">Nepal</span>
            </h1>
          </div>

          <div className="flex space-x-12">
            <div className="flex space-x-2">
              <div>
                <BiSupport size={30} />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-tight">
                  Got Question? Call us 24/7
                </p>
                <p className="mt-2 text-lg font-semibold">787 787 688</p>
                <p className="mt-2 text-[12px] text-gray-500">
                  Battisputali, Kathmandu
                </p>
                <div className="flex items-center text-gray-500">
                  <BiMap />
                  <p className="text-[12px]">Find us on Map</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <FaHandHoldingUsd size={30} />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-tight">
                  We using safe payments
                </p>
                <div className="mt-2 flex items-center space-x-4 text-3xl">
                  <RiMastercardFill />
                  <RiVisaLine />
                  <FaCcPaypal />
                </div>
                <div className="mt-4 flex">
                  <p className="text-[12px] text-gray-500">Secured by:</p>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex divide-x divide-gray-400">
          <div>
            <p className="text-lg font-semibold">Find It Fast</p>

            <ul className="mt-4 grid grid-cols-2 gap-2 gap-x-6 text-[12px] font-normal xl:text-sm">
              {categories.map((category) => (
                <li key={category.title}>
                  <Link href={`${category.link}`}>{category.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="pl-4">
              <p className="text-lg font-semibold">Customer Care</p>
              <ul className="mt-4 flex flex-col gap-2 text-[12px] font-normal xl:text-sm">
                {pages.map((page) => (
                  <li key={page.title}>
                    <Link href={`${page.link}`}>{page.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
