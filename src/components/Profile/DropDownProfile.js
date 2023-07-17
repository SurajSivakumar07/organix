import React from "react";

import "./profile.css";
import { Link, useNavigate } from "react-router-dom";
export default function DropDownProfile() {
  const navigation = useNavigate();
  return (
    <>
      <div className="profile-drop-down">
        <ul>
          <li>
            <Link to="/">My Account</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li
            onClick={() => {
              localStorage.clear();
              window.location.reload();
              navigation("/fruits");
            }}
          >
            Logout
          </li>
        </ul>
      </div>
    </>
  );
}
