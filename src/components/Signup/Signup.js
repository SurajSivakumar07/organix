import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Context";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../../Redux/actions/action";

// import "./login.css"
export default function Signup(props) {
  // const [name, yup] = useContext(UserContext);

  const { name, setName, dup1, dup2 } = useContext(UserContext);

  const [user, setUser] = useState();

  const dispatch = useDispatch();

  const signupHandler = (e) => {
    e.preventDefault();
    setName(true);
    dispatch(checkLogin(true));

    localStorage.setItem("name", user);
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
              setUser(e.target.value);
            }}
          />

          <input type="email" placeholder="Enter your email" />
          <br></br>
          <input type="password" placeholder="Enter your password" />
          <br></br>

          <input type="submit" id="login-btn" />
        </form>
      </div>
    </>
  ) : (
    ""
  );
}
