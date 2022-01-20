import React from 'react'
import './SignUp.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
         <div className="sign-up-full-container">
            {/* <div className="logo">
                <img src={logo} alt="" />
            </div> */}
            <h2 className='sign-up-text'>SIGN UP</h2>
        <div className="sign-up-container">
            <div className="sign-up-content">
                <div className="input-wrapper">
                    <h3 className='input-text'>Name :</h3>
                    <div className="input-icon">
                    <div className="icon">
                        <i class="far fa-user"></i>
                    </div>
                    <input type="text" className="input-box" placeholder='wealwaysloveu' />
                    </div>
                </div>
                <div className="input-wrapper">
                    <h3 className='input-text'>Email :</h3>
                    <div className="input-icon">
                    <div className="icon">
                        <i class="far fa-envelope"></i>
                    </div>
                    <input type="email" className="input-box" placeholder='loveuall@rocketmail.com' />
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
                <div className="input-wrapper">
                    <h3 className='input-text'>Repeat Password :</h3>
                    <div className="input-icon">
                    <div className="icon">
                        <i class="fas fa-lock"></i>
                    </div>
                    <input type="Password" className="input-box" placeholder='**********' />
                    </div>
                </div>
                <button className='btn--'>SIGN UP</button>
                <h6 className='login-txt'>Already have an account? <Link to='/Signin' > Sign In </Link></h6>
            </div>
        </div>
        </div>
    )
}

export default SignUp
