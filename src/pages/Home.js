import React from "react";
import "./Home.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Postingcard from "../components/Postingcard";
import Postedcard from "../components/Postedcard";
// import Searchbar from "../components/Searchbar";
// import Onlinecard from "../components/Onlinecard";

function Home() {
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
    <div className="home">
        <Header/>
        <div className="home-navbar">
          <Navbar/>
        </div>
        <div className="home-post">
          <Postingcard/>
          <Postedcard/>
        </div>
        <div className="home-friends">
          {/* <Searchbar/> */}
          {/* <Onlinecard/> */}
        </div>
    </div>
  );
}

export default Home;
