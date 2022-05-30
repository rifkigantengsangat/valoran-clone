import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Banner from "./Banner"
import Loading from './Loading'
const Weapons = () => {
  const [weapons,setWeapon] =useState ([])
  const [random,setRandom] = useState([])
  const [random2,setRandom2] = useState([])
  const [loading,setLoading] = useState(false)
  const randomData = weapons[Math.floor(Math.random()*weapons?.length)]
  const randomData2 = weapons[Math.floor(Math.random()*weapons?.length)]
  const fetchData = async () =>{
    const response = await axios.get(`https://valorant-api.com/v1/weapons`);
   setWeapon(response.data.data);
  }
  useEffect(() =>{
    fetchData()
  },[])
  useEffect(() =>{
const delay = setTimeout(() => {
   setRandom(randomData)
   setRandom2(randomData2)
   if(random?.length===0 || random?.length===undefined ){
     setLoading(true)
   }
   if(random2?.length===0 || random2?.length===undefined ){
    setLoading(true)
  }
}, 7000);
return () => clearTimeout(delay);
  },[random,random2])
  return (
    <div className='h-screen bg-black'>
     {!loading ? <Loading/> : <Banner  random={random} random2={random2} weapon ={weapons}/>}

    </div>
  )
}

export default Weapons