import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./fruits.css";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import { SearchContext, UserContext } from "../Context";
import HambugerFruits from "./HambugerFruits";
import Geocode from "react-geocode";

import axios from "axios";
import { useSelector } from "react-redux";
import { LogoDevRounded } from "@mui/icons-material";

export default function Nav() {
  //location
  const [currentAdd, SetAddress] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  //Trigger
  const [trigger, setTrigger] = useState(false);
  const [trigger2, setTrigger2] = useState(false);
  //hambuger
  const [tab, setTab] = useState(false);

  //userContext

  const { name, setName, search, setSearch } = useContext(UserContext);

  const loggedIn = useSelector((state) => state.isLoggedIn);

  const signinHandle = () => {
    setTrigger(true);
    // setTrigger2(false);
  };

  const signupHandle = () => {
    setTrigger2(true);
    // setTrigger(false);
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="nav-wrap">
        <div className="nav-content">
          <div className="title">
            <h1>
              <Link to="/fruits">
                <span> Farm</span> House
              </Link>
            </h1>
          </div>

          <div className="searchBar">
            <i class="fa-solid fa-location-dot"></i>
            <select name="location" id="location">
              <option value="cbe">Coimbatore</option>
              <option value="select">Select Location</option>
            </select>
            <form>
              <input
                type="text"
                placeholder="Search Here !"
                onChange={searchHandler}
              />
              {/* <i class="fa-solid fa-magnifying-glass" id="serach-icon"></i> */}
            </form>
          </div>
          {name ? (
            <HambugerFruits />
          ) : (
            <div className="Account">
              <h3>
                <Link to="" onClick={signinHandle}>
                  Signin
                </Link>
              </h3>
              <h3>
                <Link to="" onClick={signupHandle}>
                  Signup
                </Link>
              </h3>
              <h3>
                <Link to="/contact" onClick={signupHandle}>
                  Contact
                </Link>
              </h3>
              <h3>
                <a href="#summary">FAQ'S</a>
              </h3>
              <h3>
                <Link to="/seller" onClick={signupHandle}>
                  Dealer
                </Link>
              </h3>
            </div>
          )}
        </div>
      </div>

      <Login trigger={trigger} Trigger={setTrigger}></Login>
      <Signup trigger={trigger2} Trigger={setTrigger2}></Signup>
    </>
  );
}
