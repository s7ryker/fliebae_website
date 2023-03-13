import React, { useEffect, useState } from "react";
import DishCard from "./DishCard";
import { getRestaurantProducts } from "../services/apiFacade.service";

const DishList = ({vendorId}) => {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    async function getDishes() {
      const result = await getRestaurantProducts(vendorId);
      setDishes(result);
    }
    getDishes();
  }, [vendorId]);
  return (
    <div className="flex justify-center items-center my-10">
      <div className="grid grid-cols-3">
        {dishes.map((dish) => (
          <div key={dish._id}>
            <DishCard dish={dish} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishList;
