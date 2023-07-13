import React from "react";
import "./fruits.css";
export default function Options() {
  return (
    <>
      <div className="options-wrap">
        <div className="path">
          <p>Home/India/Coimbatore</p>
        </div>

        <div className="optionContent">
          <div className="option-logo">
            {/* <i class="fa-brands fa-apple"></i> */}

            <img src="https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables-1024x683.jpg" />
            {/* <i class="fa-solid fa-motorcycle"></i> */}
          </div>
          <div className="option-delivery">
            <p id="fruits">Fruits</p>
            <p>Veggies</p>
          </div>
        </div>
      </div>
    </>
  );
}
