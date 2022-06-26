import "./clubs.css"
import Logo from "../../img/logo.png"
export default function Clubs() {
  return (
        <div className="clubs" >
            <div className="clubsLogo">
                <div className="logoImg">
                    <img 
                        className="logo"
                        src={Logo} alt="" 
                    />
                </div>
            </div>
            <i className="heartIcon fas fa-heart"></i>
            <p className="clubsTitle">The new gym</p>
            <p className="clubsStre">Hoang Van Thu</p>
            <p className="clubsPrice">$399.000/m <span>Tan Binh</span></p>
        </div>
    )
}
