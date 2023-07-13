import React, { useState } from 'react'
import "./fruits.css"
import Profile from '../Profile/Profile'
export default function HambugerFruits() {

  const[pop,setPop]=useState(false)
  return (
    <>
      <div className='hambuger-wrap'>

        <div className='hello-content'>
            <p>Hello {localStorage.getItem("name")} !</p>
        </div>

        <div className='profile'>
          <i class="fa-regular fa-user" onClick={()=>setPop(true)}></i>
           
            <Profile  value={pop}/>
        </div>

      </div>
    </>
  )
}
