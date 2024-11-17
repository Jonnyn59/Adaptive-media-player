import React from 'react';
import './files/css/login.css'

function Login() {
    return (
        <div id="logpage" className="login-container">
            <div className="customTestDiv login-form">
                <input 
                    className="customTest login-input" 
                    type="text" 
                    placeholder="Enter your username"
                />
                <span className="login-label">LOGIN</span>
            </div>
            <button className="ui-btn login-btn">
                <span>_____LOGIN_____</span>
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    )
}

export default Login;