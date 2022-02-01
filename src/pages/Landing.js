import React from "react";
import Whitelogo from '../images/whitelogo.png'
import './Landing.scss';

const Landing = (props) => {
    console.log(props);
    return (
        <div className="lp_section">
        <div className="lp_container">
            <div className="lp_logo">
                <img src={Whitelogo} alt="" />
            </div>
            
            <div className="lp_area">
                <div className="lp_words">
                    <h2>Dots Connects You With Others Through Simplicity.</h2>
                </div>

                <div className="lp_button-area">
                    <button href="#" className="lp_button">LOGIN</button>
                    <button href="#" className="lp_button">SIGN UP</button>
                </div>
            </div>
        </div>
        
    </div>
    );
}


export default Landing;
