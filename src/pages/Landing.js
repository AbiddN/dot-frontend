import React from "react";

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="landing-wrapper">
                <div className="landing-header">
                    <div className="landing-header-logo">
                        <img src="https://i.ibb.co/0jZxXxq/whitelogo.png" alt="logo" />
                    </div>
                    <div className="landing-header-title">
                        <h1>Dot</h1>
                    </div>
                </div>
                <div className="landing-body">
                    <div className="landing-body-text">
                        <h2>Dot is a social media platform for connecting people with similar interests.</h2>
                    </div>
                    <div className="landing-body-button">
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;