import React, { useContext, useEffect } from "react";
import { fruitsData } from "./Data";

import "./fruits.css";
import { SearchContext, UserContext } from "../Context";
import { useNavigate } from "react-router";
export default function Slider() {
  //  const [search, setSearch] = useContext(SearchContext);
  const { name, setName, search, setSearch } = useContext(UserContext);

  const navigate = useNavigate();
  return (
    <>
      <div className="Slider-text">
        <h1>Top Selling Fruits!</h1>
      </div>
      <div className="slider-wrap">
        {fruitsData
          .filter((items) => {
            if (search === "") return items;
          })
          .map((items) => (
            <>
              <div
                onClick={() => {
                  navigate("/fruits/" + items.name.toLowerCase());
                }}
                className="slider-content"
                key={items.id}
              >
                <img src={items.img} />
                <p>{items.name}</p>
              </div>
            </>
          ))}
      </div>
    </>
  );
}
