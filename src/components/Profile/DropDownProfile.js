import React from 'react'

import "./profile.css"
export default function DropDownProfile() {
  return (
    <>

         <div className='profile-drop-down'>
            <ul>
                <li>
                    MyAccount
                </li>
                <li>
                    Cart
                </li>
                <li>
                    Setting
                </li>
                <li onClick={()=>window.location.reload()}> 
                    Logout
                </li>
                
            </ul>
         </div>
      
    </>
  )
}
