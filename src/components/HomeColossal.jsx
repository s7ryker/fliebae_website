import { useEffect, useRef, useState } from "react";
import ColossalMain from "./ColossalMain";
import ColossalOthers from "./ColossalOthers";

import dish1 from "../assets/images/dish1.png";
import dish2 from "../assets/images/dish2.png";
import dish3 from "../assets/images/dish3.png";
import ColossalOtherDishes from "./ColossalOtherDishes";


const HomeColossal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const colossals = [
    <ColossalMain />,
    <ColossalOthers dish={dish1} title="Romanjification" content="In Every Bites" />,
    <ColossalOtherDishes dish={dish2} title="1000+" content="Happy Customers"/>,
    <ColossalOthers dish={dish3} title="100+" content="New Dishes" />
  ]

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((preIndex) => preIndex === colossals.length -1 ? 0 : preIndex + 1)
    }, 3000);
    return () => resetTimeout();
  }, [currentIndex]);

  return (
    <div className="bg-primary h-screen px-5 py-10">
      {colossals[currentIndex]}
    </div>
  );
};
export default HomeColossal;
