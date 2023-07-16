import React from "react";

import Options from "../Fruits/Options";
import Nav from "../Fruits/Nav";
import DisplayViggies from "./DisplayViggies";
import DisplayFruits from "../Fruits/DisplayFruits";
import Slider from "../Fruits/Slider";
import VeggiesSlider from "./VeggiesSlider";
import LocationData from "../Locations/LocationData";
import Summary from "../summary/Summary";

export default function VegiHome() {
  return (
    <>
      <Nav />
      <Options />
      <VeggiesSlider />
      <DisplayViggies />
      <Summary />
      <LocationData />
    </>
  );
}
