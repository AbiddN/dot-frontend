import React from "react";
import "./Friends.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Postingcard from "../components/Postingcard";

class Friends extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="home">
          <div className="home-navbar">
            <Navbar />
          </div>
          <div className="friends-main">
            <h1>Friends</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
