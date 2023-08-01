import React from "react";
import "./checkOut.css";
import Nav from "../Fruits/Nav";

import bg from "../Assests/addtocart.gif";
import { red } from "@mui/material/colors";
export default function Checkout() {
  return (
    <>
      <Nav />
      <h1 id="check-out-text">
        Kindly Wait for confirmation{" "}
        <span style={{ color: "red" }}>
          Dear {localStorage.getItem("name")}
        </span>
      </h1>

      <div className="check-out-main">
        <img src={bg} />
      </div>
    </>
  );
}
