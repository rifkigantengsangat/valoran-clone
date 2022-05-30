import React from 'react'
import Logo from '../asset/Logo.png'
import Valorant from '../asset/Valorantlogo.png'
import { Data } from '../DataLink'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
 const NavLinkStyle = ({isActive}) => {
   return{
     fontWeight : isActive ? 'bold' : 'bold'
   }
 }
  return (
    <div className='container h-16 bg-blueCustom flex items-center justify-start w-full '>
      <div className ='mt-2 w-32'>
    <img className='w-64' src={Logo} alt="logo" />
      </div>
      <div className='w-0.5 bg-white h-8'></div>
     <div className='ml-10'>
       <img className='w-16' src={Valorant} alt='valorant'/>
     </div>
     <div className='ml-20'>
      <ul className='flex flex-between px-5'>
        {Data.map(e=>{
          return(
            <NavLink to={e.path} style={NavLinkStyle} className='mx-10 text-white text-center font-light text-sm uppercase' key={e.id}>{e.name}</NavLink>
          )
        })}
      </ul>
     </div>
    </div>
  )
}

export default Navbar