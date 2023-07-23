import React, { useContext, useState } from "react";

import "./login.css";
import { UserContext } from "../Context";
import axios from "axios";
import { Co2Sharp } from "@mui/icons-material";
import { checkLogin } from "../../Redux/actions/action";
import { useDispatch } from "react-redux";
export default function Login(props) {
  // const [name, setName] = useContext(UserContext);
  // const { val, val2 } = useContext(UserContext);
  // const [name, setName] = val;

  const { name, setName, dup1, dup2 } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const getName = () => {
    axios.get("http://localhost:8080/api/v1/auth/details").then((res) => {
      res.data.filter((items) => {
        // if (email.localeCompare(items.email)) {

        if (items.email.includes(email)) {
          console.log(res);
          localStorage.setItem("name", items.name);
          dispatch(checkLogin(true));
          localStorage.setItem("isLoggedin", true);
        }
      });
    });
  };

  const loginFormHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/auth/authenticate", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.status);
          getName();
          props.Trigger(false);
        }
      })
      .catch((err) => alert("Invalid Password / User name"));
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
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(email);
              }}
            />
            <br></br>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
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
