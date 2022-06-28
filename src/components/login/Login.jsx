import { Link } from "react-router-dom"
import "./login.css"
import React, { useState } from 'react';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async e => {
        e.preventDefault();
        let result =await fetch('http://staging.thenewgym.vn:3000/auth/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
                },
            body: JSON.stringify({
                'username':'111504@tng.vn',
                'password':'1234567890'
            })
        });
        console.warn(result)
        result = await result.json()
    }

  return (
    <div className="login">
        <p className="loginTitle">Welcome Back!</p>
        <p className="loginDesc">Fill your details or continue with social media</p>
        <form>
            <span className="icon">
                <i className=" fa fa-envelope"></i>
            </span>
                <input 
                className="inputBox" type="text"
                placeholder="Email Address" 
                onChange={e => setEmail(e.target.value)}
                />
            <br />
            <br />
            <span className="icon">
                <i className=" fa fa-lock"></i>
            </span>
                <input 
                className="inputBox" type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)} 
                />
        </form>
        <button onClick={handleSubmit} className="loginBtn">
                LOGIN
        </button>
        <div className="loginOr">
            <div className="line"></div>
            <span className="lineText">Or Continue with</span>
            <div className="line"></div>
        </div>
        <div className="loginSocial">
            <div className="loginSocialGg">
                <i className="loginIcon fab fa-google"></i>
            </div>
            <div className="loginSocialFb">
                <i className="loginIcon fab fa-facebook-f"></i>
            </div>
        </div>
        <div className="loginText">
            <p>New User? 
                <span className="loginTextBold">
                    <Link className="link" to = "/signup">
                        Create Account
                    </Link>
                </span>
            </p>
        </div>
    </div>
  )
}
