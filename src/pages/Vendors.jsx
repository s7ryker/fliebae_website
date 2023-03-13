import React, { useEffect, useState } from "react";
import VendorsLists from "../components/VendorsLists";
import { getRestaurantList } from "../services/apiFacade.service";

const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    async function getRestaurants() {
      const result = await getRestaurantList();
      setVendors(result);
    }
    getRestaurants();
  }, []);

  return <VendorsLists vendorList={vendors}/>;
};

export default Vendors;
