import React from 'react';
import './Friendscard.css';

function Friendscard() {
  return (
    <div class="friends__cards">
        <div class="friends__img">
            <img src="" alt="" /> 
        </div>
        <h3>Megumi-san</h3>
        <div class="friends__button-area">
            <div class="friends__button" id="friends__cont">
                <i class="far fa-user"></i>
            </div>
            <div class="friends__button" id="friends__mess">
                <i class="far fa-envelope"></i>
            </div>
        </div>
    </div>
  )
}

export default Friendscard;