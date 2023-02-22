import React from "react";
import Link from "next/link";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import NavbarTop from "./NavbarTop";
import NavbarMain from "./NavbarMain";

const Navbar = () => {
  return (
    <nav>
      {/* Top Navbar */}
      <NavbarTop />
      {/* Navbar */}
      <NavbarMain />
    </nav>
  );
};

export default Navbar;
