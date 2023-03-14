import React from "react";
import { BiCheckboxSquare } from "react-icons/bi";
import { generateImageUrl } from "../utils/helper/imageUrlGenerator.helper";
import { motion } from "framer-motion";

const DishCard = ({ dish }) => {
  console.log(generateImageUrl(dish.image), dish.image)
  return (
    <motion.div whileHover={{scale: 1.05}} className="max-w-xs pb-3 m-5">
      <img src={generateImageUrl(dish.image)} alt=""  className="w-screen h-72 bg-cover"/>
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
    </motion.div>
  );
};

export default DishCard;
