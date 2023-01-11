import React, {useState} from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

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
    function handleEvent(event) {
        event.preventDefault();
        event.target.reset();

        let contactFormInputs = {
            sender_name: senderName,
            sender_email: senderEmail,
            message: message,
        };
        emailjs
        .send(
            "jewelry_email",
            "template_c0k80yu",
            contactFormInputs,
            "3blpqXtTGdtk1kaCS"
        )
        .then(
            (response) => {
                console.log("Email sent.", response.status, response.text);
            },
            (err) => {
                console.log.apply("Something went wrong..", err);
            }
        );
    }
    return(
        <div className="contactContainer">
            <form className="row contactForm" onSubmit={handleEvent}>
                <div className="col nameInput">
                    <input name="sender_name"
                    type= "text"
                    className="form-control fullName"
                    placeholder="Full Name"
                    onChange={updateInputState}></input>
                </div>
            </form>
        </div>
    )
}
export default Contact