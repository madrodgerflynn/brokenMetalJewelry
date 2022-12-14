import React, {useState} from "react";
import "./Bio.css";
import pictures from "./Pictures" 

function Bio() {
    const [ picture, setPicture] =useState(pictures[0]);

    const displayNextPicture = () => {
        if (picture.index < pictures.length -1) {
            setPicture(pictures[picture.index + 1]);
            return;
        }else{
            setPicture(pictures[0]);
            return;
        }

    }
     return (
         <div className="mainContainer">
            <div className="bioContainer">
                <h1>About Me</h1>
                <p>
                    Hello, my name is Tyler Anderson and this is my page. I figure I'll give you a little information about what I do. Working in the manufacturing/eCommerce industry I found all sorts of interesting scraps. It is with these scraps that I built my first necklace. From there it was all uphill. The training and practice has been difficult but incredibly enlightening. I aim to use scraps, to make things that seem trivial, beautiful. I know it sounds cheesy, but it has become a therapy in this crazy world we live in! 
                </p>
            </div>
            <div className="picCarousel">
               
                <button className="pictureBtn" onClick={displayNextPicture}>See me Work</button>
            </div>

            <div className="myPictures">
                <img classname="imagesOfMe"src={picture.picLink} alt={picture.alt}></img>

            </div>
        </div>
     )
}
export default Bio