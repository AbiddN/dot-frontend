import React from "react";
import "./Likes.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Postingcard from "../components/Postingcard";
import Postedcard from "../components/Postedcard";
import Searchbar from "../components/Searchbar";
import Comment from "../components/comment/Comment";
import Onlinecard from "../components/Onlinecard";

function Likes() {
  return (
    // <div className="home-container">
    //   <div className="home">
    //     <div className="home-navbar">
    //       <Navbar/>
    //     </div>
    //     <div className="home-post">
    //       <Postingcard />
    //       <Postedcard />
    //     </div>

    //   </div>
    // </div>
    <div className="likes">
        <Header/>
        <div className="likes-navbar">
          <Navbar/>
        </div>
        <div className="likes-post">
          <div className="likes-post-content">
            <Postedcard/>
            <Postedcard/>
            <Postedcard/>
            <Postedcard/>
            <Postedcard/>
            <Postedcard/>
            <Postedcard/>
            <Postedcard/>
            <Comment />
          </div>
        </div>
        <div className="likes-friends">
          <Searchbar/>
          <Onlinecard/>
        </div>
    </div>
  );
}

export default Likes;
