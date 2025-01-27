import React, {useEffect, useState}from 'react'
import APIKit from '../components/Spotify'
import { useNavigate } from 'react-router-dom'


function Trending() {
  const [songInfo, setSongInfo]= useState([])
  useEffect(()=>{
    APIKit.get("browse/new-releases").then((response)=>setSongInfo(response.data.albums.items))
    
  },[])
  const navigate= useNavigate()

  const play= (id)=>{
   navigate('/',{ state:{id:id}})
 
  }

 useEffect(()=>{console.log(songInfo);
 },[songInfo])
 
  
  
  return (
    <div className='w-full height3 bg'>
          <h1 className='text-center text-3xl font-serif text-gray-300  text-pretty p-4 '><b className='bg-purple-600 shadow-lg shadow-purple-300 p-2 text-white rounded-3xl'>Trending Playlists</b></h1>
              
              <div className='grid w-full screen h-lvh p-14 m-auto   grid-cols-5'>
               {songInfo?songInfo.map((e)=>{
                return(
                  
                    <div className='w-44 h-60 relative mb-10 card  rounded-lg  p-2 ' key={e.id} onClick={()=>play(e.id)}>
                      
                      <div className='absolute top-1 w-full'><p className='text-center'> {e.name}</p></div>
                      <div className='text-left absolute bottom-1 text-gray-300'>Total Songs: &nbsp;{e.total_tracks}</div>
                   
                      <img src={e.images[0].url} alt="" className='mt-6 bg-amber-600' />
                      
                    </div>
                    
                 
                )
          
              }):<div className='text-3xl w-full text-center mt-14'>token timeout</div>}
              
          
              </div>
    </div>
  )
}

export default Trending