import React, { useContext } from "react";

import "./veggies.css";
import { dataTop } from "./TopSellingData";
import { UserContext } from "../Context";
import { useNavigate } from "react-router";

export default function VeggiesSlider() {
  const { name, setName, search, setSearch } = useContext(UserContext);
  const navigation = useNavigate();

  return (
    <>
      <h1 id="veggie-top">Top Selling Veggies!</h1>
      <div className="veggies-slider-wrap">
        {dataTop
          .filter((items) => {
            if (search === "") return dataTop;
          })
          .map((items) => (
            <div
              className="vegie-slider"
              onClick={() => navigation("/veggies/" + items.name)}
            >
              <img src={items.photo_url} />
              <p>{items.name}</p>
            </div>
          ))}
      </div>
    </>
  );
}
