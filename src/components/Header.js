import React from 'react';
import './Header.css';
import logo from '../images/logo.png';

function Header() {
    const [logout,setLogout]=React.useState(false);

    const handleLogout = ((event) => {
        event.preventDefault();
        setLogout(!logout);
    })
    
    return (
        <nav className="header">
            <div className="logo-header">
                <div className="logo-img">
                    <img src={logo} alt="" />
                </div>
                <h4 className='nav-text'>DOTS</h4>
            </div>
            <div className="account">
                <h4 className='nav-text'>Hi...Marina</h4>
                <div className="ava-img">
                    <img src='' alt="" />
                </div>
                <div className= {`icon ${logout?"active":""}`} onClick={handleLogout}>
                    <i className="fas fa-caret-left" ></i>
                </div>
                <div className= {`logout ${logout?"logoutactive":""}`} onClick={handleLogout}>
                    <h3>Logout</h3>
                </div>
            </div>
        </nav>
    )
}

export default Header
