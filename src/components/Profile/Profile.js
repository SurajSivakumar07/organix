import React from 'react'
import DropDownProfile from './DropDownProfile'

export default function Profile(props) {
  return  (props.value)? (
    <>

        <div className='profile-wrap'>
             <DropDownProfile />
        </div>

    </>
  ):""
}
