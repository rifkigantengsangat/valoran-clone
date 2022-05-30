import React from 'react'
import './Agent.css'
import { motion } from 'framer-motion'
import DetailSkill from "./DetailSkill"
const Detail = ({data}) => {
  const list = {
    visible: { opacity: 1,x:0},
    hidden: { opacity: 0, x:-200},
  }
  return (
      <>   
       <div className="flex w-full mx-auto  justify-around h-4/5 items-center">
    <div className="text-center w-28 ">
        <h1 className="text-transparent rifki font-Roboto text-8xl font-black uppercase">{data?.displayName}</h1>
    </div>
    <motion.div className='w-2/4 mt-12 ml-48'
     initial="hidden"
     animate="visible"
     variants={list}
     transition={{
      delay: 1,
      x: { type: "spring", stiffness: 100 },
    repeat:Infinity,
      default: { duration: 1 },
    }}
    >
      <motion.img className='object-contain'src={data?.fullPortrait} alt={data?.displayName}
      
      animate={{ y:[0,20,0] }}
      variants={{y:0}}
      transition={{ repeat : Infinity,duration:2}}


      />
    </motion.div>
    <div className="mr-12 mt-12">
        <h1 className="text-transparent font-Roboto text-6xl font-black rifki text-center">ROLE</h1>
        <hr></hr>
    <div className="flex justify-around w-96 items-center place-items-center pr-10  ">
   <div className="pr-2 ">
   <h1 className="text-white font-Roboto text-3xl text-center">{data?.role?.displayName}</h1>
   </div>
   <div className='pl-10'>
  <img className="w-8 text-center" src={data?.role?.displayIcon} alt={data?.role?.displayName}/>
   </div>
    </div>
        <div className="mt-10 w-96">
          
        <h1 className="text-transparent font-Roboto text-6xl font-black rifki text-center uppercase">Biography</h1>
        <hr></hr>
        <p className="text-white pt-2">{data?.description}</p>
        </div>

    </div>
   
    </div>
    <DetailSkill data={data}/>
    </>

  )
}

export default Detail