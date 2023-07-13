import React, { useState } from 'react'
import { useContext } from 'react';
import { UserContext } from '../Context';
// import "./login.css"
export default function Signup(props) {
    const [name,yup]=useContext(UserContext);
    const[user,setUser]=useState();
    const signupHandler=(e)=>{
        
        e.preventDefault();
        yup(true)
        console.log("True");

        localStorage.setItem("name",user);
    }

  return  (props.trigger) ? (
    <>

         <div className='login'>

              <div className='login-wrap'>

                  <h1>
                    Signup
                  </h1>

                  <h1 onClick={()=>props.Trigger(false)}>
                  <i class="fa-regular fa-circle-xmark"></i>
                  </h1>
              </div>

               <form className='fromInput' onSubmit={signupHandler} >
                 <input type='text' placeholder='Enter your Name' onChange={(e)=>{setUser(e.target.value)}} />

                  <input type='email' placeholder='Enter your email' />
                  <br></br>
                  <input type='password' placeholder='Enter your password' />
                  <br></br>

                  <input type='submit'  id='login-btn'/>
              </form>

            
         </div>
    </>
  ) : ""
}
