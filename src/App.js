import React,{useState,useEffect} from 'react'
import Navbar from './Compontents/Navbar'
import axios from 'axios'
import Agents from './Compontents/Agents';
import Weapons from './Compontents/Weapons'
import Maps from './Compontents/Maps';
import Home from './Compontents/Home'
import AgentDetail from './Compontents/AgentDetail'
import WeaponsDetail from './Compontents/WeaponsDetail'
import { Route, Routes } from 'react-router-dom';

const App = () => {
 
  return (
    <div>
      <Navbar/> 
      <Routes>
<Route path="/" element={<Home/> } />
<Route path="/Agents" element = {<Agents />} />
<Route path="/Maps" element = {<Maps />}/>
<Route path="/Weapons" element = {<Weapons />}/>
<Route path="/Weapons/:uuid" element = {<WeaponsDetail/>}/>
<Route path="/Agents/:uuid" element = {<AgentDetail/>}/>
    </Routes>
    </div>
  )
}

export default App;
