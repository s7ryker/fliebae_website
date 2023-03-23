import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VendorsLists from "./VendorsLists";
import { getRestaurantList } from "../services/apiFacade.service";
import Loading from "./Loading";
const HomeVendor = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRestaurants() {
      const result = await getRestaurantList();
      setVendors(result.slice(0, 6));
    }
    getRestaurants();
    setLoading(false);
  }, []);
  return (
    <>
      <div className="flex flex-row justify-between items-center mt-16 mx-5 md:mx-40">
        <h1 className="text-text1 font-bold text-2xl">Resturants</h1>
        <Link to="/restaurants">
          <h4 className="text-text4 font-normal text-sm">View all...</h4>
        </Link>
      </div>
      {loading ? <Loading /> : <VendorsLists vendorList={vendors} />}
    </>
  );
};

export default HomeVendor;
