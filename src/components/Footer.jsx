import React from "react";
import facebook from "../../src/assets/ICON LOGO FACEBOOK.png";
import insta from "../../src/assets/ICON LOGO INSTAGRAM.png";
import linkedin from "../../src/assets/ICON SOCIAL LINKEDIN.png";
const Footer = () => {
  return (
    <div className="flex py-0 px-2 md:px-20 text-white items-center justify-center md:justify-start gap-6 lg:gap-10">
      <a href="https://www.instagram.com/">
        <img className="w-6 h-6" src={insta} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/">
        <img className="w-6 h-6" src={linkedin} alt="" />
      </a>
      <a href="https://www.facebook.com/">
        <img className="w-5 h-6" src={facebook} alt="" />
      </a>
    </div>
  );
};
export default Footer;
