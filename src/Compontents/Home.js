import React from "react";
import "./Agent.css"
import agent from "../asset/agent.png"
import {motion} from 'framer-motion'
import AgentHome from "./AgentHome";
import MapsHome from "./MapsHome";
import WeaponHome from "./WeaponHome";
export default function Home() {
  const list = {
    visible: { opacity: 1,x:0},
    hidden: { opacity: 0, x:100},
  }
  return (
    <>
   <div className="warna h-screen relative">
     <div className="absolute z-0 top-32 left-56">
 <motion.h1 className="text-white font-Roboto text-[200px] font-black"
 initial={{x:-100,opacity:0}}
 animate={{ x:0,opacity:1 }}
 transition={{duration :1 ,delay :1}}
 >VALOR<span className="text-transparent rifki">ANT</span></motion.h1>
     </div>
     <motion.div className="absolute z-2 top-2 right-80 "
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
 <motion.img className="w-[400px]"src={agent} alt="agent"
   animate={{ y:[0,20,0] }}
   variants={{y:0}}
   transition={{ repeat : Infinity,duration:3 ,stiffness :500}}
 />
     </motion.div>
     <div>
     <motion.div className="text-white font-Roboto absolute bottom-40 left-10 italic"
     initial={{y:-100,opacity:0}}
     animate={{ y:0,opacity:1 }}
     transition={{duration :1 ,delay :1}}
     >
       <h1>5V5 CHARACTER-BASED</h1>
       <h1>TACTICAL SUPPORT</h1>
       <a className="block w-full bg-button text-center py-4 rounded-lg mt-4" href="https://playvalorant.com/en-us/">PLAY NOW</a>
     </motion.div>
     </div>
   </div>
   <AgentHome/>
   <MapsHome/>
   <WeaponHome/>
   </>
  );
}