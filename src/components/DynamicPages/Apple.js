import React, { useContext, useState } from "react";

import { data } from "../Fruits/FruitsData";
import "./dynamic.css";
import Nav from "../Fruits/Nav";
import Slider from "../Fruits/Slider";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import IconButton from "@mui/material/IconButton";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useEffect } from "react";
import { addTocart } from "./addtoCartBackend";

export default function Apple() {
  const arr = window.location.href.split("/");
  const named = arr[arr.length - 1].toLowerCase();
  const [loding, setLoding] = useState(true);

  const [final, setFinal] = useState(false);
  const [value, setValue] = useState([]);

  const [slider, setSlider] = useState(true);

  const [added, setAdded] = useState(true);

  const [qty, setQty] = useState(1);

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
              if (
                items.sellingType &&
                named.localeCompare(items.sellingType.toLowerCase()) == 0
              ) {
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

  const [arr1, setArr1] = useState([]);

  return (
    <>
      <Nav />
      <ToastContainer />
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

                      {/* </FormControl> */}
                      <div className="hidden-cart">
                        <button
                          id="add_to_cart"
                          onClick={() => {
                            if (loog === null) alert("Need to sign in");
                            else {
                              if (added === true) {
                                setArr1(JSON.stringify([...arr1, items]));

                                addTocart(items.id, items.price * qty);

                                toast.success("Success Notification !", {
                                  position: toast.POSITION.TOP_RIGHT,
                                });
                              } else {
                                alert("Already added");
                              }
                            }

                            // setAdded(false);
                            // setCart(items);
                          }}
                        >
                          {added ? (
                            <IconButton
                              color="primary"
                              aria-label="add to shopping cart"
                              style={{ height: 20 }}
                            >
                              <AddShoppingCartIcon />
                            </IconButton>
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
