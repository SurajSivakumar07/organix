import React, { useContext, useEffect, useState } from "react";

import { data } from "./FruitsData";

import "./fruits.css";
import { UserContext } from "../Context";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { displayFruits } from "../../Redux/reducer/Product_reducer";
import { displayFruitsAction } from "../../Redux/actions/action";

export default function DisplayFruits() {
  const { name, setName, search } = useContext(UserContext);

  const navigation = useNavigate();

  const [val, setVal] = useState([]);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    async function getData() {
      fetch("http://localhost:8080/")
        .then((res) => res.json())
        .then((dat) => {
          let named = "fruit";
          dat.filter((items) => {
            if (named.localeCompare(items.category) == false) {
              dispatch(displayFruitsAction(items));
            }
          });
        });
    }

    getData();
  }, []);

  const prod = useSelector((state) => state.displayFruits.prod);
  console.log(prod);

  console.log(data);

  return (
    <>
      <div className="display-main">
        <h1 id="displayTitle">Best Selling Fruits in Coimbatore!</h1>

        <div className="displayFruits">
          {prod
            .filter((items) => {
              if (search === "") return items;
              else if (
                items.name.toLowerCase().includes(search.toLowerCase())
              ) {
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
      </div>
    </>
  );
}
