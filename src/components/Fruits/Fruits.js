import React, { useState } from "react";

import "./fruits.css";
import Nav from "./Nav";
import Options from "./Options";
import Slider from "./Slider";
import DisplayFruits from "./DisplayFruits";
import { SearchContext } from "../Context";

export default function Fruits() {
  const [search, setSearch] = useState("");
  return (
    <>
      <SearchContext.Provider value={[search, setSearch]}>
        <Nav />
        <Options />
        <Slider />
        <DisplayFruits />
      </SearchContext.Provider>
    </>
  );
}
