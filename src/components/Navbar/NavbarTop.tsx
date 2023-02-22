import Link from "next/link";
import React from "react";
import { IoLogoAppleAppstore } from "react-icons/io5";

interface NavItem {
  title: string;
  link?: string;
}

const topNavItems: NavItem[] = [
  {
    title: "Promo",
    link: "/promo",
  },
  {
    title: "MobileBazar News",
    link: "/news",
  },
  {
    title: "Help & Center",
    link: "/help",
  },
  {
    title: "Language",
    link: "/lang",
  },
];

const NavbarTop = () => {
  return (
    <div className="bg-gray-100 py-1">
      <div className="mx-auto flex w-[90vw] items-center justify-between">
        <ul className="flex space-x-6">
          <li className="flex items-center space-x-2 text-[12px] font-light">
            <IoLogoAppleAppstore size={20} className="text-violet-600" />
            <p>Download MobileBazar mobile app now</p>
          </li>
        </ul>
        <ul className="flex space-x-4">
          {topNavItems.map((item) => (
            <li
              className="flex items-center space-x-1 text-[12px] font-light transition-all hover:underline"
              key={item.title}
            >
              <Link href={`${item.link}`}>
                <p>{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarTop;
