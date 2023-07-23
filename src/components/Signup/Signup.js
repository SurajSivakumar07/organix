import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Context";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../../Redux/actions/action";
import axios from "axios";

// import "./login.css"
export default function Signup(props) {
  // const [name, yup] = useContext(UserContext);

  const { name, setName, dup1, dup2 } = useContext(UserContext);

  const [user, setUser] = useState();

  const dispatch = useDispatch();

  const [namedup, setNameDup] = useState();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signupHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/v1/auth/register", {
        name: namedup,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          setName(true);
          dispatch(checkLogin(true));

          localStorage.setItem("name", user);

          localStorage.setItem("isLoggedin", true);

          props.Trigger(false);
        }
      });
  };

  const prod = useSelector((state) => state.isLoggedIn);

  return props.trigger ? (
    <>
      <div className="login">
        <div className="login-wrap">
          <h1>Signup</h1>

          <h1 onClick={() => props.Trigger(false)}>
            <i class="fa-regular fa-circle-xmark"></i>
          </h1>
        </div>

        <form className="fromInput" onSubmit={signupHandler}>
          <input
            type="text"
            placeholder="Enter your Name"
            onChange={(e) => {
              setNameDup(e.target.value);
              setUser(e.target.value);
            }}
            required
          />

          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br></br>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br></br>

          <input type="submit" id="login-btn" />
        </form>
      </div>
    </>
  ) : (
    ""
  );
}
