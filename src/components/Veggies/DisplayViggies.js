import React, { useContext, useEffect } from "react";
// import { data } from "./VeggiesData";

import "./veggies.css";
import { UserContext } from "../Context";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  displayFruitsAction,
  displayVeggiesAction,
} from "../../Redux/actions/action";
export default function DisplayViggies() {
  const { name, setName, search, setSearch } = useContext(UserContext);

  const dispatch = useDispatch();
  const navigation = useNavigate();
  useEffect(() => {
    async function getData() {
      fetch("http://localhost:8080/")
        .then((res) => res.json())
        .then((dat) => {
          let named = "vegetables";
          dat.filter((items) => {
            if (named.localeCompare(items.category) == false) {
              dispatch(displayVeggiesAction(items));
            }
          });
        });
    }

    getData();
  }, []);

  const prod = useSelector((state) => state.displayVeggies.veggies);

  console.log(prod);

  return (
    <>
      <h1 id="veggies-title">Best Selling Veggies in Coimbatore!</h1>

      <div className="veggie-map-wrap">
        {prod
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
              <img src={items.img} />
              <p>{items.name}</p>
            </div>
          ))}
      </div>
    </>
  );
}
