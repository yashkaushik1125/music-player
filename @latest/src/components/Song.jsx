import React, { useEffect, useState } from 'react'

function Song({album}) {
    const artists = [];
    const [str,setStr]=useState('')
    useEffect(()=>{
        album?.artists?.forEach((element) => {
            artists.push(element.name);
          });
          let temp=artists?.join(", ")
          setStr(temp)
          console.log('use eff targted',str);
          
          
    },[album])
    
    
    if(typeof(album)=='undefined'){
        return (
            <><div>select a song</div></>
            
          )

    }
    else return(<div className='w-full h-full relative'>
        <div className='w-2/3 albumcard  absolute left-0  rounded-2xl h-5/6 '>
        <div className='flex justify-center  h-4/6 w-full rounded-lg'>
        <img src={album?.images[0]?.url} alt=""className=' shadow-lg shadow-pink-800 pt-1 rounded-lg w-4/5 ' /></div>
        <div className='overflow-hidden m-auto  w-5/6'><div className=" marquee w-4/6   "><p>{album?.name + " - " +str}</p></div>
          
        </div> 
        <div className='p-1'>
          <div className='text-xs'>No. of Tracks: &nbsp;{album.total_tracks}</div>
          <div className='text-xs '>Release Date: &nbsp;{album.release_date}</div>
        </div>
        
      

        
       
        </div>
    
    </div>)
    
 
}

export default Song