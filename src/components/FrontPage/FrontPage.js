import React from 'react'
import bg from "../Assests/bg/pexels-cats-coming-750952.jpg";
import bg1 from "../Assests/bg/pexels-engin-akyurt-1435735.jpg";

import "./frontPage.css";


import { Link } from 'react-router-dom';
export default function FrontPage() {
  return (
    <>
      
      <div className='fronPageWrap'>
        <div className='fruitsFrontPage'>

                <Link to="/fruits">
                         <img src={bg1} />
                </Link>

        </div>

        <div className='veggieFrontPage'>
                
                 <Link to="/veggies">
                         <img src={bg} />
                </Link>
        </div>
      </div>
    </>
  )
}
