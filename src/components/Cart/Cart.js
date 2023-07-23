import React, { useEffect, useState } from "react";
import Nav from "../Fruits/Nav";
import Slider from "../Fruits/Slider";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { UserContext } from "../Context";

import "./cart.css";
import { Subject } from "@mui/icons-material";

export default function Cart() {
  const [data, setData] = useState([]);

  const { name, setName, search, setSearch, cart, setCart, img, setImg } =
    useContext(UserContext);

  const prod = useSelector((state) => state.allProducts);
  let arr = [];

  const [arrCart, setCartArr] = useState([]);

  for (let key in prod) {
    arr.push([key, prod[key]]);
  }
  //pushing into cart

  const logg = localStorage.getItem("items");
  console.log(logg);

  console.log(arr[0][1]);
  console.log(logg);
  useEffect(() => {
    // arrCart.push(JSON.parse(localStorage.getItem("items")));
    // console.log(arrCart[0]);

    setCartArr(JSON.parse(localStorage.getItem("items")));

    totalPrice();
  }, []);
  console.log(arrCart);
  const [quantity, setQuantity] = useState(1);
  //totalPrice

  const [price, setPrice] = useState();
  const totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < arrCart.length; i++) {
      sum += arrCart[0].price;

      console.log(sum);
    }

    setPrice(sum);
  };
  return (
    <>
      <Nav />
      {/* {arrCart && arrCart.map((items) => <p>{items.name}</p>)} */}

      <div className="main-cart">
        <div className="cart-main-wrap">
          {arrCart.length === 0 ? (
            <div
              idd="cart-text"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 15,
                flexDirection: "column",
              }}
            >
              <div
                className="no-items"
                style={{
                  display: "flex",
                  justifyContent: "center",

                  flexDirection: "column",
                }}
              >
                <h1>No items in cart😕</h1>
              </div>
            </div>
          ) : (
            <div className="cart-wrap">
              <p>TotalPrice :{price}</p>
              {arrCart.map((items) => (
                <div className="display-sellers-wrap" key={items.id} id="test">
                  <img src={items.img} />
                  <h1>Fruis:{items.fruit}</h1>
                  <h1>Seller Name:{items.name}</h1>
                  <h2>Price:{items.price}/kg</h2>
                  <h4>Type:{items.type}</h4>
                  <div className="qunatity">
                    <p>
                      <i
                        class="fa-solid fa-minus"
                        onClick={() => {
                          setQuantity(quantity - 1);
                        }}
                      ></i>
                    </p>
                    <h1>{quantity}</h1>
                    <p>
                      <i
                        class="fa-solid fa-plus"
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                      ></i>
                    </p>
                  </div>

                  <div className="hidden-cart">
                    <button
                      onClick={() => {
                        let id = items.id;
                        for (let i = 0; i < arrCart.length; i++) {
                          if (id === arrCart[i].id) {
                            arrCart.splice(i, 1);

                            localStorage.setItem(
                              "items",
                              JSON.stringify(arrCart)
                            );

                            document.location.reload();
                            // console.log(id);
                          }
                        }
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
