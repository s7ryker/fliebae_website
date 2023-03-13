import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VendorsLists from "./VendorsLists";
import { getRestaurantList } from "../services/apiFacade.service";

const HomeVendor = () => {
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    async function getRestaurants() {
      const result = await getRestaurantList();
      setVendors(result.slice(0, 6));
    }
    getRestaurants();
  }, []);
  return (
    <>
      <div className="flex flex-row justify-between items-center mt-16 mx-40">
        <h1 className="text-text1 font-bold text-2xl">Resturants</h1>
        <Link to="/restaurants">
          <h4 className="text-text4 font-normal text-sm">View all...</h4>
        </Link>
      </div>
      <VendorsLists vendorList={vendors} />
    </>
  );
};

export default HomeVendor;
