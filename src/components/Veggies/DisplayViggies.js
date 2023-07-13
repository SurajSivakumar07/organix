import React from "react";
import { data } from "./VeggiesData";
export default function DisplayViggies() {
  return (
    <>
      <div className="displayFruits">
        {data.map((items) => (
          <>
            <div
              className="displayImageWrap"
              key={items.id}
              // onClick={() => {
              //   navigation("/fruits/" + items.name.toLowerCase());
              // }}
            >
              <img src={items.img} />
              <div className="dipslay-image-text">
                <h1>{items.name}</h1>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
