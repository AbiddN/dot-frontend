import React from "react";
import "./Friends.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Postingcard from "../components/Postingcard";
import Postedcard from "../components/Postedcard";
import Searchbar from "../components/Searchbar";
import Onlinecard from "../components/Onlinecard";
// import Searchbar from "../components/Searchbar";
import Friendscard from "../components/Friendscard";


const Friends = () => {
  return (
    <div className="friends">
        <Header/>
        <div className="friends-navbar">
          <Navbar/>
        </div>
        <div className="friends-post">
            <div className="friends-post-content">

              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>
              <Friendscard/>


          </div>

        </div>
        <div className="home-friends">
          <Searchbar/>
          <Onlinecard/>
        </div>
    </div>
  );
};

export default Friends;
