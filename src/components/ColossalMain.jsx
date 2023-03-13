import React from 'react'
import logo from "../assets/images/logo.png";
import googleplay from "../assets/icons/googleplay.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import instagram from "../assets/icons/instagram.svg";
import gmail from "../assets/icons/gmail.svg";
import { motion } from 'framer-motion';

const ColossalMain = () => {
  return (
    <div className="flex flex-row justify-evenly items-center">
        <div className="">
          <motion.img
           initial={{x: -50, opacity: 0.5}}
           animate={{x: 0, opacity: 1}}
           transition={{duration: 0.8}}
           src={logo}
           alt=""
           className="h-4/5 w-4/5" />
        </div>
        <motion.div
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{duration: 1}}
         className="items-start mt-10 w-2/5">
          <div className="flex flex-col">
            <h2
              className="font-bold text-text1 text-5xl text-start"
              style={{ fontFamily: "Aquire, sans-serif" }}
            >
              FLIEBAE
            </h2>
            <h2
              className="font-bold text-text1 text-lg text-start"
              style={{ fontFamily: "Aquire, sans-serif" }}
            >
              BEFORE ANYONE ELSE
            </h2>
            <div className="flex flex-row justify-start mt-3">
              <a href="https://play.google.com/store/apps/details?id=com.AzeTech.fliebae">
                <img src={googleplay} alt="" className="w-9" />
              </a>
              <a className="ml-4" href="https://wa.me/919778567367/">
                <img src={whatsapp} alt="" className="w-9" />
              </a>
              <a className="ml-4" href="https://www.instagram.com/fliebae/">
                <img src={instagram} alt="" className="w-9" />
              </a>
              <a className="ml-4" href="mailto:support@fliebae.com">
                <img src={gmail} alt="" className="w-9" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
  )
}

export default ColossalMain