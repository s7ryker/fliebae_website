import React from "react";
import { motion } from 'framer-motion';

const ColossalOthers = ({dish, title, content}) => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-evenly md:items-center">
         <motion.img
           initial={{x: -50, opacity: 0.5}}
           animate={{x: 0, opacity: 1}}
           transition={{duration: 0.5}}
        src={dish} alt="" className="md:h-2/5 md:w-2/5" />
      <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.8}}
        className="items-start md:w-2/5">
        <div className="flex flex-col">
          <h2
            className="text-black text-2xl md:text-4xl text-start font-normal"
          >
            {title}
          </h2>
          <h2
            className="font-bold text-black text-3xl md:text-4xl w-full text-start mt-3"
          >
            {content}
          </h2>
          <a href="https://play.google.com/store/apps/details?id=com.AzeTech.fliebae">
            <div className="w-4/5 md:w-fit bg-red-600 rounded-3xl py-2 px-5 flex items-center mt-3 md:mx-5 hover:border-2 hover:border-slate-200 hover:bg-primary transition-opacity duration-200">
              <h3 className="mx-3 text-text2">Order Now</h3>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ColossalOthers;
