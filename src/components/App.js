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

export default function App() {
  const [name, setName] = useState(false);
  const [search, setSearch] = useState("");

  const routingDetail = {
    name: name,
    setName: setName,
    search: search,
    setSearch: setSearch,
  };
  return (
    <>
      {/* <UserContext.Provider value={[name, setName]}> */}
      <UserContext.Provider value={routingDetail}>
        <Routes>
          <Route path="/sigin" element={<Login />} />
          <Route path="/" element={<FrontPage />} />
          <Route path="/seller" element={<FrontPage />} />

          <Route path="/fruits" element={<Fruits />} />
          <Route path="/veggies" element={<VegiHome />} />

          <Route path="/fruits/:fruits" element={<Apple />} />
          <Route path="/fruits/cart" element={<Cart />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}
