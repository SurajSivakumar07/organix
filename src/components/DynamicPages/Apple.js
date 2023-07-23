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

  const fruitsDetail = [];
  const [final, setFinal] = useState(false);
  const [value, setValue] = useState([]);

  const [slider, setSlider] = useState(true);

  const [added, setAdded] = useState(true);

  const dispatch = useDispatch();
  let a;

  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  console.log(isLoggedIn);

  const { name, setName, search, setSearch, cart, setCart, img, setImg } =
    useContext(UserContext);
  // useEffect(() => {
  //   async function getData() {
  //     fetch("http://localhost:8080/")
  //       .then((res) => res.json())
  //       .then((dat) => {
  //         dat.filter((items) => {
  //           if (named.localeCompare(items.name.toLowerCase()) == false) {
  //             fruitsDetail.push(items);
  //           }
  //         });
  //       });
  //     setValue(fruitsDetail);
  //   }

  //   getData();
  // }, []);

  let dup = [];
  useEffect(() => {
    // async function image() {
    //   for (let i = 0; i < data.length; i++) {
    //     const compaare = named.localeCompare(data[i].name.toLowerCase());

    //     if (compaare === 0) {
    //       a = data[i].img;

    //       setImg(a);
    //       break;
    //     }
    //   }
    // }
    // image();

    async function getData() {
      fetch("http://localhost:8080/sellers")
        .then((res) => res.json())
        .then((dat) => {
          dat.filter((items) => {
            if (named.localeCompare(items.sellingType.toLowerCase()) == 0) {
              setValue((old) => [...old, items]);
              console.log(value);
            }
          });
        });
    }
    // async function setInterval() {
    //   for (let i = 0; i < sellerData.length; i++) {
    //     let len = sellerData[i].fruits.length;
    //     for (let j = 0; j < len; j++) {
    //       const compaare = named.localeCompare(
    //         sellerData[i].fruits[j].name.toLowerCase()
    //         );
    //         if (compaare === 0) {
    //           fruitsDetail.push({
    //             fruit: sellerData[i].fruits[j].name,
    //             id: sellerData[i].fruits[j].id,
    //             name: sellerData[i].name,
    //             price: sellerData[i].fruits[j].price,
    //             type: sellerData[i].fruits[j].type,
    //           });
    //         }
    //       }
    //     }

    //   }
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
      <div className="seller-display-wrap">
        {final ? (
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
                        {added ? "Add" : <p style={{ color: "red" }}>Added!</p>}
                      </button>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        ) : (
          <p> "Loading.."</p>
        )}
      </div>
    </>
  );
}
