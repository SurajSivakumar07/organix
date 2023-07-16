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

export default function Apple() {
  const arr = window.location.href.split("/");
  const named = arr[arr.length - 1].toLowerCase();
  const [loding, setLoding] = useState(true);

  const fruitsDetail = [];
  const [final, setFinal] = useState(false);
  const [value, setValue] = useState([]);

  const [slider, setSlider] = useState(true);

  const dispatch = useDispatch();
  let a;

  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  console.log(isLoggedIn);
  const { name, setName, search, setSearch, cart, setCart, img, setImg } =
    useContext(UserContext);

  useState(() => {
    async function image() {
      for (let i = 0; i < data.length; i++) {
        const compaare = named.localeCompare(data[i].name.toLowerCase());

        if (compaare === 0) {
          a = data[i].img;

          setImg(a);
          break;
        }
      }
    }
    image();

    async function setInterval() {
      for (let i = 0; i < sellerData.length; i++) {
        let len = sellerData[i].fruits.length;
        for (let j = 0; j < len; j++) {
          const compaare = named.localeCompare(
            sellerData[i].fruits[j].name.toLowerCase()
          );
          if (compaare === 0) {
            fruitsDetail.push({
              fruit: sellerData[i].fruits[j].name,
              name: sellerData[i].name,
              price: sellerData[i].fruits[j].price,
              type: sellerData[i].fruits[j].type,
            });
          }
        }
      }
      setValue(fruitsDetail);
    }
    setInterval();
    // setLoding(true);
    setFinal(true);
  }, []);

  return (
    <>
      <Nav />

      <div className="dynamic">
        <div className="view-btn-wrap">
          <div className="grid-view">
            <i
              class="fa-solid fa-box"
              onClick={() => {
                setSlider(true);
              }}
            ></i>
          </div>
          <div className="linear-view">
            <i
              class="fa-solid fa-boxes-stacked"
              onClick={() => {
                setSlider(false);
              }}
            ></i>
          </div>
        </div>

        <div className="display-seller-no">
          <p>Seller Details!</p>

          <div className="no-seller">
            {value.length >= 1 ? (
              <p>Number of Sellers:{value.length}</p>
            ) : (
              <h1>Currently no seller's😕 </h1>
            )}
          </div>
        </div>

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
                    <img src={img} />
                    <h1>Seller Name:{items.name}</h1>
                    <h2>Price:{items.price}/kg</h2>
                    <h4>Type:{items.type}</h4>
                    <div className="hidden-cart">
                      <button
                        onClick={() => {
                          if (isLoggedIn === false) alert("Need to sign in");
                          else dispatch(setProducts(items));
                          // setCart(items);
                        }}
                      >
                        Add
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
