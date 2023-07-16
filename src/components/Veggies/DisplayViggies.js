import React, { useContext } from "react";
import { data } from "./VeggiesData";

import "./veggies.css";
import { UserContext } from "../Context";
import { useNavigate } from "react-router";
export default function DisplayViggies() {
  const { name, setName, search, setSearch } = useContext(UserContext);

  const navigation = useNavigate();

  return (
    <>
      <h1 id="veggies-title">Best Selling Veggies in Coimbatore!</h1>
      <div className="veggie-map-wrap">
        {data
          .filter((items) => {
            if (search === "") return items;
            else if (
              items.name.toLocaleLowerCase().includes(search.toLowerCase())
            ) {
              return items;
            }
          })
          .map((items) => (
            <div
              className="veggies-map"
              key={items.id}
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
