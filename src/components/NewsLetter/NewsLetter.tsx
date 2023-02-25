import Link from "next/link";
import React, { ReactNode } from "react";
import { MdFacebook } from "react-icons/md";
import { FaGooglePlusG, FaVimeoSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoMdPaperPlane } from "react-icons/io";
import { ScissorsIcon } from "@heroicons/react/24/outline";

interface socialItems {
  link: string;
  title: string;
  Icon: ReactNode;
}

const socialItems: socialItems[] = [
  {
    link: "https://facebook.com",
    title: "Facebook",
    Icon: <MdFacebook />,
  },
  {
    link: "https://twitter.com",
    title: "Twitter",
    Icon: <AiFillTwitterCircle />,
  },
  {
    link: "https://google.com",
    title: "Google+",
    Icon: <FaGooglePlusG />,
  },
  {
    link: "https://vimeo.com",
    title: "Vimeo",
    Icon: <FaVimeoSquare />,
  },
];

const NewsLetter = () => {
  return (
    <section className="border-b border-gray-300 bg-white py-6">
      <div className="mx-auto flex w-[90vw] items-center justify-between">
        <div className="flex items-center space-x-2">
          <IoMdPaperPlane size={30} />
          <div>
            <p className="font-semibold xl:text-lg">Sign up for Newsletter</p>
            <p className="text-[12px] font-normal xl:text-[14px]">
              ...and receive $20 coupon for first shopping
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex h-10 w-[26vw] items-center rounded-sm border border-gray-300 xl:h-12 xl:w-[30vw]">
            <input
              type="text"
              placeholder="Enter your email address"
              className="h-full w-full border bg-transparent px-4 outline-none placeholder:text-[12px] focus-within:border-blue-500 xl:placeholder:text-[14px]"
            />
            <button className="h-full w-36 rounded-r-sm bg-blue-700 text-[12px] text-white xl:text-[14px]">
              Sign up
            </button>
          </div>
          <p className="text-[12px] underline xl:text-[14px]">Unsubscribe</p>
        </div>
        <ul className="flex items-center space-x-2 xl:space-x-6">
          {socialItems.map((social) => (
            <Link href={social.link} key={social.title}>
              <li className="socials">
                {social.Icon && social.Icon}
                <span>{social.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewsLetter;
