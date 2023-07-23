import React, { useEffect, useState } from "react";
import Login from "./Login/Login";
import "./app.css";

import FrontPage from "./FrontPage/FrontPage";

import { Route, Routes } from "react-router";
import Fruits from "./Fruits/Fruits";
import { UserContext } from "./Context";
import VegiHome from "./Veggies/VegiHome";
import Apple from "./DynamicPages/Apple";
import Cart from "./Cart/Cart";
import HomeSeller from "./Seller/HomeSeller";
import SellerSignup from "./Seller/SellerSignup";
import DynamicVeg from "./DynamicPages/DynamicVeg";
import Footer from "./Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { data } from "./Fruits/FruitsData";
import {
  displayFruits,
  displayFruitsAction,
  setProducts,
} from "../Redux/actions/action";
import Contact from "./Contact/Contact";
import axios from "axios";
import Demo from "../Demo";
import SellerForm from "./Seller/SellerForm";

export default function App() {
  const [name, setName] = useState(false);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [img, setImg] = useState([]);

  const routingDetail = {
    name: name,
    setName: setName,
    search: search,
    setSearch: setSearch,
    cart: cart,
    setCart: setCart,
    img: img,
    setImg: setImg,
  };
  const dispatch = useDispatch();
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/")
  //     .then((res) => dispatch(displayFruitsAction(res)));
  // }, []);

  const prod = useSelector((state) => state.displayFruits);

  console.log(prod);

  return (
    <>
      <UserContext.Provider value={routingDetail}>
        <Routes>
          <Route path="/sigin" element={<Login />} />
          <Route path="/" element={<FrontPage />} />
          <Route path="/seller" element={<SellerForm />} />
          <Route path="/seller/signup" element={<SellerSignup />} />

          <Route path="/fruits" element={<Fruits />} />
          <Route path="/veggies" element={<VegiHome />} />

          <Route path="/fruits/:fruits" element={<Apple />} />
          <Route path="/veggies/:veg" element={<Apple />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}
