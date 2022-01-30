import React, { useState } from "react";
import "./SignIn.scss";
import { createRequest } from "../services/http";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function SignIn() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let { unOrEmail, password } = data;
    let reqBody = createRequest("POST", { unOrEmail, password });
    try {
      fetch("http://localhost:5000/api/users/signin", reqBody)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      setError("unOrEmail", "manual", error.message);
    }
  };
  return (
    <div className="sign-in-full-container">
      {/* <div className="logo">
                <img src={logo} alt="" />
            </div> */}
      <h2 className="sign-in-text">SIGN IN</h2>
      <div className="sign-in-container">
        <form className="sign-in-content">
          <div className="input-wrapper">
            <h3 className="input-text">Email :</h3>
            <div className="input-icon">
              <div className="icon">
                <i class="far fa-envelope"></i>
              </div>
              <input
                type="text"
                className="input-box"
                placeholder="loveuall@rocketmail.com"
              />
            </div>
          </div>
          <div className="input-wrapper">
            <h3 className="input-text">Password :</h3>
            <div className="input-icon">
              <div className="icon">
                <i class="fas fa-lock"></i>
              </div>
              <input
                type="Password"
                className="input-box"
                placeholder="**********"
              />
            </div>
          </div>
          <button className="btn--">LOGIN</button>
          <h6 className="login-txt">
            don't have an account? <Link to="/"> Sign Up </Link>
          </h6>
          <button className="btn--" type="submit">
            LOGIN
          </button>
          <h6 className="login-txt">
            don't have an account? <Link to="/"> Sign Up </Link>
          </h6>
        </form>
      </div>
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message }) => (
          <small className="color-error">{message}</small>
        )}
      />
    </div>
  );
}

export default SignIn;
