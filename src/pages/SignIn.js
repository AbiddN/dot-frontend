import React from 'react'
import './SignIn.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

function SignIn() {
    return (
        <div className="sign-in-full-container">
            {/* <div className="logo">
                <img src={logo} alt="" />
            </div> */}
            <h2 className='sign-in-text'>SIGN IN</h2>
        <div className="sign-in-container">
            <div className="sign-in-content">
                <div className="input-wrapper">
                    <h3 className='input-text'>Email :</h3>
                    <div className="input-icon">
                    <div className="icon">
                        <i class="far fa-envelope"></i>
                    </div>
                    <input type="text" className="input-box" placeholder='loveuall@rocketmail.com' />
                    </div>
                </div>
                <div className="input-wrapper">
                    <h3 className='input-text'>Password :</h3>
                    <div className="input-icon">
                    <div className="icon">
                        <i class="fas fa-lock"></i>
                    </div>
                    <input type="Password" className="input-box" placeholder='**********' />
                    </div>
                </div>
                <button className='btn--'>LOGIN</button>
                <h6 className='login-txt'>don't have an account? <Link to='/' > Sign Up </Link></h6>
            </div>
        </div>
        </div>
    )
}

export default SignIn
