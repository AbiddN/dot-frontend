import React from "react";
import "./Messages.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Postingcard from "../components/Postingcard";
import Profilebar from "../components/Profilebar";
import Postedcard from "../components/Postedcard";
import Searchbar from "../components/Searchbar";
import Comment from "../components/comment/Comment";
import Onlinecard from "../components/Onlinecard";

function Messages() {
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
    <div className="messages">
        <Header/>
        <div className="messages-navbar">
          <Navbar/>
        </div>
        <div className="messages-post">
          <div className="messages-post-content">
            <Profilebar />
            <Profilebar />
            <Profilebar />
            <Profilebar />
            <Profilebar />
            <Profilebar />
            <Profilebar />
            <Profilebar />
            <Profilebar />
            <Profilebar />
          </div>
        </div>
        <div className="messages-friends">
          {/* <Searchbar/>
          <Onlinecard/> */}
        </div>
    </div>
  );
}

export default Messages;
