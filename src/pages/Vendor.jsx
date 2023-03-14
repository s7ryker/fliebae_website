import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import DishList from "../components/DishList";
import { getRestaurantDetails } from "../services/apiFacade.service";
import { generateImageUrl } from "../utils/helper/imageUrlGenerator.helper";

const Vendor = () => {
  const location = useLocation();
  const vendorId = location.state.vendor;

  const [vendor, setVendor] = useState([]);
  useEffect(() => {
    async function getRestaurant() {
      const result = await getRestaurantDetails(vendorId);
      setVendor(result);
    }
    getRestaurant();
  }, [vendorId]);

  return (
    <div className="container mx-auto">
      <div className="shadow-2xl mx-28 my-10 p-10 rounded-3xl">
        <div className="flex flex-row justify-between items-center m-10">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <h1 className="text-text1 text-lg font-bold">{vendor.name}</h1>
                <h1 className="text-slate-700 text-sm font-normal">
                  {vendor.place}
                </h1>
              </div>
            </div>
              <div className="flex flex-row items-center mt-3">
                <FaStar className="fill-primary" />
                <h3 className="text-text1 font-semibold text-xl ml-1">
                  {vendor.rating <= 0 ? 4.5 : vendor.rating}
                </h3>
              </div>
            <p className="text-text1 font-normal max-w-md mt-10">
              {vendor.description}
            </p>
          </div>
          <img src={generateImageUrl(vendor.profileImageUrl)} alt="" className="w-96 h-72 rounded-xl" />
        </div>
      </div>

      <DishList vendorId={vendorId} />
    </div>
  );
};

export default Vendor;
