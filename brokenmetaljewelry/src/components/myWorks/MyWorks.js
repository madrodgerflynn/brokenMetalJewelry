import React from "react";
import "./MyWorks.css";
import moonScape from "../workimages/moonScape.png";
import tieFighters from "../workimages/tieFighters.png";
import blueSteel from "../workimages/blueSteel.png";
import aPortaitOfGranite from "../workimages/aPortraitOfGranite .png";
import { Link } from "react-router-dom";
// import data from "../data.js";

function MyWorks(){
        //  const {products} = data;
                
  return(
    <body className="card-body">
        <div className="card1" id="item1" >
          {/* <card></card> */}
          <h1 className="cardTitles">MoonScape Necklace</h1>
        <img  className="card-image"orientation="top"  src={moonScape} alt="Moonscape Neckalce" />
          <p>
            Copper and Silver on Brass with a Brass chain.  
          </p>
          <button href="#">Availability</button>
      </div> 
        <div className="card1" id="item2" >
          <br></br>
          {/* <card></card> */}
          <h1 className="cardTitles">Tie Fighter Earings</h1>
        <img className="card-image"orientation="top" src={tieFighters} alt="Tie Figher Earings"/>
          <p>
            Silver and Brass with Sodalite inlay. 
          </p>
          <Link to= {{pathname: "../purchases/Product.js" }} >Availability</Link>
      </div> 
        <div className="card1" id="item3" >
          <br></br>
          {/* <card></card> */}
          <h1 className="cardTitles">Blue Steel</h1>
        <img className="card-image"orientation="top" src={blueSteel} alt="Tie Figher Earings"/>
          <p>
            Heated Steel and Sterling Silver Chain. 
          </p>
          <button href="#">Availability</button>
      </div> 
        <div className="card1" id="item4" >
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