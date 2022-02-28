import React, { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import logo from "../images/logo.png";
import { createRequest } from "../services/http";
import config from "../config";
import { getMyProfile } from "../actions/user";

function Header(props) {
  const [logout, setLogout] = React.useState(false);
  const user = useSelector((state) => state.user.user);

  const handleLogout = (event) => {
    event.preventDefault();
    delete localStorage.token;
    setLogout(true);
  };

  const dispatch = useDispatch();

  // const getCurrentUser = async () => {
  //   let user = dispatch(getMyProfile())
  //     .then(async (data) => {
  //       console.log(await user);
  //     })
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    dispatch(getMyProfile()).then(() => {});
  }, []);

  if (
    ["home", "friends", "myprofile", "likes", "messages"].includes(
      useLocation().pathname.slice(1)
    )
  ) {
    return (
      <nav className="header">
        {logout && <Navigate to="/" />}
        <div className="logo-header">
          <div className="logo-img">
            <img src={logo} alt="" />
          </div>
          <h4 className="nav-text">DOTS</h4>
        </div>
        <div className="account">
          <h4 className="nav-text">Hi, {user && user.name}</h4>
          <div className="ava-img p-0">
            <img
              className="w-100 h-100"
              src={user && user.decodedProfileImage}
              alt=""
            />
          </div>
          <div
            className={`icon ${logout ? "active" : ""}`}
            onClick={handleLogout}
          >
            <i className="fas fa-caret-left"></i>
          </div>
          <div
            className={`logout ${logout ? "logoutactive" : ""}`}
            onClick={handleLogout}
          >
            <h3>Logout</h3>
          </div>
        </div>
      </nav>
    );
  } else {
    return null;
  }
}

export default Header;
