import React from 'react';
import './files/css/login.css'

// eslint-disable-next-line @typescript-eslint/no-unused-vars

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