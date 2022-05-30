import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
const WeaponsDetail = () => {
    const [detail,setDetail] = useState([])
    const {uuid} = useParams()
  const fetchData = async () =>{
      const {data} = await axios.get(`https://valorant-api.com/v1/weapons/${uuid}`)
      setDetail(data.data)
  }
  useEffect(() =>{
   fetchData()
  },[])
  console.log(detail?.weaponStats?.damageRanges[0])
  return (
    <div className="w-full bg-black box h-[560px]">
        <div className="w-11/12 h-full mx-auto mt-10 pb-10  flex">
       <div className="w-2/4">
           <div className="pt-30  pb-10">
           <h1 className="text-center pt-12 uppercase rifky font-Roboto text-4xl text-transparent">Detail Weapon</h1>
           <div className="text-center pt-10 font-Roboto ">
               <h1 className="uppercase text-pinkCustom  font-black text-xl ">FireRate : {detail?.weaponStats?.fireRate}</h1>
               <h1 className="uppercase text-pinkCustom  font-black text-xl pt-5">Magazine : {detail?.weaponStats?.magazineSize}</h1>
               <h1 className="uppercase text-pinkCustom  font-black text-xl pt-5">firstBulletAccuracy : {detail?.weaponStats?.firstBulletAccuracy}</h1>
           </div>
           <div>
           <h1 className="text-center pt-12 uppercase rifky font-Roboto text-4xl text-transparent">Detail Damage</h1>
           <div className="text-center pt-10 font-Roboto ">
               <h1 className="uppercase text-pinkCustom  font-black text-xl ">Head Damage : {detail?.weaponStats?.damageRanges[0]?.headDamage}</h1>
               <h1 className="uppercase text-pinkCustom  font-black text-xl pt-5">Body Damage : {detail?.weaponStats?.damageRanges[0]?.bodyDamage}</h1>
               <h1 className="uppercase text-pinkCustom  font-black text-xl pt-5">firstBulletAccuracy : {detail?.weaponStats?.damageRanges[0]?.legDamage}</h1>
           </div>
           </div>
           </div>
       </div>
       <div className="w-2/4 py-32 ml-10" >
           <div>
                <img src={detail?.displayIcon} alt={detail?.displayName}/>
           </div>
           <div>
           <h1 className="text-center pt-12 uppercase rifky font-Roboto text-4xl text-transparent">{detail?.displayName}</h1>
           </div>
       </div>
        </div>

    </div>
  )
}

export default WeaponsDetail