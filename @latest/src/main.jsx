import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './screen/Home.jsx'
import Trending from './screen/Trending.jsx'
import MyLibrary from './screen/MyLibrary.jsx'

import Feed from './screen/Feed.jsx'
import Login from './components/Login.jsx'
import Player from './components/Login.jsx'




const router= createBrowserRouter([
  {path:'/',
    element:<Home/>,
    children:[{
      path:'trending',
      element:<Trending/>
    },
    {path:'',
      element:<Player/>
    },
    {
      path:'feed',
      element:<Feed/>
    },
    {
      path:'myLibrary',
      element:<MyLibrary/>

    }]
  }
])
createRoot(document.getElementById('root')).render(
 
    <StrictMode>
      <RouterProvider router={router}>
        <App />
    </RouterProvider>


    </StrictMode>
    
  
)
