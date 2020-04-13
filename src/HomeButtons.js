import React from "react"
import "./App.css"

function HomeButtons(props) {

  return (
    
          <div className="homeButtons">       
          
            <button className="homeButtons__touchdown" onClick= { () => props.setHome(props.home + 7)}>Home Touchdown</button>
          
            <button className="homeButtons__fieldGoal" onClick= { () => props.setHome(props.home + 3)}>Home Field Goal</button>
          
          </div>
          )
}

export default HomeButtons