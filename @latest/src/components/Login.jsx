import React from 'react'
import { loginEndpoint } from './Spotify'
import  '../screen/myplaylist.css'

function Login() {
  return (
    <div className='bg height'>
       <div className='flex  justify-center'> 
         <div className="w-4/5 h-svh  relative ">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className="absolute top-24 left-1/2 -translate-x-1/2 w-44 h-14" 
      />
      <br /> <br />
      <a href={loginEndpoint} className=''>
        <div className="w-24 h-24 rounded-full flex text-center absolute text-lg -translate-x-1/2 left-1/2 t260 shadow-lg shadow-green-300 hover:bg-green-600 bg-green-800"><p className='pt-8 w-full h-full'>LOG IN</p></div>
      </a>
    </div>

    </div>

    </div>
    
   
  )
}

export default Login