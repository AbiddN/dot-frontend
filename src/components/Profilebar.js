import React from 'react'
import './Profilebar.css'

function Profilebar() {
  return (
    <div className="messages-container">
      <div className="messages-wrapper">
        <div className="messages-ava">
          <div className="messages-ava-img">
            <img src="" alt="" />
          </div>
        </div>
        <div className="messages-area">
          <div className="messages-username">
             <h3>Nick Vancey</h3>
             <h5 className="time">23.07</h5>
          </div>
          <h2 className="messages-textarea">Namaku adalah </h2>
        </div>
      </div>
     </div>
  )
}

export default Profilebar