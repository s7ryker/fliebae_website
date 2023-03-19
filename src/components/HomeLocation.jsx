import React from "react";
import map from "../assets/images/map.png";

const HomeLocation = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mx-5 md:mx-36 my-16">
      <div className="flex flex-col">
        <h2 className="text-text1 font-bold">Our Delivery Location</h2>
        <p className="text-text1 text-ellipsis font-light max-w-sm">
        We have a delivery circle of 10 KM from our office which is at Wandoor. 
        </p>
      </div>
      <img src={map} alt="" className="md:w-1/2 md:h-1/2 mt-5 md:mt-0" />
    </div>
  );
};

export default HomeLocation;
