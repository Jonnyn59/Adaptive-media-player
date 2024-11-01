import React from 'react';
import './files/css/login.css'

function login(){

}

function Login() {
    return (
        <div id={"logpage"}>
            <div className={"customTestDiv"}>
                <input className={"customTest"} type={"text"}/>
                <span>LOGIN</span>
            </div>
            <button className={"ui-btn"}>
                <span>_____LOGIN_____</span><i></i>
            </button>
        </div>
    )
}

export default Login;