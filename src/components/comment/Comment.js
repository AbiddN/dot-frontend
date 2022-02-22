import React from 'react';
import './Comment.css';
import Commentlist from './Commentlist';
import CommentCreate from './CommentCreate';
import {useState} from 'react';

function Comment() {

    const [comments,setComments] = useState([
        // {id:1,title:'makan'},
        // {id:2,title:'tidur'},
        // {id:3,title:'main'},
    ])

    const eventCreateComment = (comment)=>{
        setComments(comments.concat(comment))
    }

  return (
    <div className='todo'>
        <Commentlist dataComments={comments}/>
        <CommentCreate onCreateComment={eventCreateComment}/>
    </div>
  );
}

export default Comment;
