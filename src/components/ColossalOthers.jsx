import React from "react";
import { motion } from 'framer-motion';

const ColossalOthers = ({dish, title, content}) => {
  return (
    <div className="flex flex-row justify-evenly items-center">
         <motion.img
           initial={{x: -50, opacity: 0.5}}
           animate={{x: 0, opacity: 1}}
           transition={{duration: 0.5}}
        src={dish} alt="" className="h-2/5 w-2/5" />
      <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.8}}
        className="items-start w-2/5">
        <div className="flex flex-col">
          <h2
            className="text-black text-4xl text-start font-normal"
          >
            {title}
          </h2>
          <h2
            className="font-bold text-black text-4xl text-start mt-3"
          >
            {content}
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

export default ColossalOthers;
