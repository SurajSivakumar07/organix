import React, { useContext } from "react";

import { data } from "./FruitsData";

import "./fruits.css";
import { SearchContext } from "../Context";
import { useNavigate } from "react-router";
export default function DisplayFruits() {
  const [search, setSearch] = useContext(SearchContext);

  console.log(search);

  const navigation = useNavigate();

  return (
    <>
      <h1 id="displayTitle">Best Selling Fruits in Coimbatore!</h1>

      <div className="displayFruits">
        {data
          .filter((items) => {
            if (search === "") return items;
            else if (items.name.toLowerCase().includes(search.toLowerCase())) {
              return items;
            }
          })
          .map((items) => (
            <>
              <div
                className="displayImageWrap"
                key={items.id}
                onClick={() => {
                  navigation("/fruits/" + items.name.toLowerCase());
                }}
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
