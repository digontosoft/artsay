import React from "react";
import facebook from "../../src/assets/ICON LOGO FACEBOOK.png";
import insta from "../../src/assets/ICON LOGO INSTAGRAM.png";
import linkedin from "../../src/assets/ICON SOCIAL LINKEDIN.png";
const Footer = () => {
  return (
    <div className="flex py-20 text-white items-center justify-center md:justify-start gap-6 lg:gap-10">
      <img className="w-6 h-6" src={insta} alt="" />
      <img className="w-6 h-6" src={linkedin} alt="" />
      <img className="w-6 h-6" src={facebook} alt="" />
    </div>
  );
};
export default Footer;
