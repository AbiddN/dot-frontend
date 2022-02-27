import React from 'react'
import './Chat.scss'
import Rightbubble from './Rightbubble'
import Leftbubble from './Leftbubble'
function Chat() {
  return (
    <div className="messages-friends-wrapper">
            <div className="chat-title">
              <h3>Nick Vancey Morris</h3>
            </div>
            <div className="chat-box">
               <Leftbubble />
                <Rightbubble />
               <Leftbubble />
                <Rightbubble />
               <Leftbubble />
                <Rightbubble />
               <Leftbubble />
                <Rightbubble />


              



            </div>

            <div className="chat-typing-area">
              <textarea className="chat_textarea" placeholder='Write your status here ...' />
              <div className="chat-send">
                  <i class="far fa-paper-plane"></i>
              </div>
            </div>
        </div>
  )
}

export default Chat