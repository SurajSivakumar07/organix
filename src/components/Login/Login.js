import React, { useContext, useState } from "react";

import "./login.css";
import { UserContext } from "../Context";
export default function Login(props) {
  // const [name, setName] = useContext(UserContext);
  // const { val, val2 } = useContext(UserContext);
  // const [name, setName] = val;

  const { name, setName, dup1, dup2 } = useContext(UserContext);
  const loginFormHandler = (e) => {
    e.preventDefault();

    console.log("hello");
    setName(true);
  };
  return props.trigger ? (
    <>
      <div className="login-wrap-main">
        <div className="login">
          <div className="login-wrap">
            <h1>LOGIN</h1>

            <h1 onClick={() => props.Trigger(false)}>
              <i class="fa-regular fa-circle-xmark"></i>
            </h1>
          </div>

          <form className="fromInput" onSubmit={loginFormHandler}>
            <input type="email" placeholder="Enter your email" />
            <br></br>
            <input type="password" placeholder="Enter your password" />
            <br></br>

            <input type="submit" id="login-btn" />
          </form>

          <h3>Dont't have an Account ??</h3>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
