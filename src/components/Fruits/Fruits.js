import React, { useState } from "react";

import "./fruits.css";
import Nav from "./Nav";
import Options from "./Options";
import Slider from "./Slider";
import DisplayFruits from "./DisplayFruits";

export default function Fruits() {
  return (
    <>
      <Nav />
      <Options />
      <Slider />
      <DisplayFruits />
    </>
  );
}
