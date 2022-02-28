import React from 'react';
import './Postedcard.css';

function Postedcard() {
  
  const [like,setLike] = React.useState(false);
  const handleLike = (()=>{
    setLike(!like);
  })
  return (
    <div className="postedcard-container">
      <div className="postedcard-wrapper">
        <div className="post-ava">
          <div className="post-ava-img">
            <img src="" alt="" />
          </div>
        </div>
        <div className="posted-area">
          <div className="posted-username">
             <h3>Nick Vancey</h3>
             <h5 className="time">23.07</h5>
          </div>
          <h2 className="posted-textarea">HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOOHALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO HALOO</h2>
          <div className="feedback-area">
            <div className='icon like' onClick={handleLike}>
              <i className={`fas fa-heart ${like?"liked":""}`}></i>  
            </div>
            <div className="icon comment">
              <i className='fas fa-comments'></i>
            </div>
          </div>
        </div>
      </div>
     </div>
  );
}

export default Postedcard;
