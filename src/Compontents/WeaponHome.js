import React from 'react'
import {Link} from "react-router-dom"
import { motion } from 'framer-motion'
import Wp from "../asset/weapons.png"
const WeaponHome = () => {
  return (
    <>
    <div className="w-full h-screen">
        <div className="flex justify around">
            <div className="mt-20">
                <motion.img className="w-[600px] pt-20 rotate-45"src={Wp} alt="grup"
                  animate={{ y:[0,20,0] , rotate :[0.10,30,0]}}
                  variants={{y:0 }}
                  transition={{ repeat : Infinity,duration:4 ,type:'spring',stiffness :500}}
                />
            </div>
            <div className="mt-32 ml-20">
                <div className="w-3">
                <h1 className="font-Roboto text-button font-bold text-7xl">YOUR WEAPONS</h1>
                </div>
                <div className="w-full mt-6">
                    <h1 className="font-Roboto text-button font-light text-2xl uppercase"> use weapons to kill your enemies.</h1>
                </div>
                <div className="w-[400px] mt-6">
                    <h1 className="font-Roboto text-button font-light ">Weapons are separated by two categories, Sidearms and Primary weapons. Sidearms consists of pistols, whilst primaries include SMGs, shotguns, rifles, sniper rifles, and machine guns. Guns have limited amounts of ammo but come with reserve magazines.</h1>
                </div>
                <div className='text-center pt-10 mt-2/4'>
                    <Link to={"/Weapons"} className="block bg-button w-64 py-4 items-center text-center text-white font-Roboto font-bold rounded-lg">VIEW ALL WEAPONS</Link>
                </div>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default WeaponHome