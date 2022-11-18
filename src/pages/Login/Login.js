import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "./logoPng.png";
import welcomeimg from "./welcomeback.svg";

function Login() {
  const [emailval, setemailval] = useState("");
  const [passval, setpassval] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-login">
      {/* Login page
      <Link to="/Login">Login</Link> */}
      {/* //login container */}
      <div className="login-container">
        <div className="left">
          <div className="login-img">
            <img src={Logo} id="img-id" alt="" srcSet="" />
          </div>
          <form onSubmit={handlesubmit}>
            <label for="emil1">Email</label>
            <input
              placeholder="Enter your email..."
              type="email"
              value={emailval}
              onChange={(e) => {
                setemailval(e.target.value);
              }}
              id="emil1"
            />

            <label for="pwd1">Password</label>
            <input
              placeholder="Enter your password"
              type="password"
              value={passval}
              onChange={(e) => {
                setpassval(e.target.value);
              }}
              id="pwd1"
            />
            <button id="submit_btn">Login</button>
          </form>

          <div className="form-footer">
            <h4>
              Don't have an account ?{" "}
              <Link to="/Login" className="link">
                Register
              </Link>{" "}
            </h4>
          </div>
        </div>

        <div className="right">
          <div className="welcome-note">
            <h3>Welcome back</h3>
          </div>

          <div className="welcome-img">
            <img src={welcomeimg} id="wel-img-id" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
