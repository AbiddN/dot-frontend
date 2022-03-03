import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./CommentCreate.css";

function CommentCreate(props) {
  const [input, setInput] = useState("");

  const user = useSelector((state) => state.user.user);

  const handleInput = (event) => {
    setInput(event.target.value);
    console.log(input);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 100) + 1,
      title: input,
    };

    props.onCreateComment(newComment);
    // console.log(newTodo);
  };

  return (
    //   <form className="todo-form" onSubmit={handleSubmit}>
    //       <input type="text" onChange={handleInput} />
    //       <button type="submit">Add</button>
    //   </form>
    <div className="onComment-container">
      <form className="onComment-wrapper" onSubmit={handleSubmit}>
        <div className="onComment-ava">
          <div className="onComment-ava-img">
            <img
              className="w-100 h-100"
              src={user && user.decodedProfileImage}
              alt=""
            />
          </div>
        </div>
        <textarea
          className="onComment-textarea"
          onChange={handleInput}
          placeholder="Write your comment here ..."
        />
        <button className="commentbutton" type="submit">
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}

export default CommentCreate;
