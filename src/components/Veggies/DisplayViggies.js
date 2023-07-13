import React from 'react'
import { data } from './VeggiesData'
export default function DisplayViggies() {

  return (
    <>

    {
        data.map((items)=>

            <div className='display-image-wrap' key={items.id}>
    
                <img src={items.photo_url}/>
                <div className='dipslay-image-text-veggie' >

                <h1>Name:{items.name}</h1>
                
                </div>
                   

            </div>
        )
    }
      
    </>
  )
}
