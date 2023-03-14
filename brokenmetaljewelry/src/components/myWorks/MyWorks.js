import React from "react";
import "./MyWorks.css";
import moonScape from "../workimages/moonScape.png";
import tieFighters from "../workimages/tieFighters.png";
import blueSteel from "../workimages/blueSteel.png";
import aPortaitOfGranite from "../workimages/aPortraitOfGranite .png";

function MyWorks(){
   function MouseOver(event) {
    console.log("HERE")
    "card-image".event.style.width = "50%"; 
   }
   function MouseOut(event){
    "card-image".event.style.width = "";
   }                   
    return(
        <body className="card-body">
        <div className="card1" >
          {/* <card></card> */}
          <h1 className="cardTitles">MoonScape Necklace</h1>
        <img onMouseOver={MouseOver} onMouseOut={MouseOut} className="card-image"orientation="top"  src={moonScape} alt="Moonscape Neckalce" />
          <p>
            Copper and Silver on Brass with a Brass chain.  
          </p>
          <button href="#">Availability</button>
      </div> 
        <div className="card1" >
          <br></br>
          {/* <card></card> */}
          <h1 className="cardTitles">Tie Fighter Earings</h1>
        <img className="card-image"orientation="top" src={tieFighters} alt="Tie Figher Earings"/>
          <p>
            Silver and Brass with Sodalite inlay. 
          </p>
          <button href="#">Availability</button>
      </div> 
        <div className="card1" >
          <br></br>
          {/* <card></card> */}
          <h1 className="cardTitles">Blue Steel</h1>
        <img className="card-image"orientation="top" src={blueSteel} alt="Tie Figher Earings"/>
          <p>
            Heated Steel and Sterling Silver Chain. 
          </p>
          <button href="#">Availability</button>
      </div> 
        <div className="card1" >
          <br></br>
          {/* <card></card> */}
          <h1 className="cardTitles">A Portrait of Granite</h1>
        <img className="card-image"orientation="top" src={aPortaitOfGranite} alt="Tie Figher Earings"/>
          <p>
            Heated Steel and Sterling Silver Chain. 
          </p>
          <button href="#">Availability</button>
      </div> 
        </body>
    )
}
export default MyWorks;