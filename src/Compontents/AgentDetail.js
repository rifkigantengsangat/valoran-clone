import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom' 
import axios from 'axios'
import Detail from './Detail'
import Loading from './Loading'
const AgentDetail = () => {
    const bag2 = "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbded518020183769/5eb26f5389bac8148a8006cc/agent-background-generic.JPG"
    const [data,setData] =useState([])
    const [loading,setLoading] =useState(false)

    const {uuid} = useParams()
     const fetchData=async () =>{
         setLoading(true)
         const {data} = await axios.get(`https://valorant-api.com/v1/agents/${uuid}`)
         setLoading(false)
       setData(data.data);
     }
    
     useEffect(()=>{
   fetchData()
     },[])
  return (
    <div style={{ backgroundImage: `url(${bag2})` ,backgroundSize:"cover"}} className="h-screen"  >
     {loading ? <Loading/> : <Detail key={data.uuid}data={data}/>}
            
    </div>
  )
}

export default AgentDetail