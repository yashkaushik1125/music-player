import React from 'react'

function Queue({tracks, setCurrIndex}) {
  return (
    <div className='relative  w-full h-full'>
        <div className='w-2/3 absolute  rounded-lg queuecard -top-12 h-5/6'>
             <div className=' font-mono pt-1  rounded-md w-5/6 '> <p className='w-full qhead  ml-5 rounded-md text-pretty text-center  '>Up Next</p></div>
             
             <div className="queue-list  pl-3 pr-1">
          {tracks?.map((track, index) => (
            <div
              key={index + "key"}
              className="queue-item flex"
              onClick={() =>{ 
               setCurrIndex(index)}}
            >
              <p className="track-name">{track?.track?.name}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>

            
        </div>
    </div>
  )
}

export default Queue