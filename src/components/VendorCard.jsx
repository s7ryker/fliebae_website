import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const VendorCard = ({ vendor }) => {
  return (
    <Link to="/vendor" state={{vendor: vendor._id}}>
      <div className="shadow-xl max-w-xs pb-3 m-5 rounded-b-3xl">
        <img src={`http://${vendor.profileImageUrl}`} alt="" className="rounded-b-3xl w-screen h-56 bg-cover" />
        <div className="flex flex-row justify-between items-center mx-3 my-3">
          <div className="flex flex-col">
            <h3 className="text-text1 font-bold text-lg">{vendor.name}</h3>
            <h3 className="text-gray-600 font-medium text-sm">
              {vendor.place}
            </h3>
          </div>
          <div className="flex flex-row justify-center items-center">
            <FaStar className="fill-primary" />
            <h3 className="text-text1 font-semibold text-xl ml-1">
              {vendor.rating <= 0 ? 4.5 : vendor.rating}
            </h3>
          </div>
        </div>
        <h4 className="text-text1 font-normal text-xs max-w-full leading-none line-clamp-2 m-3">
          {vendor.description}
        </h4>
      </div>
    </Link>
  );
};

export default VendorCard;
