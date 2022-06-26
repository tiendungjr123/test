import Clubs from "../clubs/Clubs"
import "./clubsList.css"

export default function ClubsList() {
  return (
    <>
      <div className="clubsListTitle">
        <p className="clubsText">List <span>Club</span> </p>
      </div>
    <div className="clubsList">
      <Clubs/>
      <Clubs/>
      <Clubs/>
      <Clubs/>
      <Clubs/>
      <Clubs/>
    </div>
    <p className="clubsShow">Show all</p>
    </>
  )
}
