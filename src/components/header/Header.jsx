import "./header.css"
import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div className="header">
        <div className="headerLeft">
            <div className="menu">
            <i className="menuIcon fas fa-bars"></i>
            </div>
        </div>
        <div className="headerCenter">
            <input 
                className="headerInput"
                type="text" name=""  
                placeholder="Search here..."
            />
            <div className="searchIcon">
                <div className="line1">
                </div>
                <div className="line2"></div>
                <div className="reacta1"></div>  
                <div className="reacta2"></div>  
            </div>
        </div>
        <div className="headerRight">
            <div className="info">
                Nguyễn Tiến Dũng
                <p className="infoNumber">0375158965</p>
            </div>
            <img
                className="infoImg" 
                src="https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2022_06_22/messi8_1__1.jpg" alt="" 
            />
            <button className="logOutBtn">
            <Link className="link" to = "/login">
                SIGN OUT
            </Link>
            </button>
        </div>
    </div>
  )
}
