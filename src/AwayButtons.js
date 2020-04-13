import React from "react"
import "./App.css"

function AwayButtons(props) {

  return (
    
          <div className="homeButtons">
    
            <button className="awayButtons__touchdown" onClick= { () => props.setAway(props.away + 7)}>Away Touchdown</button>

            <button className="awayButtons__fieldGoal" onClick= { () => props.setAway(props.away + 3)}>Away Field Goal</button>
    
          </div>
          )
}

export default AwayButtons