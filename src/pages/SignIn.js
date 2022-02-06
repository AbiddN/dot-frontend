import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SignIn.scss";
import { signin } from "../actions/auth";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import config from "../config";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [signedIn, setSignedIn] = useState(false);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    let { unOrEmail, password } = data;
    
    dispatch(signin(unOrEmail, password))
      .then((data) => {
        localStorage.setItem("token", data.token);
        setSignedIn(true);
      })
      .catch((error) => {
        console.log(error);
        setError("unOrEmail", {
          type: "duplicate",
          message: error,
        });
      });
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
