import React from 'react'
import "./Agent.css"
import Weapon from "./Weapon"

const Banner = ({random,random2,weapon}) => {
  return (
      <>
    <div className="w-full items-center h-screen  bg-black">
        <div className="flex bg-black items-center h-80 w-full justify-around">
        <div className="text-center border-2 w-[600px] h-[500px] mt-80 rounded-xl ">
            <div className="w-full h-12 bg-pinkCustom rounded-xl font-Roboto uppercase ">
            <h1 className="text-white text-4xl">Weapons</h1>
            </div>
            <img className=" h-[200px] w-full mt-36" src={random?.displayIcon}/>
                <h1 className="text-transparent rifki text-6xl pt-10 uppercase">{random?.displayName}</h1>
            </div>
            <div className="text-center  border-2 w-[600px] h-[500px] mt-80 rounded-xl ">
            <div className="w-full h-12 bg-pinkCustom rounded-xl uppercase font-Roboto">
            <h1 className="text-white text-4xl">Weapons</h1>
            </div>
            <img className=" h-[200px] w-full mt-36" src={random2?.displayIcon}/>
                <h1 className="text-transparent rifki text-6xl pt-10 uppercase">{random2?.displayName}</h1>
            </div>
        </div>
 
    </div>
    <Weapon weapon={weapon}/>
    </>
  )
}

export default Banner