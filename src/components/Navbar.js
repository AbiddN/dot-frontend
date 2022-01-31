import React from "react";
import "./Navbar.css";
import whitelogo from "../images/whitelogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="tot">
      <div className="navbar-container">
        <div className="navbar">
          <Link to="/home" className="nav-box">
            <div className="icon">
              <i className="fas fa-home"></i>
            </div>
            <h2>Home</h2>
          </Link>
          <Link to="/friends" className="nav-box">
            <div className="icon">
              <i className="fas fa-user-friends"></i>
            </div>
            <h2>Friends</h2>
          </Link>
          <Link to="/messages" className="nav-box">
            <div className="icon">
              <i className="fas fa-user-friends"></i>
            </div>
            <h2>Messages</h2>
          </Link>
          <Link to="/likes" className="nav-box">
            <div className="icon">
              <i className="fas fa-heart"></i>
            </div>
            <h2>Likes</h2>
          </Link>
          <Link to="/profile" className="nav-box-outline">
            <div className="icon">
              <i className="fas fa-user-alt"></i>
            </div>
            <h2>My Profile</h2>
          </Link>
        </div>
      </div>
      <div className="hayolo"></div>
    </div>
  );
}

export default Navbar;
