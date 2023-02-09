import React from "react";
import "./MyWorks.css";
import moonScape from "../workimages/moonScape.png"


function MyWorks(){
   
    return(
        <body className="card-body">
        <div className="card1" >
        <img orientation="top" src={moonScape} alt="Moonscape Neckalce" />
          <h1>MoonScape Necklace</h1>
          <p>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <button href="#">Go somewhere</button>
      </div> 
        </body>
    )
}
export default MyWorks;