import React from 'react';
import './Comment.css';
import './Commentlist.css';

function Commentlist(props) {
    console.log(props.dataComments);
  return (
    <ul>
        {
        props.dataComments.map((comments)=>{
           return ( 
          //  <li key={todos.id}>{todos.title}</li>
              <div className="comment-container">
      <div className="comment-wrapper">
        <div className="comment-ava">
          <div className="comment-ava-img">
            <img src="" alt="" />
          </div>
        </div>
        <div className="comment-area">
          <h3 className="comment-username"> Nick Vancey</h3>
          <h2 className="comment-textarea">{comments.title}</h2>
        </div>
      </div>
     </div>
           )
        })
    }
    </ul>
  );
}

export default Commentlist;
