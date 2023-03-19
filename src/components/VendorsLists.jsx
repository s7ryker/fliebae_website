import React from "react";
import VendorCard from "./VendorCard";

const VendorsLists = ({vendorList}) => {
  return (
    <div className="flex justify-center items-center mb-5">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {vendorList.map((vendor) => 
            <div key={vendor._id}>
                <VendorCard vendor={vendor} />
            </div>
        )}
      </div>
    </div>
  );
};

export default VendorsLists;
