import React from "react";
import "./Myprofile.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Onlinecard from "../components/Onlinecard";
// import Searchbar from "../components/Searchbar";
import Friendspage from "../components/Friendspage";
import Postedcard from "../components/Postedcard";


const Myprofile = () => {
  return (
    <div className="profile">
        <Header/>
        <div className="myprofile-navbar">
          <Navbar/>
        </div>
        <div className="myprofile-post">
              <Friendspage/>
              <Postedcard />
              <Postedcard />
              <Postedcard />
              <Postedcard />

        </div>
        <div className="home-friends">
          <Searchbar/>
          <Onlinecard/>
        </div>
    </div>
  );
};

export default Myprofile;
