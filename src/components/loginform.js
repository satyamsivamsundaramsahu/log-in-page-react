import React, { useState } from "react";
import "./loginform.css"
const LoginForm = () =>{



    const[popupStyle,showPopup] = useState("hide")
    const popup = () =>{
        showPopup("login-popup")
        setTimeout(()=>showPopup("hide"),3000)

    }
    return(
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>

            <div className="login-btn" onClick={popup}>Login</div>

            <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google "></div>
            </div>
            <div className={popupStyle}></div>
            
        </div>
    )
}
export default LoginForm