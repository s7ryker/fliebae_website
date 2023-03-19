import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import VendorsLists from "../components/VendorsLists";
import { getRestaurantList } from "../services/apiFacade.service";

const Search = () => {
  const [searchPattern, setSearchPattern] = useState("");
  const [vendors, setVendors] = useState([]);
  const [filteredVendors, setFilteredVendors] = useState([]);

  useEffect(() => {
    async function getRestaurants() {
      const result = await getRestaurantList();
      setVendors(result);
    }
    getRestaurants();
  }, []);

  useEffect(() => {
    if(searchPattern !== "") {
      const newList = vendors.filter(vendor => vendor.name.toLowerCase().indexOf(searchPattern.toLowerCase()) !== -1);
      setFilteredVendors(newList);
    }
    else {
      setFilteredVendors(vendors)
    }
  }, [searchPattern])

  const handleSearchPattern = (value) => {
    setSearchPattern(value);
  };
  return (
    <>
      <SearchBar handleSearchPattern={handleSearchPattern} />
      <h1 className="text-text1 font-bold text-2xl ml-5 mt-5 md:mt-0 md:ml-36">Search Results</h1>
      <VendorsLists vendorList={filteredVendors} />
    </>
  );
};

export default Search;
