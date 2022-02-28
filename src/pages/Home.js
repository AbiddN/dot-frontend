import React from "react";
import "./Home.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Postingcard from "../components/Postingcard";
import Postedcard from "../components/Postedcard";
import Searchbar from "../components/Searchbar";
import Comment from "../components/comment/Comment";
import Onlinecard from "../components/Onlinecard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../actions/post";

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  useEffect(() => {
    dispatch(getAllPosts()).then(() => {
      console.log(posts);
    });
  }, []);
  return (
    <div className="home">
      <Header />
      <div className="home-navbar">
        <Navbar />
      </div>
      <div className="home-post">
        <Postingcard />
        {posts &&
          posts.map((post) => {
            console.log("1");
            <Postedcard key={post._id} post={post} />;
          })}
        <Comment />
      </div>
      <div className="home-friends">
        <Searchbar />
        <Onlinecard />
        <Onlinecard />
        <Onlinecard />
        <Onlinecard />
      </div>
    </div>
  );
}

export default Home;
