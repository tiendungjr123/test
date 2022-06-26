import { Link } from "react-router-dom"
import "./login.css"
import React, { useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

    useEffect(() =>{
        if(localStorage.getItem("user-info")){
            history.push('/add')
        }
    },[])

    async function handleSubmit(){
        let item = {email,password}
        let result = await fetch("http://localhost:3000/api/login",{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
                "Accpept":'application/json'
            },
            body: JSON.stringify(item)
        });

        result = await result.json();
        if(email == null || password == null){
                alert('Vui lòng nhập username và password')
        }
        else if(email !== result.email || password !== result.password){
            alert('Sai tên email hoặc mật khẩu')
        }
        else if(email === result.email && password === result.password){
            alert('Đăng nhập thành công')
            localStorage.setItem("user-info",JSON.stringify(result))
            history.push('/add')
            window.location.href ="home"
        }
        else{
            alert('Đăng nhập thất bại')
        }
    
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
