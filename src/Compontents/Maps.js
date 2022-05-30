import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Agent.css'
const Maps = () => {
  const [map,setMap] = useState([])
  const fetchingData = async()=>{
    const {data} = await axios.get("https://valorant-api.com/v1/maps")
    setMap(data.data);
  }
  useEffect(() =>{
fetchingData()
  },[])
  
  return (
    <div className="bg-black h-screen">
      <div className="w full h-64   ">
        <div className='items-center text-center '>
          {/* <h1 className='text-white font-Roboto text-6xl font-black  '>MAPS</h1> */}
        </div>
        <div className='h-96 w-full mx-auto'>
        <Splide className=" "  options={ {
        rewind: true,
       height:600,
        pagination:true,
        type:'loop',
        autoplaySpeed:1000,
        autoplay:'playing',
        arrows:true,
        gap:'1rem'     
      } } >
        {map.map(maps=>{
          console.log(maps);
         return(
           <SplideSlide key={maps?.uuid} className="relative">
           <div>
             <img className='object-contain'src={maps?.splash}/>
             <div className='absolute top-0 w-3/5  h-64 '>
               <div className='pt-10 pl-10'>
               <h1 className='text-transparent rifki text-6xl text-left uppercase'>{maps?.displayName}</h1>
               </div>
             </div>
           </div>
           </SplideSlide>
         )
        })}
        </Splide>
        </div>
      </div>
    </div>
  )
}

export default Maps