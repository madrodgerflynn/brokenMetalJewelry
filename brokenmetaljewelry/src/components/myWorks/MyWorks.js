import React from "react";
import "./myWorks.css";
import "../images/moonScape.png"

function myWorks(){
    let CCard 
    return(
        <div className="card1" style={{ width: '18rem' }}>
        <img orientation="top" src={"moonScape.png"} />
        <body>
          <h1>MoonScape Necklace</h1>
          <p>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <CButton href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard> 
    )
}
export default myWorks;