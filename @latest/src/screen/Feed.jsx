import React, { useEffect, useState } from 'react'
import APIKit from '../components/Spotify'

function Feed() {
  const[search,setSearch]=useState('')
  const[query,setQuery]=useState('')
  const[result,setResult]=useState()
  
  const go= ()=>{
    setQuery(search)
}
useEffect(()=>{
  APIKit.get(`/search?q=${query}&type=track`).then((response)=>setResult(response.data.tracks.items))
  console.log(result);
  
},[query])
const play= (id)=>{
  navigate('/',{ state:{id:id}})

 }
 useEffect(()=>{console.log(result) },[result])
 


  return (
    <div className='bg height3 '>

      <div className='flex h-12 w-full  justify-center'>
        <div className='flex justify-center shadow-lg shadow-purple-300 bg-purple-600 w-1/2 rounded-3xl'>
        <div className='h-10 font-serif pt-1 text-3xl'>Search any Song</div> &nbsp;

<input type="text" placeholder='type here....' className='w-56 mt-1 pl-2 text-pink-950 h-10 rounded-3xl' 
onChange={(e)=>{setSearch(e.target.value)}}/>
<button  className='bg-purple-600 esc ml-2 text-center text-purple-950 w-9 h-9 rounded-3xl'
onClick={go}>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
<path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
</svg></button>

        </div>
       

      </div>
      <br /><br />
      <div className='grid grid-cols-6 ml-5'>
      {result?result.map((e)=>{
                return(
                  
                    <div className='w-44 h-60 relative mb-10 card  rounded-lg  p-2 ' key={e.id} onClick={()=>play(e.id)}>
                      
                      <div className='absolute bottom-0 left-0  sname  overflow-scroll w-full'><p className='text-center '> {e.name}</p></div>
                      
                   
                      <img src={e.album.images[0].url} alt="No Img Avl" className='m-auto rounded-lg  bg-amber-600' />
                      
                    </div>
                    
                 
                )
          
              }):<div className='text-3xl w-full text-center mt-56 ml-56'></div>}

      </div>
    </div>
  )
}

export default Feed