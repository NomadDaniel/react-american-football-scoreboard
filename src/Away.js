import React from "react"
import "./App.css"


function Away(props) {

  return (
          <div className="away">
            <h2 className="away__name">Me</h2>
            <div className="away__score">{props.away}</div>
          </div>
          )
}

export default Away