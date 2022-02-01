import React, { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.png";
import { createRequest } from "../services/http";
import config from "../config";

function Header() {
  const [logout, setLogout] = React.useState(false);
  const [loggedUser, setLoggedUser] = React.useState(null);

  const handleLogout = (event) => {
    event.preventDefault();
    delete localStorage.token;
    setLogout(true);
  };

  const getCurrentUser = async () => {
    let user = await fetch(
      `${config.apiURL}api/users/current_user`,
      createRequest("GET", {}, true)
    )
      .then((res) => res.json())
      .then((data) => {
        setLoggedUser(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (["home", "friends"].includes(useLocation().pathname.slice(1))) {
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
          <h4 className="nav-text">Hi...Marina</h4>
          <div className="ava-img">
            <img
              src={loggedUser ? loggedUser.decodedProfileImage : null}
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
