import React from "react"
import "./App.css"

function Home(props) {

return (
        <div className="home">
          <h2 className="home__name">Jojo</h2>
          <div className="home__score">{props.home}</div>
        </div>
        )
}

export default Home