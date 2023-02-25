import React from "react";
import NewsLetter from "../NewsLetter/NewsLetter";
import FooterBottom from "./FooterBottom";
import FooterMain from "./FooterMain";

const Footer = () => {
  return (
    <footer className="mt-10">
      <NewsLetter />
      <FooterMain />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
