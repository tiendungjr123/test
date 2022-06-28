import "./signUp.css"
import { Link } from "react-router-dom"
import {useHistory} from "react-router-dom"
import React, { useState } from 'react';
export default function SignUp() {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    async function handleSubmit(){
        let item = {username,email,phone,password}

        let result = await fetch("http://localhost:3000/auth/register-member-account",{
            method: 'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
            }
        })

        result = await result.json()
        if(result == null){
            alert('Vui lòng nhập đầy đủ thông tin')
        }
        else{
            localStorage.setItem("user-info",JSON.stringify(result))
            history.push("/add")
            alert('Đăng ký thành công');
            window.location.href = 'login'
        }
    }
  return (
    <div className="signUp">
        <p className="signUpTitle">Register Account</p>
        <p className="signUpDesc">Fill your details or continue with social media</p>
        <form onSubmit={handleSubmit}>
            <span className="icon">
                <i className="fas fa-user"></i>
            </span>
                <input 
                value={username}
                className="inputBox" type="text"
                placeholder="User Name" 
                onChange={e => setUserName(e.target.value)}
                />
            <span className="icon">
                <i className=" fa fa-envelope"></i>
            </span>
                <input 
                value={email}
                className="inputBox" type="text"
                placeholder="Email Address" 
                onChange={e => setEmail(e.target.value)}
                />
            <span className="icon">
                <i className="fas fa-phone"></i>
            </span>
                <input 
                value={phone}
                className="inputBox" type="text"
                placeholder="Phone Number" 
                onChange={e => setPhone(e.target.value)}
                />
            <span className="icon">
                <i className=" fa fa-lock"></i>
            </span>
                <input 
                value={password}
                className="inputBox" type="password"
                placeholder="Password" 
                onChange={e => setPassword(e.target.value)}
                />

        <button  className="signUpBtn">SIGN UP</button>
        </form>
        <div className="signUpOr">
            <div className="line"></div>
            <span className="lineText">Or Continue with</span>
            <div className="line"></div>
        </div>
        <div className="signUpSocial">
            <div className="signUpSocialGg">
                <i className="signUpIcon fab fa-google"></i>
            </div>
            <div className="signUpSocialFb">
                <i className="signUpIcon fab fa-facebook-f"></i>
            </div>
        </div>
        <div className="signUpText">
            <p>Already Have Account? 
                <span className="signUpTextBold">
                    <Link className="link" to = "/login">
                        Login
                    </Link>
                </span>
            </p>
        </div>
    </div>
  )
}
