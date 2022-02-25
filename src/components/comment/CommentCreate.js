import React, { useState } from 'react';
import './CommentCreate.css'

function CommentCreate(props) {
    const[input,setInput] = useState('');

    const handleInput = (event) =>{
        setInput(event.target.value);
        console.log(input);
    }
    const handleSubmit = (event)=>{
        event.preventDefault();

        const newComment = {
            id:Math.floor(Math.random()*100)+1,
            title:input
        }

        props.onCreateComment(newComment);
        // console.log(newTodo);
    }

  return (
    //   <form className="todo-form" onSubmit={handleSubmit}>
    //       <input type="text" onChange={handleInput} />
    //       <button type="submit">Add</button>
    //   </form> 
      <div className="onComment-container">
          <form className="onComment-wrapper" onSubmit={handleSubmit}>
      
        <div className="onComment-ava">
          <div className="onComment-ava-img">
            <img src="" alt="" />
          </div>
        </div>
        <textarea className="onComment-textarea" onChange={handleInput} placeholder="Write your comment here ..."/>
        <button class="commentbutton" type='submit'><i class="fas fa-paper-plane"></i></button>
      
        </form>
     </div>
  );
}

export default CommentCreate;
