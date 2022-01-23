import React, { useState } from "react";
import "./SignIn.scss";
import { createRequest } from "../services/http";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function SignIn() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm();

  const [signedIn, setSignedIn] = useState(false);

  const onSubmit = (data) => {
    let { unOrEmail, password } = data;

    let reqBody = createRequest("POST", {
      unOrEmail,
      password,
    });

    try {
      fetch("http://localhost:5000/api/users/signin", reqBody)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("user", JSON.stringify(data.value));
          setSignedIn(true);
          navigate("/home");
        });
    } catch (err) {
      return setError("unOrEmail", "manual", err.message);
    }
  };

  return (
    <div className="sign-in-full-container mt-2">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h2 className="sign-in-text">SIGN IN</h2>
      <div className="sign-in-container p-2">
        <form className="sign-in-content" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <h4 className="input-text">Email / Username :</h4>
            <div className="input-icon">
              <div className="icon">
                <i class="far fa-envelope"></i>
              </div>
              <input
                {...register("unOrEmail", {
                  required: "Email or username field cannot be empty",
                })}
                type="text"
                className="input-box"
                placeholder="johndoe"
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
            <h4 className="input-text">Password :</h4>
            <div className="input-icon">
              <div className="icon">
                <i class="fas fa-lock"></i>
              </div>
              <input
                {...register("password", {
                  required: "Password field cannot be empty",
                })}
                type="password"
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
            don't have an account? <Link to="/"> Sign Up </Link>
          </h6>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
