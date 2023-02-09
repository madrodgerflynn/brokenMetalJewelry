import React from "react";
import "./MyWorks.css";
import "../workimages/moonScape.png"

function MyWorks(){
   
    return(
        <body>
        <div className="card1" style={{ width: '18rem' }}>
        <img orientation="top" src={"moonScape.png"} alt="Moonscape Neckalce" />
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