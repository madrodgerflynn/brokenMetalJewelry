import "./SideBar.css";
import React from "react";
import {Link} from "react-router-dom";

function SideBar (){
    return(
        <>
        <div className="sideBarContainer">
            <div className="sideBar">
                <Link to={{pathname: "../contact"}}>Contact Me</Link>
                <Link to={{pathname: "../myworks"}}>My Pieces</Link>
                <Link to={{pathname: "../bio"}}>Home</Link>
            </div>

        </div>
        </>
    )
}
export default SideBar;