import React from "react";
import "./Home.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Postingcard from "../components/Postingcard";
import Postedcard from "../components/Postedcard";
<<<<<<< HEAD
// import Searchbar from "../components/Searchbar";
// import Onlinecard from "../components/Onlinecard";
=======
import Searchbar from "../components/Searchbar";
import Comment from "../components/comment/Comment";
import Onlinecard from "../components/Onlinecard";
>>>>>>> aaea762edccc35f357b327b5bbd735c46f159332

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
          <Postedcard/>
          <Comment />
        </div>
        <div className="home-friends">
<<<<<<< HEAD
          {/* <Searchbar/> */}
          {/* <Onlinecard/> */}
=======
          <Searchbar/>
          <Onlinecard/>
          <Onlinecard/>
          <Onlinecard/>
          <Onlinecard/>
>>>>>>> aaea762edccc35f357b327b5bbd735c46f159332
        </div>
    </div>
  );
}

export default Home;
