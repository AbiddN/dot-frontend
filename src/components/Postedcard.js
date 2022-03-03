import { useState } from "react";
import "./Postedcard.css";

function Postedcard({ post }) {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };
  return (
    <div className="postedcard-container">
      {console.log(post)}
      <div className="postedcard-wrapper">
        <div className="post-ava">
          <div className="post-ava-img">
            <img
              className="w-100 h-100"
              src={post.creator.decodedProfileImage}
            />
          </div>
        </div>
        <div className="posted-area">
          <div className="posted-username">
            <h3>{post.creator.name}</h3>
            <h5 className="time">23.07</h5>
          </div>
          {post.type == "image" && (
            <div className="h-100">
              <img className="w-50" src={post.decodedImage} alt="postImage" />
            </div>
          )}
          <h2 className="posted-textarea">{post.caption}</h2>
          <div className="feedback-area">
            <div className="icon like" onClick={handleLike}>
              <i className={`fas fa-heart ${like ? "liked" : ""}`}></i>
            </div>
            <div className="icon comment">
              <i className="fas fa-comments"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Postedcard;
