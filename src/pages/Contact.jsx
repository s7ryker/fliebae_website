import React from "react";
import { ImLocation2 } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="container mx-20 my-16">
      <h1 className="text-text1 font-bold text-2xl mb-5">Contact Us</h1>

      <div className="flex flex-col max-w-lg">
        <a href="https://www.google.com/maps/search/?api=1&query=11.196799504530365,76.23580457955472">
          <div className="flex flex-row justify-start">
            <ImLocation2 className="fill-primary text-2xl" />
            <div className="flex flex-col ml-5">
              <p className="text-slate-700 text-md font-normal">Fliebae</p>
              <p className="text-slate-700 text-md font-normal">
                Opposite Bus Stand, Ernad Arcade
              </p>
              <p className="text-slate-700 text-md font-normal">
                Wandoor, Malappuram, 679328
              </p>
            </div>
          </div>
        </a>
        <div className="flex flex-row justify-start mt-5">
          <BsTelephoneFill className="fill-primary text-xl" />
          <div className="flex flex-col ml-5">
            <p className="text-slate-700 text-md font-normal">+91 9778567367</p>
          </div>
        </div>
        
        <div className="flex flex-row justify-start mt-5">
          <SiGmail className="fill-primary text-xl" />
          <div className="flex flex-col ml-5">
            <p className="text-slate-700 text-md font-normal">support@fliebae.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
