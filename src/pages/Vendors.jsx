import React, { useEffect, useState } from "react";
import VendorsLists from "../components/VendorsLists";
import { getRestaurantList } from "../services/apiFacade.service";
import Loading from "../components/Loading";

const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getRestaurants() {
      const result = await getRestaurantList();
      setVendors(result);
    }
    getRestaurants();
    setLoading(false);
  }, []);

  return (
    <>
    {
      loading
      ? <Loading />
      : <VendorsLists vendorList={vendors}/>
    }
    </>
  );
};

export default Vendors;
