import React from 'react'
import { Link } from 'react-router-dom'
import  '../screen/myplaylist.css'
function BottomBar() {
  return (
   

 <div className="fixed  z-50 w-full  h-16 flex justify-evenly -translate-x-1/2 bg-white border border-gray-200 rounded-full rounded-b-none  bottom-0 left-1/2 shadow-sm shadow-slate-500 dark:bg-pink-600 dark:border-gray-600">
    <div className=" h-full w-full flex justify-evenly ">
        
        <div className="flex items-center bg-pink-600 justify-center">
           <Link to='trending'>
           <button data-tooltip-target="tooltip-new" type="button" className="inline-flex bg-pink-600 items-center justify-center w-10 h-10 font-medium bg-green-700 rounded-full hover:bg-pink-900 group focus:ring-4 focus:ring-pink-300 focus:outline-none ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                 <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
            </svg>



                <span className="sr-only">Trending</span>
            </button>
           </Link>
        </div>
        <div className="flex items-center bg-pink-600 justify-center">
           <Link to="">
            <button data-tooltip-target="tooltip-new" type="button" className="inline-flex bg-pink-600 items-center justify-center w-10 h-10 font-medium bg-green-700 rounded-full hover:bg-pink-900 group focus:ring-4 focus:ring-pink-300 focus:outline-none ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>


                <span className="sr-only">New item</span>
            </button>
           </Link>
        </div>
        <div className="flex items-center bg-pink-600 justify-center">
           <Link to={'myLibrary'}>
           <button data-tooltip-target="tooltip-new" type="button" className="inline-flex bg-pink-600 items-center justify-center w-10 h-10 font-medium bg-green-700 rounded-full hover:bg-pink-900 group focus:ring-4 focus:ring-pink-300 focus:outline-none ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
           </svg>



                <span className="sr-only">User</span>
            </button>
           </Link>
        </div>
        <div className="flex items-center bg-pink-600 justify-center">
            <Link to={'feed'}>
            <button data-tooltip-target="tooltip-new" type="button" className="inline-flex bg-pink-600 items-center justify-center w-10 h-10 font-medium bg-green-700 rounded-full hover:bg-pink-900 group focus:ring-4 focus:ring-pink-300 focus:outline-none ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
               <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
           </svg>



                <span className="sr-only">Search</span>
            </button>
            </Link>
        </div>
       
        
    </div>
    </div>

  )
}

export default BottomBar