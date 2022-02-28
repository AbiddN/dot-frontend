import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Postingcard.css";
import { createPost } from "../actions/post";

function Postingcard() {
  const dispatch = useDispatch();

  const [currentFile, setCurrentFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [caption, setCaption] = useState("");

  const pickImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setCurrentFile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let fd = new FormData();
    if (currentFile) {
      fd.append("type", "image");
      fd.append("image", currentFile);
    } else {
      fd.append("type", "text");
    }

    fd.append("caption", caption);

    dispatch(createPost(fd)).then((data) => {
      setCaption("");
    });
  };

  return (
    <div className="postingcard-container">
      <div className="postingcard-wrapper">
        <div className="post-ava">
          <div className="post-ava-img">
            <img src="" alt="" />
          </div>
        </div>
        <form className="post-area w-100" onSubmit={submitHandler}>
          {previewImage && (
            <div className="h-100">
              <img className="w-50" src={previewImage} alt="postImage" />
            </div>
          )}
          <textarea
            onChange={(e) => setCaption(e.target.value)}
            value={caption}
            className="textarea"
            placeholder="Write your status here ..."
          />
          <div className="post">
            <input
              type="file"
              name="image"
              id="image"
              onChange={pickImage}
              className="invisible h-0 w-0"
            />
            <label htmlFor="image" className="addimage">
              <i className="far fa-images"></i>
            </label>
            <button>Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Postingcard;
