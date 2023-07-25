import React, { useContext, useState } from "react";
import { sellerData } from "../Seller/DataSeller";

import { data } from "../Fruits/FruitsData";
import "./dynamic.css";
import Nav from "../Fruits/Nav";
import Slider from "../Fruits/Slider";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../Context";

import { setProducts } from "../../Redux/actions/action";
import { productReducer } from "../../Redux/reducer/Product_reducer";
import { json } from "react-router";
import { red } from "@mui/material/colors";
import { useEffect } from "react";

export default function Apple() {
  const arr = window.location.href.split("/");
  const named = arr[arr.length - 1].toLowerCase();
  const [loding, setLoding] = useState(true);

  const [final, setFinal] = useState(false);
  const [value, setValue] = useState([]);

  const [slider, setSlider] = useState(true);

  const [added, setAdded] = useState(true);

  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  console.log(isLoggedIn);

  let dup = [];
  useEffect(() => {
    async function getData() {
      fetch("http://localhost:8080/sellers")
        .then((res) => res.json())
        .then((dat) => {
          dat.filter((items) => {
            if (data.length != 0) {
              if (named.localeCompare(items.sellingType.toLowerCase()) == 0) {
                setValue((old) => [...old, items]);
                console.log(value);
              }
            }
          });
        });
    }

    setValue(dup);

    getData();
    // setLoding(true);
    setFinal(true);
  }, []);
  console.log(value);

  const loog = localStorage.getItem("isLoggedin");
  const prod = useSelector((state) => state.allProducts);
  const [arr1, setArr1] = useState([]);

  return (
    <>
      <Nav />

      <div className="whole-wrap-dynamics">
        <div className="seller-display-wrap">
          {value.length > 0 ? (
            <div
              className="seller-display-wrap"
              style={
                slider
                  ? { display: "flex" }
                  : { display: "block", marginLeft: 300 }
              }
            >
              {loding
                ? value.map((items) => (
                    <div
                      className="display-sellers-wrap"
                      key={items.id}
                      style={{ marginTop: 10 }}
                    >
                      <img src={items.img} />
                      <h1>Seller Name:{items.name}</h1>
                      <h2>Price:{items.price}/kg</h2>
                      <h4>Type:{items.type}</h4>

                      <div className="hidden-cart">
                        <button
                          id="add_to_cart"
                          onClick={() => {
                            if (loog === null) alert("Need to sign in");
                            else {
                              if (added === true) {
                                dispatch(setProducts(items));

                                setArr1(JSON.stringify([...arr1, items]));
                              } else {
                                alert("Already added");
                              }
                            }
                            // setAdded(false);
                            // setCart(items);
                          }}
                        >
                          {added ? (
                            "Add"
                          ) : (
                            <p style={{ color: "red" }}>Added!</p>
                          )}
                        </button>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          ) : (
            <p style={{ textAlign: "center", fontSize: 30 }}>
              {" "}
              No Seller's Currently 😕
            </p>
          )}
        </div>
      </div>
    </>
  );
}
