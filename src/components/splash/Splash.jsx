import "./splash.css"
import Visual from "../../img/visual.png"
import { Link } from "react-router-dom";
export default function Splash() {
  return (
    <div className="splash">
      <img 
        src={Visual} alt="" 
        className="splashImg" 
      />
      <p className="splashTitle">Find the best gym near me</p>
      <button className="splashBtn">
      <Link className="link" to = "/login">
        Let’s Get Started <span><i className="fas fa-arrow-right"></i></span>
      </Link>
      </button>
    </div>
  )
}
