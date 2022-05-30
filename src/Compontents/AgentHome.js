import React from 'react'
import { Link } from 'react-router-dom'
import Grup from "../asset/agentgrup.png"
import {motion} from "framer-motion"
const AgentHome = () => {
  return (
      <>
    <div className="w-full h-screen">
        <div className="flex justify around">
            <div className="mt-20">
                <motion.img src={Grup} alt="grup"
                 animate={{ y:[0,20,0] }}
                 variants={{y:0}}
                 transition={{ repeat : Infinity,duration:3 ,stiffness :500}}
                />
            </div>
            <div className="mt-32 ml-20">
                <div className="w-3">
                <h1 className="font-Roboto text-button font-bold text-7xl">YOUR AGENTS</h1>
                </div>
                <div className="w-full mt-6">
                    <h1 className="font-Roboto text-button font-light text-2xl"> CREATIVITY IS YOUR GREATEST WEAPON.</h1>
                </div>
                <div className="w-[400px] mt-6">
                    <h1 className="font-Roboto text-button font-light ">More than guns and bullets, you’ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same.</h1>
                </div>
                <div className='text-center pt-10 mt-2/4'>
                    <Link to={"/Agents"} className="block bg-button w-64 py-4 items-center text-center text-white font-Roboto font-bold rounded-lg">VIEW ALL AGENTS</Link>
                </div>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default AgentHome