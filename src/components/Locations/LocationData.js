import React from "react";
import { locationDa } from "./Locations";
import "./locations.css";
export default function LocationData() {
  return (
    <>
      <div className="main-location-wrap">
        <h1>Popular localities in and around Coimbatore</h1>
        <div className="location-wrap">
          {locationDa.map((items) => (
            <>
              <div className="inner-location">
                <h3>{items.places}</h3>
                <p>{items.count}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
