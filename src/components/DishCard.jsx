import React from "react";
import { BiCheckboxSquare } from "react-icons/bi";

const DishCard = ({ dish }) => {
  return (
    <div className="max-w-xs pb-3 m-5">
      <img src={`http://${dish.image}`} alt=""  className="w-screen h-72 bg-cover"/>
      <div className="flex flex-row justify-between items-start mx-3 my-3">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <BiCheckboxSquare
              className={`${
                dish.diet === "Veg" ? "fill-green-700" : "fill-red-600"
              } text-2xl`}
            />
            <h3 className="text-text1 font-bold text-lg truncate w-52">{dish.name}</h3>
          </div>
          <h3 className="text-gray-600 font-medium text-sm ml-1">
            {dish.mealOfTheDay}
          </h3>
        </div>
        <h3 className="text-red-600 font-semibold text-xl ml-1">
        ₹ {dish.dishes[0].price}
        </h3>
      </div>
      <h4 className="text-text1 font-normal text-xs max-w-full leading-none line-clamp-2 m-3">
        {dish.description}
      </h4>
    </div>
  );
};

export default DishCard;
