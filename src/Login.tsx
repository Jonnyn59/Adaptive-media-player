import React from 'react';
import './files/css/login.css'

function login(){

}

function Login() {
    return (
        <div id={"logpage"}>
            <div className={"inputBox llogPos"}>
                <input type={"text"} required={true}/>
                <span>Login</span>
            </div>
            <div className={"inputBox ppassPos"}>
                <input type={"text"} required={true}/>
                <span>Password</span>
            </div>
            <button className={"ui-btn"}>
                <span>_____LOGIN_____</span><i></i>
            </button>
            <div className={"customTestDiv"}>
                <span>LOGIN</span>
                <input className={"customTest"} type={"text"}/>
            </div>
        </div>
    )
}

export default Login;