import "./SideBar.css";
import React from "react";
import {Link} from "react-router-dom";

function SideBar (){
    return(
        <>
        <div className="sideBarContainer">
            <div className="sideBar">
                <Link to={{pathname: "../contact"}}>Contact Me</Link>
                <Link to={{pathname: "../works"}}>My Pieces</Link>
            </div>

        </div>
        </>
    )
}
export default SideBar;