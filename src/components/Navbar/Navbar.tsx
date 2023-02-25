import React from "react";
import NavbarItems from "./NavbarItems";
import NavbarSearch from "./NavbarSearch";
import Topbar from "./Topbar";

const Navbar = () => {
  return (
    <section>
      <Topbar />
      <NavbarItems />
      <NavbarSearch />
    </section>
  );
};

export default Navbar;
