import React from "react";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { FaInstagram, FaWhatsapp, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="h-full bg-accent py-5 flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-col items-start mx-20 my-5">
          <h3 className="text-text2 font-bold mb-5">HELP</h3>
          <Link to="/" className="text-text3">
            Home
          </Link>
          <Link to="/restaurants" className="text-text3">
            Restaurants
          </Link>
          <Link to="/about" className="text-text3">
            About us
          </Link>
          <Link to="/contact" className="text-text3">
            Contact us
          </Link>
        </div>

        <div className="flex flex-col items-start mx-20 my-5">
          <h3 className="text-text2 font-bold mb-5">GET IN TOUCH</h3>
          <p className="text-text3 max-w-sm text-sm">
            Any questions? Let us know in store at Wandoor Kerala, India, 679328
            or call us on +91 9778567367
          </p>
          <div className="flex flex-row mt-3">
            <a href="mailto:support@fliebae.com">
              <SiGmail className="fill-text3 text-xl" />
            </a>
            <a href="https://www.instagram.com/fliebae/">
              <FaInstagram className="fill-text3 text-xl ml-2" />
            </a>
            <a href="https://wa.me/919778567367/">
              <FaWhatsapp className="fill-text3 text-xl ml-2" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.AzeTech.fliebae">
              <FaGooglePlay className="fill-text3 text-xl ml-2" />
              </a>
          </div>
        </div>
      </div>

      <div>
        <p className="text-text3 text-center">
          Copyright © {year} All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
