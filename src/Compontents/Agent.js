import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import './Agent.css'
const Agent = ({agent}) => {
  return (
    <div className='w-full h-200 bg-black '>
    <div className="pt-20 ">
        <h1 className='text-center font-Roboto text-6xl font-bold text-pinkCustom'>AGENTS IN VALORANT</h1>
    </div>
    <div className="mx-auto h-screen m-auto  flex justify-between flex-wrap mt-10">
   {agent.map((e)=>{
       return(
        <div className="w-2/5 h-full mx-10 bg-black mt-10 z-0 relative duration-200 hover:bg-pinkCustom rounded-xl" key={e.uuid}>
      <div className='z-1 w-full h-full '>
      <img className='w-10/12 object-contain absolute top-0 left-10'src={e.background} alt={e.displayName}/>
     
      </div>
      <div className='z-2 absolute top-10 w-full  h-'>
      <motion.img className='w-full 'src={e.fullPortraitV2} alt={e.displayName}
       whileHover={{ scale: 1.2 }}
       whileTap={{ scale: 0.8 }}
       style={{ x: 100 }}
      />
      </div>
      <div className="z-10 absolute bottom-96 -left-20 w-36">
          <h1 className=' text-transparent rifky  text-8xl rotate-90 uppercase items-center '>{e.displayName}</h1>
      </div>
      <div className="w-ful z-10 absolute -bottom-3 right-32">
       <Link to={`/Agents/${e.uuid}`} className="text-2xl tet-center text-white bg-pinkCustom px-20 py-4 rounded-xl uppercase font-Roboto font-extralight">See Details</Link>
      </div>
        </div>

       )
   })}
   
    </div>
    </div>
  )
}

export default Agent