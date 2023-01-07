import React, {useState} from "react";
import "./Contact.css";

function Contact(){
    let[senderName, setSenderName] = useState("");
    let[senderEmail, setSenderEmail] = useState("");
    let[message, setMessage] = useState("");

    function updateInputState(event) {
        switch (event.target.name) {
            case "sender_name":
                setSenderName(event.target.value);
            break;
            case "sender_email":
                setSenderEmail(event.target.value);
                break;
                case "message":
                    setMessage(event.target.value);
                    break;
        }
    }
    return(
        <div className="contactContainer">
            <form className="row contactForm" onSubmit={handleEvent}></form>
        </div>
    )
}
export default Contact