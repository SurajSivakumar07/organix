import React, { useEffect, useState } from "react";
import Nav from "../Fruits/Nav";
import Slider from "../Fruits/Slider";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { UserContext } from "../Context";

import "./cart.css";
import { Height, Satellite } from "@mui/icons-material";
import { prettyDOM } from "@testing-library/react";

export default function Cart() {
  const [data, setData] = useState([]);

  const { name, setName, search, setSearch, cart, setCart, img, setImg } =
    useContext(UserContext);

  const prod = useSelector((state) => state.allProducts);
  let arr = [];

  console.log(cart);
  for (let key in prod) {
    arr.push([key, prod[key]]);
  }
  console.log(arr[0][1]);
  return (
    <>
      <Nav />
      <div className="cart-main-wrap">
        {arr[0][1].length == 0 ? (
          <div idd="cart-text">
            <h1>No items in cart</h1>
          </div>
        ) : (
          <div className="cart-wrap">
            {arr[0][1].map((items) => (
              <div className="display-sellers-wrap" key={items.id} id="test">
                <h1>Fruis:{items.fruit}</h1>
                <h1>Seller Name:{items.name}</h1>
                <h2>Price:{items.price}/kg</h2>
                <h4>Type:{items.type}</h4>

                <div className="hidden-cart">
                  <button>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
