import React from "react";
import "./Friends.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Postingcard from "../components/Postingcard";
import Postedcard from "../components/Postedcard";

const Friends = () => {
  return (
    <div className="home-container">
      <h1>HELLOOOOO</h1>
      <div className="home-post">
        <Postingcard />
        <Postedcard />
      </div>
    </div>
  );
};

export default Friends;
