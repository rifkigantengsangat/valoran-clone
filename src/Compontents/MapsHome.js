import React from 'react'
import { Link } from 'react-router-dom'
import maping from "../asset/maps.jpg"

const MapsHome = () => {
  return (
    <>
    <div className="w-full h-screen bg-button mt-10">
        <div className="flex justify around">
            <div className="mt-32 ml-20">
                <div className="w-3">
                <h1 className="font-Roboto text-white font-bold text-7xl">YOUR MAPS</h1>
                </div>
                <div className="w-full mt-6">
                    <h1 className="font-Roboto text-white font-light text-2xl">FIGHT AROUND THE WORLD.</h1>
                </div>
                <div className="w-[400px] mt-6">
                    <h1 className="font-Roboto text-white font-light ">Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come.</h1>
                </div>
                <div className='text-center pt-10 mt-2/4'>
                    <Link to={"/Maps"} className="block bg-white w-64 py-4 items-center text-center text-button font-Roboto font-bold rounded-lg">VIEW ALL MAPS</Link>
                </div>
            </div>
            <div className="mt-32 ml-20">
                <img src={maping} alt="grup"/>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default MapsHome