import React,{useState,useEffect} from 'react'
import Agent from './Agent'
import './Agent.css'
import {motion} from "framer-motion"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from 'axios'
const Agents = () => {
  const [valorant,setValorant] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await axios.get('https://valorant-api.com/v1/agents')
        setValorant(response.data.data);
        console.log(response.data.data)
      }catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[])  
  return (
    <div className ="bg-black bg-cover bg-no-repeat bg-center w-full h-full">
    <div className='w-full flex justify-center items-center h-screen'>
      <div className='pr-20'>
        <motion.h1 className="rotate-90 text-transparent text-8xl font-Roboto rifki"
        initial={{ opacity: 0,x:100  }}
        animate={{ opacity : 1,x:1 }}
        transition={{ delay:1,duration:1}}
        >AGENTS</motion.h1>
      </div>
      <div className="flex items-center flex-start w-full mt-16">
      <Splide className=" border-l-2"  options={ {
        rewind: true,
        width:868,
        height:603,
        rewind:true,
        pagination:false,
        type:'loop',
        autoplaySpeed:1000,
        autoplay:'playing',
        arrows:false,
       
        gap:'1rem'
        
      } } >
      {valorant.map((agents)=>{
      
        return(
         <SplideSlide className='relative bg-black  w-full'>
       <div className="w-96 ml-80 mt-20">
<motion.img className="w-screen h-screen  bg-red "
    animate={{ y:[0,20,0] }}
    variants={{y:0}}
    transition={{ repeat : Infinity,duration:2 ,stiffness :500}}
src={agents.background}/>
<motion.img  className= 'w-5/6 h-full absolute bottom-0 right-51 object-contain'
  animate={{ y:[0,20,0] }}
  variants={{y:0}}
  transition={{ repeat : Infinity,duration:2}}
src={agents.fullPortraitV2 ?? agents.displayName} alt={agents.displayName}/>
<div className='absolute top-64 left-0 '>
<h1 className=" text-transparent rotate-90 font-Roboto  text-8xl rifki border-redCustom uppercase text-center" >{agents.displayName}</h1>
</div>

       </div>
         </SplideSlide>    
       
      )
      })}
</Splide>
      </div>
      </div> 
       
  <Agent agent={valorant}/>
    </div>
  )
}

export default Agents;