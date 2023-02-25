import Link from "next/link";
import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaGooglePlusG, FaVimeoSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoMdPaperPlane } from "react-icons/io";

const NewsLetter = () => {
  return (
    <section className="border-b border-gray-300 bg-white py-6">
      <div className="mx-auto flex w-[90vw] items-center justify-between">
        <div className="flex items-center space-x-2">
          <IoMdPaperPlane size={30} />
          <div>
            <p className="font-semibold">Sign up for Newsletter</p>
            <p className="text-[12px] font-normal">
              ...and receive $20 coupon for first shopping
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex h-10 w-[26vw] items-center border border-gray-300">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full border-none bg-transparent px-4 outline-none placeholder:text-[12px]"
            />
            <button className="h-full w-36 bg-blue-500 text-[12px] text-white ">
              Sign up
            </button>
          </div>
          <p className="text-[12px] underline">Unsubscribe</p>
        </div>
        <ul className="flex items-center space-x-4">
          <p className="socials">
            <Link href="https://facebook.com">
              <MdFacebook size={16} />
              <span>Facebook</span>
            </Link>
          </p>
          <li className="socials">
            <Link href="https://twitter.com">
              <AiFillTwitterCircle size={16} />
              <span>Twitter</span>
            </Link>
          </li>
          <li className="socials">
            <Link href="https://Google.com">
              <FaGooglePlusG size={16} />
              <span>Google</span>
            </Link>
          </li>
          <li className="socials">
            <Link href="https://Vimeo.com">
              <FaVimeoSquare size={16} />
              <span>Vimeo</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NewsLetter;
