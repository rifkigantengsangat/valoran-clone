import React,{useState}from 'react'
import CardSkill from './CardSkill'
import './Agent.css'
const DetailSkill = ({data}) => {
  const [page,setPage] = useState("pagepertama")
  return (
    <div className="h-100 w-full bg-redCustom mt-20  pt-24 ">
  <div className="w-full h-96  ">
    <div className="w-full flex h-32 text-pinkCustom justify-around  text-3xl ">
<div className="w-32 rifki text-transparent uppercase bg-pinkCustom h-14 text-center pt-2 rounded-lg">
  <button onClick={()=>setPage("pagepertama")} className="text-center font-Roboto">Ability 1</button>
</div>
<div className="w-32 rifki text-transparent uppercase bg-pinkCustom h-14 text-center pt-2 rounded-lg">
<button onClick={()=>setPage("pagekedua")}  className="text-center font-Roboto"> Ability 2</button>
</div>
<div className="w-32 rifki text-transparent uppercase bg-pinkCustom h-14 text-center pt-2 rounded-lg">
<button onClick={()=>setPage("pageketiga")}  className="text-center font-Roboto"> Grenade</button>
</div>
<div className="w-32 rifki text-transparent uppercase bg-pinkCustom h-14 text-center pt-2 rounded-lg">
<button onClick={()=>setPage("pagekeempat")} className="text-center font-Roboto"> Ultimate</button>
</div>
    </div>
    <div className="text-center w-full">
    {page==="pagepertama" && <CardSkill data={data.abilities}dataIndex={0}/>}
    {page==="pagekedua" && <CardSkill data={data.abilities} dataIndex={1}/>}
    {page==="pageketiga" && <CardSkill data={data.abilities}dataIndex={2}/>}
    {page==="pagekeempat" && <CardSkill data={data.abilities} dataIndex={3}/>}
    </div>
</div>
    </div>
  )
}

export default DetailSkill