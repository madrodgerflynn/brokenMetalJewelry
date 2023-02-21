import React from "react";
import "./MyWorks.css";
import moonScape from "../workimages/moonScape.png";
import tieFighters from "../workimages/tieFighters.png";
import blueSteel from "../workimages/blueSteel.png";

function MyWorks(){
   
    return(
        <body className="card-body">
        <div className="card1" >
          {/* <card></card> */}
        <img className="card-image"orientation="top" src={moonScape} alt="Moonscape Neckalce"/>
          <h1>MoonScape Necklace</h1>
          <p>
            Copper and Silver on Brass with a Brass chain.  
          </p>
          <button href="#">Availability</button>
      </div> 
        <div className="card1" >
          <br></br>
          {/* <card></card> */}
        <img className="card-image"orientation="top" src={tieFighters} alt="Tie Figher Earings"/>
          <h1>Tie Fighter Earings</h1>
          <p>
            Silver and Brass with Sodalite inlay. 
          </p>
          <button href="#">Availability</button>
      </div> 
        <div className="card1" >
          <br></br>
          {/* <card></card> */}
        <img className="card-image"orientation="top" src={blueSteel} alt="Tie Figher Earings"/>
          <h1>Tie Fighter Earings</h1>
          <p>
            Heated Steel and Sterling Silver Chain. 
          </p>
          <button href="#">Availability</button>
      </div> 
        </body>
    )
}
export default MyWorks;