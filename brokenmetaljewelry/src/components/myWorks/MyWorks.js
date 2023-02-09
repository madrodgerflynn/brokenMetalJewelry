import React from "react";
import "./myWorks.css";
import "../images/moonScape.png"

function myWorks(){
    let CCard 
    return(
        <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src={"moonScape.png"} />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CCardText>
          <CButton href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard> 
    )
}
export default myWorks;