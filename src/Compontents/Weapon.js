import React,{useState} from 'react'
import "./Agent.css"
import {Link} from 'react-router-dom'
const Weapon = ({weapon}) => {
  const [filter,setFilter] = useState('')
 const handleSubmit=(e)=>{
   e.preventDefault();
 }
  return (
    <div className="h-screen bg-white w-full">
      <div className="w-3/4 mx-auto">
      <form onSubmit={handleSubmit} className="w-full pt-10 mb-10 border-4-black">
        <input type="text"
        onChange={(e)=>setFilter(e.target.value)}
        placeholder = "Search Weapon....."
         className=" text-black mt-10 w-full py-3 text-center font-Roboto text-lg rounded-xl border-solid border-2 border-black"/>
  </form>
      </div>
    
  {weapon?.filter((val)=>{
    if(filter === ""){
   return val
    }else if(val?.displayName.toLowerCase().includes(filter.toLowerCase())){
      return val
    }
  }).map((val)=>{
    return(
      <>
    <div key={val?.uuid} className="w-11/12 h-96 shadow-2xl mx-auto">
    <div className="flex justify-around items-center h-full mt-10 ">
      <div>
        <h1 className="text-transparent rifky text-6xl uppercase">{val?.displayName}</h1>
        <Link to={`/Weapons/${val?.uuid}`} className="bg-pinkCustom hover:bg-pinkCs text-white w-32 font-bold text-center py-2 px-4 rounded mt-10 block ">
  See Detail
</Link>
      </div>
      <div className="w-2/4">
        <img clasName= "w-full" src={val?.displayIcon}/>
      </div>

    </div>
    </div>
      </>
    )
  })
  }
    </div>
  )
}

export default Weapon