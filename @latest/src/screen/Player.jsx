import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import apiClient from '../components/Spotify';
import Song from '../components/Song';
import Queue from '../components/Queue';
import MusicPlayer from '../components/MusicPlayer';
import { useRef } from 'react';

function Player() {
  const [currIndex, setCurrIndex]= useState(0)
  const [tracks,setTracks]= useState([])
  const [currSong, setCurrSong]= useState({})
  const location= useLocation();
 useEffect(()=>{
  if(location.state)
  {
    apiClient.get(`playlists/${location.state?.id}/tracks`)
    .then((e)=>{setTracks(e.data.items); setCurrSong(e.data.items[0].track)
    })
    console.log(toString(currSong));
    
    // window.localStorage.setItem('currIndex', currIndex)
    // window.localStorage.setItem('currSong', currSong.toString()) 
    // window.localStorage.setItem('tracks', tracks.toString())
  }
  // else{
  //   setCurrIndex(window.localStorage.getItem('currIndex'))
  //   setCurrSong(window.localStorage.getItem('currSong'))
  //   setTracks(window.localStorage.getItem('tracks'))
  // }
 },[location.state])

 useEffect(()=>{
  setCurrSong(tracks[currIndex]?.track)
  console.log(currIndex,currSong);
  
 },[currIndex,tracks,currSong])
 
 
  
  return (
    <div className='w-full height flex  bg'>
         
          {location.state?<><div className='w-1/3'>

<div className='h-3/5'>
      <Song album={currSong?.album}/>
    </div>
    <div className='h-2/5'>
      <Queue tracks={tracks} setCurrIndex={setCurrIndex}/>
    </div>
    
  
 </div>
 <div className='w-2/3 h-full relative '>
   <div className='absolute l70 '>
    <MusicPlayer 
     currentTrack={currSong}
     total={tracks}
     currentIndex={currIndex}
     setCurrentIndex={setCurrIndex}
    
    />
   </div>
   
 </div></>:<><div className='m-auto text-5xl text-balance pl-5 pr-5 rounded-2xl font-serif bg-purple-600 shadow-2xl shadow-white'>PLEASE CHOOSE A PLAYLIST FROM LIBRARY</div></>}
         

    </div>
  )
}

export default Player