import React from "react";
import "./Home.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Postingcard from "../components/Postingcard";
import Postedcard from "../components/Postedcard";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className="home">
        <div className="home-navbar">
          <Navbar />
        </div>
        <div className="home-post">
          <Postingcard />
          <Postedcard />
        </div>
        <div className="home-friend"></div>
      </div>
    </div>
  );
}

export default Home;
