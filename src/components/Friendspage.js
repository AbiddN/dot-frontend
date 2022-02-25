import React from 'react'
import './Friendspage.css'
function Friendspage() {
  return (
    <div class="friends__page">
            <div class="friends__ava">
                <img src="" alt="" />
            </div>
            <div className="friends__details">
                <h2>Nick Vancey</h2>
                <div className="friends__butt-area">
                    <div className="friends__btn" id="friends__addfriend">
                        <i class="fas fa-user-plus"></i>
                        <h5>Add</h5>
                    </div>
                    <div className="friends__btn" id="friends__mess">
                        <i class="far fa-envelope"></i>
                        <h5>Message</h5>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Friendspage