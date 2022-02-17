import React from "react";
import "./Friends.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Postingcard from "../components/Postingcard";
import Postedcard from "../components/Postedcard";
// import Searchbar from "../components/Searchbar";
import Friendscard from "../components/Friendscard";


const Friends = () => {
  return (
    <div className="friends">
        <Header/>
        <div className="home-navbar">
          <Navbar/>
        </div>
        <div className="home-post">
          <Friendscard/>
        </div>
        <div className="home-friends">
        </div>
    </div>
  );
};

export default Friends;
