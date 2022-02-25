import React from 'react';
import './Postingcard.css';

function Postingcard() {
  return (
    <div className="postingcard-container">
      <div className="postingcard-wrapper">
        <div className="post-ava">
          <div className="post-ava-img">
            <img src="" alt="" />
          </div>
        </div>
        <div className="post-area">
          <textarea className="textarea" placeholder='Write your status here ...' />
          <div className="post">
            <div className="addimage">
              <i className="far fa-images"></i>
            </div>
            <button>Post</button>
          </div>
        </div>
      </div>
     </div>
  );
}

export default Postingcard;
