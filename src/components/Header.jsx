import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-between p-5">
      <div className="mx-5 flex flex-row justify-between items-center">
        <Link to="/">
          <h1
            className="font-bold text-text1 text-2xl"
            style={{ fontFamily: "Aquire, sans-serif" }}
          >
            FLIEBAE
          </h1>
        </Link>
        <div className="lg:flex lg:flex-row justify-evenly mx-3 min-w-full hidden">
          <Link to="/" className="text-text1">
            Home
          </Link>
          <Link to="/restaurants" className="text-text1">
            Restaurants
          </Link>
          <Link to="/about" className="text-text1">
            About
          </Link>
          <Link to="/contact" className="text-text1">
            Contact
          </Link>
        </div>
      </div>
      <Link to="/search">
        <div className="border-2 border-text4 rounded-3xl py-1 px-5 flex items-center mx-5 hover:border-slate-200 hover:bg-primary transition-all duration-500">
          <BsSearch className="fill-text4" />
          <h3 className="mx-3 text-text4">Search</h3>
        </div>
      </Link>
    </div>
  );
};

export default Header;
