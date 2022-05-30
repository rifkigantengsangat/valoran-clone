import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
const CardSkill = ({data,dataIndex}) => {
  return (
    <>
    <AnimatePresence exitBeforeEnter>
    <div className=" w-full h-96 text-center items-center bg-black">
      <motion.div 
         animate={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: 20 }}
         exit={{ opacity: 0, y: -20 }}
         transition={{ duration: 0.5 }}
      >
      <div className="w-full">
  <p className="text-transparent rifky text-4xl font-Roboto uppercase font-bold pt-4">{data?.[dataIndex]?.displayName}</p>
  </div>
  <div className="w-full mt-10 ">
    <img className="w-24 mx-auto"src={data?.[dataIndex]?.displayIcon} alt="Icon"/>
  </div>
  <div className="mt-10 pl-44 text-center w-4/5" >
  <p className="text-pinkCustom text-sm font-Roboto uppercase font-bold text-center tracking-wider">{data?.[dataIndex]?.description}</p>
  </div>
   <div>
   </div>
    </motion.div>
    </div>
    </AnimatePresence>
    </>
  )
}

export default CardSkill