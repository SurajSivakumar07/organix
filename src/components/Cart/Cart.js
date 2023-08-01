import React, { useEffect, useMemo, useState } from "react";
import Nav from "../Fruits/Nav";
import Slider from "../Fruits/Slider";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { UserContext } from "../Context";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../../Redux/actions/action";
import Button from "@mui/material/Button";
import "./cart.css";
import "react-toastify/dist/ReactToastify.css";

import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import IconButton from "@mui/material/IconButton";
import { useNavigate, useNavigation } from "react-router";

export default function Cart() {
  const [data, setData] = useState([]);

  const { name, setName, search, setSearch, cart, setCart, img, setImg } =
    useContext(UserContext);

  const prod = useSelector((state) => state.allProducts.product);
  let arr = [];

  const [arrCart, setCartArr] = useState([]);

  for (let key in prod) {
    arr.push([key, prod[key]]);
  }

  const [total, setTotal] = useState(0);

  //pushing into cart

  const getDataFromSEller = (id) => {
    axios.get("http://localhost:8080/sellers").then((res) => {
      res.data.filter((items) => {
        if (items.id == id) {
          setTotal((total) => total + items.price);
          dispatch(setProducts(items));

          console.log(total);
        }
      });
    });
  };

  const dispatch = useDispatch();
  async function getDataFromCart() {
    axios.get("http://localhost:8080/cart").then((res) => {
      res.data.filter((items) => {
        console.log(items);

        if (items.userId == localStorage.getItem("userId")) {
          console.log("yes fucker");
          getDataFromSEller(items.productId);
        }
      });
    }, []);
  }

  //Removing dup id

  const removingFromCart = (id) => {
    axios.delete(`http://localhost:8080/cart/${id}`).then((res) => {
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      window.location.reload();
    });
  };

  //Removing from the cart

  const [dupId, setDupId] = useState();
  const removeFromCart = (id) => {
    axios.get("http://localhost:8080/cart").then((res) => {
      res.data.filter((items) => {
        if (items.productId === id) {
          removingFromCart(items.cartId);
        }
      });
    });

    console.log(dupId);
  };
  useMemo(getDataFromCart, []);
  useEffect(() => {
    setCartArr(JSON.parse(localStorage.getItem("items")));
  }, []);

  const navigation = useNavigate();

  const [price, setPrice] = useState();

  return (
    <>
      <Nav />
      {/* {arrCart && arrCart.map((items) => <p>{items.name}</p>)} */}
      <ToastContainer />

      <div className="main-cart">
        <div className="cart-main-wrap">
          {prod.length === 0 ? (
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
            <>
              {/* <img src="https://giphy.com/embed/j9yMqho22Nn6KLfDRc/video" /> */}
              <div className="cart-wrap">
                {prod.map((items) => (
                  <div
                    className="display-sellers-wrap"
                    key={items.id}
                    id="test"
                  >
                    <img src={items.img} />
                    <h1>Fruis:{items.sellingType}</h1>
                    <h1>Seller Name:{items.name}</h1>
                    <h2>Price:{items.price}/kg</h2>

                    <div className="hidden-cart">
                      <button
                        onClick={() => {
                          removeFromCart(items.id);

                          // let id = items.id;
                          // for (let i = 0; i < arrCart.length; i++) {
                          //   if (id === arrCart[i].id) {
                          //     arrCart.splice(i, 1);

                          //     localStorage.setItem(
                          //       "items",
                          //       JSON.stringify(arrCart)
                          //     );

                          //     document.location.reload();
                          //     // console.log(id);
                          //   }
                          // }
                        }}
                      >
                        Remove
                        {/* <IconButton
                          aria-label="delete"
                          style={{ borderRadius: 40 }}
                        >
                          <DeleteIcon />
                        </IconButton> */}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        {prod.length > 0 ? (
          <div className="check-out">
            <h1>Total Price:{total} </h1>

            <Button
              variant="outlined"
              onClick={() => {
                navigation("/checkout");
              }}
            >
              Check Out
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
