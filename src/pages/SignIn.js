import React, { useState } from "react";
import "./SignIn.scss";
import { createRequest } from "../services/http";
import logo from "../images/logo.png";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [signedIn, setSignedIn] = useState(false);

  const onSubmit = (data) => {
    let { unOrEmail, password } = data;
    let reqBody = createRequest("POST", { unOrEmail, password });
    try {
      fetch("http://localhost:5000/api/users/signin", reqBody)
        .then(async (response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error((await response.json()).message);
          }
        })
        .then((data) => {
          localStorage.setItem("token", data.data.token);
          setSignedIn(true);
        })
        .catch((error) => {
          setError("unOrEmail", {
            type: "duplicate",
            message: error.message,
          });
        });
    } catch (error) {
      console.log(error.message);
      setError("unOrEmail", "duplicate", error.message);
    }
  };
  return (
    <div className="sign-in-full-container">
      {signedIn && <Navigate to="/home" />}
      <h2 className="sign-in-text">SIGN IN</h2>
      <div className="sign-in-container">
        <form
          className="sign-in-content py-2 px-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="input-wrapper">
            <h3 className="input-text">Email :</h3>
            <div className="input-icon">
              <div className="icon">
                <i className="far fa-envelope"></i>
              </div>
              <input
                {...register("unOrEmail", {
                  required: "Username or email field cannot be empty",
                })}
                type="text"
                className="input-box"
                placeholder="wealwaysloveu"
              />
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name="unOrEmail"
            render={({ message }) => (
              <small className="color-error">{message}</small>
            )}
          />
          <div className="input-wrapper">
            <h3 className="input-text">Password :</h3>
            <div className="input-icon">
              <div className="icon">
                <i className="fas fa-lock"></i>
              </div>
              <input
                {...register("password", {
                  required: "Password field cannot be empty",
                })}
                type="Password"
                className="input-box"
                placeholder="**********"
              />
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <small className="color-error">{message}</small>
            )}
          />
          <button className="btn--" type="submit">
            LOGIN
          </button>
          <h6 className="login-txt">
            don't have an account? <Link to="/signup"> Sign Up </Link>
          </h6>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
