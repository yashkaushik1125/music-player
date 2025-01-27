import React, {useState, useEffect}from 'react'
import { Outlet } from 'react-router-dom'
import BottomBar from '../components/BottomBar'
import Login from '../components/Login'
import { setClientToken } from '../components/Spotify';

function Home() {
  const [token, setToken]= useState('');

  useEffect(()=>{
    const localtoken=window.localStorage.getItem('token')
    const hash=window.location.hash 
    window.location.hash=''
    if(!localtoken && hash){
    const wintoken=hash.split('&')[0].split('=')[1]
    window.localStorage.setItem('token',wintoken)
    setToken(wintoken)
     setClientToken(wintoken)}
    else{
      setToken(localtoken)
      setClientToken(localtoken)

    } 
    
  },[])
 
  
  return (
    <>
    {!token?
    <Login/>:
    <><Outlet/>
     <BottomBar/>
    </>
     }
    </>
    
    
   
  )
}

export default Home